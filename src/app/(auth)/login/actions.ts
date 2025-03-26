"use server";

import { createClient } from "@/utils/supabase/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function login(currentState: any, formData: FormData) {
  const data = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Return early if the form data is invalid
  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: data.data.email,
    password: data.data.password,
  });

  if (error) {
    return {
      errors: { email: error.message, password: error.message },
    };
  }
}
