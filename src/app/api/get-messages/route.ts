import dbConnect from "@/lib/dbConnect";
import UserModel, { User } from "@/model/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import mongoose from "mongoose";

/**
 * @description Get the messages of the user
 * @param {Request} request - The incoming request
 * @returns {Response} - The response to the request
 * @throws {Error} - If there is an error getting the messages
 */
export async function GET(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const user: User = session?.user;

  if (!session || !user) {
    return Response.json(
      {
        success: false,
        message: "Not Authenticated",
      },
      {
        status: 401,
      }
    );
  }

  const userId = new mongoose.Types.ObjectId(user._id);

  try {
    const user = await UserModel.aggregate([
      // created a aggregation pipeline
      {
        $match: {
          //match user by userID
          _id: userId,
        },
      },
      {
        $unwind: "$messages", // unwind all the messages
      },
      {
        $sort: {
          "messages.createdAt": -1, // sort the messages in terms of date
        },
      },
      {
        $group: {
          _id: "$_id",
          messages: {
            $push: "$messages", // make a group of messages
          },
        },
      },
    ]);
    if (!user || user.length === 0) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: user[0].messages,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Unexpected error",error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
