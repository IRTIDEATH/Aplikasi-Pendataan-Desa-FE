import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth";

export default async function ProfilePage() {
  const { data } = await authClient.getSession();

  if (!data) {
    redirect("/");
  }

  return <div className="min-h-dvh">Profil Anda</div>;
}
