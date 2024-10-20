import dbConnect from "@/lib/dbConnect";
import UserModel, { Message, User } from "@/model/User";

/**
 * @description Send a message to a user
 * @param {Request} request - The incoming request containing the username and message content
 * @returns {Response} - The response to the request
 * @throws {Error} - If there is an error sending the message
 */
export async function POST(request: Request) {
  await dbConnect();

  await request.json();
  const { username, content } = await request.json();

  try {
    const user = await UserModel.findOne({ username });

    if (!user) {
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

    // is user accepting messages
    if (!user.isAcceptMessage) {
      return Response.json(
        {
          success: false,
          message: "User is not accepting messages",
        },
        {
          status: 403,
        }
      );
    }

    // send message
    const newMessage = { content, createdAt: new Date() };

    user.messages.push(newMessage as Message); // aserting the type message

    await user.save();

    return Response.json(
      {
        success: true,
        message: "Message sent successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error adding messages",error);
    return Response.json(
      {
        success: false,
        message: "Error sending message",
      },
      {
        status: 500,
      }
    );
  }
}
