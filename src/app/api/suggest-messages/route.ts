import Openai from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

// create a OpenAI API client (edge friendly)
const openai = new Openai({ apiKey: process.env.OPENAI_API_KEY });

// set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(request: Request) {
  try {

    const prompt = "Create a list of three open-ended and engaging questions formatted as a single string. Each question should separated by '||'. These questions are for an anonymous social messaging platform, like Qooh,me, and should be suitable for a diverse audience. Avoid personal oe sensitive topics, focusing interaction. For example, your output should be structured like this: 'What's a hobby you've recently started?||If you could have dinner with any historical figure, who would it be?||What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."

    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-instruct",
      max_tokens: 400,
      stream: true,
      prompt,
    });

    // Convert the OpenAI response to a streaming text response
    const stream = OpenAIStream(response);

    // return Response.json({ success: true });
    return new StreamingTextResponse(stream);
  } catch (error) {
    if (error instanceof Openai.APIError) {
      const { name, status, headers, message } = error;

      console.log("OpenAI API Error", error);
      return NextResponse.json(
        {
          name,
          status,
          headers,
          message,
        },
        {
          status,
        }
      );
    } else {
      console.log("An unexpected error ", error);
      throw error;
    }
  }
}
