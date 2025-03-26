"use client";

import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "./actions"

export default function LoginPage() {
  const [state, formAction] = useFormState(login, null);

  return (
    <>
      <h1 className="mb-4 text-center text-xl">Login</h1>
      <form action={formAction} className="space-y-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <p aria-live="polite">{state?.errors.email}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
          <p aria-live="polite">{state?.errors.password}</p>
        </div>
        <button className="w-full bg-black px-3 py-2 text-white">Login</button>
        <p>
          {`Don't have an account? `}
          <Link className="underline hover:opacity-60" href="/register">
            Register for one!
          </Link>
        </p>
      </form>
    </>
  );
}
