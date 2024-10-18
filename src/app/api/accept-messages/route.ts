import { getServerSession, User } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
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

  const userId = user._id;

  const { acceptMessages } = await request.json();

  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      { isAcceptingMessages: acceptMessages },
      { new: true }
    );

    if (!updatedUser) {
      return Response.json(
        {
          success: false,
          message: "Failed to update user status to accept messages",
        },
        {
          status: 401,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message acceptance status updated successfully",
        updatedUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Failed to update user",
      },
      {
        status: 500,
      }
    );
  }
}

/**
 * @description Get the message acceptance status of the user
 * @param {Request} request - The incoming request
 * @returns {Response} - The response to the request
 * @throws {Error} - If there is an error getting the status
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

  const userId = user._id;

  try {
    const foundUser = await UserModel.findById(userId);

    if (!foundUser) {
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
        message: "User found successfully",
        isAcceptingMessages: foundUser.isAcceptMessage,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error is getting message acceptance status",
      },
      {
        status: 500,
      }
    );
  }
}
