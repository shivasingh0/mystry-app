import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { usernameValidation } from "@/schemas/signUpSchema";
import { z } from "zod";

const UsernameQuerySchema = z.object({
  username: usernameValidation,
});

/**
 * @description Check if a username is available
 * @param {Request} request - The incoming request
 * @returns {Response} - The response to the request
 * @throws {Error} - If there is an error checking the username
 */
export async function GET(request: Request) {
    
  await dbConnect();

  try {
    const { searchParams } = new URL(request.url);
    const queryParam = { username: searchParams.get("username") };

    // validate with zod
    const result = UsernameQuerySchema.safeParse(queryParam);
    console.log("line 26",result);

    if (!result.success) {
      const usernameErrors = result.error.format().username?._errors || [];
      console.log("usernameErrors",usernameErrors)

      return Response.json(
        {
          success: false,
          message:
            usernameErrors.length > 0
              ? usernameErrors.join(", ")
              : "Invalid query parameters",
        },
        {
          status: 400,
        }
      );
    }

    const { username } = result.data;
    console.log("username",username)

    const existingVerifiedUser = await UserModel.findOne({
      username,
      isVerified: true,
    });

    console.log("existingVerifiedUser",existingVerifiedUser)

    if (existingVerifiedUser) {
      return Response.json(
        {
          success: false,
          message: "Username already taken",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is unique",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error checking username", error);
    return Response.json(
      {
        success: false,
        message: "Error checking username",
      },
      {
        status: 500,
      }
    );
  }
}
