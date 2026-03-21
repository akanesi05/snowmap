import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";
export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return Response.json(
        { message: "このメールアドレスは既に使用されています" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashed,
      },
    });

    return Response.json({ message: "ユーザーが登録されました" });
  } catch (error) {
    return Response.json(
      { error: "登録に失敗しました" },
      { status: 500 }
    );
  }
}


