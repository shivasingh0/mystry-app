"use client";
import { useParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messageSchema } from "@/schemas/messageSchema";
import * as z from "zod";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/types/ApiResponse";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomSuggestions, setRandomSuggestions] = useState([
    "What's a place you've always wanted to visit and why?",
    "If you could have any superpower, what would it be and how would you use it?",
    "What's a book or movie that has significantly impacted your life, and in what way?",
  ]);

  const params = useParams<{ username: string }>();
  const username = params.username;

  const { toast } = useToast();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
  });

  const messageContent = form.watch("content");

  const handleMessageClick = (message: string) => {
    form.setValue("content", message);
  };

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/send-message", {
        username: username,
        ...data,
      });

      toast({
        title: "Success",
        description: response.data.message,
      });
      form.reset({ ...form.getValues(), content: "" });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;

      toast({
        title: "Error",
        description:
          axiosError.response?.data.message ?? "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const showMessageSuggestions = async () => {
    setIsLoading(true);
    try {
      const {
        data: { data },
      } = await axios.post<ApiResponse>("/api/suggest-messages");

      // Destructure the response for clarity
      const { candidates } = data.response;

      // Check if candidates exist
      if (candidates.length > 0) {
        const rawText = candidates[0].content.parts[0].text;
        const suggestions = rawText
          .split("||")
          .map((question: string) => question.trim())
          .filter(Boolean); // Filter out any empty strings

        console.log("suggestions", suggestions);
        setRandomSuggestions(suggestions);
      } else {
        toast({
          title: "No Suggestions",
          description: "No message suggestions available.",
        });
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;

      // Enhanced error handling
      const errorMessage =
        axiosError.response?.data.message || "Failed to suggest messages";
      console.error("Error fetching suggestions:", error); // Log the full error for debugging

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="shadow-md h-24 w-full mx-auto text-center flex items-center justify-center">
        <h1 className="text-4xl font-bold">Public profile link</h1>
      </div>

      <div className="container w-full my-5 p-10 rounded-md mx-10 border">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Send Anonymous Message to @{username}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your anonymous message here"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              {isLoading ? (
                <Button disabled className="bg-black text-white">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading || !messageContent}
                  className="bg-black text-white hover:bg-[#363636]"
                >
                  Send It
                </Button>
              )}
            </div>
          </form>
        </Form>
        <div className="text-center font-bold">
          <h2 className="text-2xl mt-10">OR</h2>
        </div>
        <div className="space-y-4 my-8">
          <div className="space-y-2 text-white">
            <Button onClick={showMessageSuggestions}>Show Suggestions</Button>
          </div>
          <p className="font-bold">Click on any message to select it.</p>
          {randomSuggestions.length > 0 && (
            <Card className="border-black">
              <CardHeader className="">
                <h3 className="text-xl font-semibold">Messages</h3>
              </CardHeader>
              <CardContent className="flex flex-col">
                {randomSuggestions.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="mb-2 border bg-slate-50 hover:bg-slate-200"
                    onClick={() => handleMessageClick(message)}
                  >
                    {message}
                  </Button>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
        <Separator />
        <div className="text-center mt-5">
          <div className="mb-4">Get Your Message Board</div>
          <Link href={"/sign-up"}>
            <Button className="bg-black text-white">Create Your Account</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SendMessage;
