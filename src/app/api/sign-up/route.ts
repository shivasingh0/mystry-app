import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, email, password } = await request.json();

    // Check existing user in database by username
    const existingUserVerifiedByUsername = await UserModel.findOne({
      username,
      isVerified: true,
    });

    console.log("existingUserVerifiedByUsername",existingUserVerifiedByUsername)

    if (existingUserVerifiedByUsername) {
      return Response.json(
        {
          success: false,
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Check existing user in database by email
    const existingUserByEmail = await UserModel.findOne({
      email,
    });

    console.log("existingUserByEmail",existingUserByEmail)

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("verifyCode",verifyCode)

    if (existingUserByEmail) {
      console.log("existingUserByEmail",existingUserByEmail)
      if (existingUserByEmail.isVerified) {
        console.log("User already exist with this email",existingUserByEmail.isVerified);
        return Response.json(
          {
            success: false,
            message: "User already exist with this email",
          },
          { status: 400 }
        );
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        (existingUserByEmail.password = hashedPassword),
          (existingUserByEmail.verifyCode = verifyCode),
          (existingUserByEmail.verifyCodeExpiry = new Date(
            Date.now() + 3600000
          ));
        // save user
        await existingUserByEmail.save();
      }
    } else {
      // Create new user
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword",hashedPassword)
      const expiryDate = new Date();
      console.log("expiryDate",expiryDate)
      expiryDate.setHours(expiryDate.getDate() + 1);
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        isVerified: false,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isAcceptMessage: true,
        messages: [],
      });
      console.log("newUser",newUser)
      await newUser.save(); // Save user to database
      console.log("saving user...mail")
    }
    console.log("sending...mail")
    // send verification email
    const emailResponse = await sendVerificationEmail(
      email,
      verifyCode,
      username
    );

    console.log("emailResponse", emailResponse)

    if (!emailResponse.success) {
      return Response.json(
        {
          success: false,
          message: emailResponse.message,
        },
        { status: 500 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "User registered successfully. Please verify your email",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      }
    );
  }
}
