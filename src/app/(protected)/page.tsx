import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: React.PropsWithChildren) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  return <>{children}</>;
}
