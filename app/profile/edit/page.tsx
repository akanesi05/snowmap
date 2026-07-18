import { auth } from "@/lib/auth";
import { redirect, notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import EditProfileForm from "./_components/EditProfileForm";

export default async function profileEdit() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }
  const profileUser = await prisma.user.findUnique({
    where: { id: session.user.id },
  });
  if (!profileUser) {
    notFound();
  }
  return <EditProfileForm name={profileUser.name} />;
}
