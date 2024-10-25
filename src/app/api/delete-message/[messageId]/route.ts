import dbConnect from "@/lib/dbConnect";
import UserModel, { User } from "@/model/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";

/**
 * @description Delete a message from a user's message list
 * @param {Request} request - The incoming request
 * @param {{params: {messageId: string}}} context - The context of the request
 * @returns {Response} - The response to the request
 * @throws {Error} - If there is an error deleting the message
 */
export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: {
      messageId: string;
    };
  }
) {
  const messageId = params.messageId;
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

  try {
    const updatedResult = await UserModel.updateOne(
      { _id: user._id },
      {
        $pull: {
          messages: {
            _id: messageId,
          },
        },
      }
    );

    if (updatedResult.modifiedCount == 0) {
      return Response.json(
        {
          success: false,
          message: "Message not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Message deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Error deleting message",
      },
      {
        status: 500,
      }
    );
  }
}
