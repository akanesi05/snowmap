import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function PATCH(req: Request) {
  try {
    const { name } = await req.json();
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return Response.json({ error: "ログインが必要です。" }, { status: 401 });
    }

    await prisma.user.update({
      data: {
        name,
      },
      where: {
        id: session.user.id,
      },
    });
    return Response.json({ message: "名前が更新されました" });
  } catch {
    return Response.json({ error: "更新に失敗しました" }, { status: 500 });
  }
}
