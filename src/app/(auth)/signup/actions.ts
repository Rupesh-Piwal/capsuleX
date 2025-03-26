"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"],
  });

export async function signup(currentState: any, formData: FormData) {
  const data = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // Return early if the form data is invalid
  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: data.data.email,
    password: data.data.password,
  });

  if (error) {
    return {
      errors: {
        email: error.message,
        password: error.message,
        confirmPassword: error.message,
      },
    };
  }

  redirect("/dashboard");
}
