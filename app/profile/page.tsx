import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function profile() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }

  return (
    <>
      <p>プロフページです</p>
      <p>{session.user.name}</p>
      <p>{session.user.email}</p>
    </>
  );
}
