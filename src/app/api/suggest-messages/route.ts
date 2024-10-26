import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should separated by '||'. These questions are for an anonymous social messaging platform, like Qooh,me, and should be suitable for a diverse audience. Avoid personal oe sensitive topics, focusing interaction. For example, your output should be structured like this: 'What's a hobby you've recently started?||If you could have dinner with any historical figure, who would it be?||What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

    const response = await model.generateContent(prompt);
    console.log(response);

    return Response.json(
      {
        success: true,
        message: "Messages generated successfully",
        data: response,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("An unexpected error ", error);
    return Response.json(
      {
        success: false,
        message: "Failed to suggest messages",
      },
      {
        status: 500,
      }
    );
  }
}
