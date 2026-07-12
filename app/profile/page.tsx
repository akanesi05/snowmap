import { auth } from "@/lib/auth";
import { redirect ,notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

export default async function profile() {
  const session = await auth();
  if (!session || !session.user || !session.user.id) {
    redirect("/auth/login");
  }
  const profileUser = await prisma.user.findUnique({ where: { id:session.user.id }, });
  if (!profileUser) {
    notFound()
  }
  return (

      <div className="md:m-20 m-4">
        <h3 className="text-2xl mb-4 font-bold">プロフィール</h3>
        <div className="bg-white  p-10 md:p-6 rounded-lg shadow-md">
          <div>
            <p>ユーザー名</p>
            <p>{session.user.name}</p>
          </div>
          <div>
            <p>メールアドレス</p>
            <p>{session.user.email}</p>
          </div>
          <div>
            <p>登録日</p>
            <p>{format(profileUser.createdAt, "yyyy/MM/dd")}</p>
          </div>
        </div>
      </div>
   
  );
}
