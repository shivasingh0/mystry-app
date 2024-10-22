import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "Username must be at least 3 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");


export const signUpSchema = z.object({
    username: usernameValidation,
    password: z.string().min(6, "Password must be at least 6 characters long"),
    email: z.string().email({message: "Invalid email"})
})