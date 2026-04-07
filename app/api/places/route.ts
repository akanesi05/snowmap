import prisma from "@/lib/prisma";
export async function POST(req: Request) {
  try {
    const {title,address,explanation } = await req.json();

    
    await prisma.sanctuaries.create({
      data: {
        title,
        address,
        explanation,
      },
    });

    return Response.json({ message: "聖地が登録されました" });
  } catch (error) {
    return Response.json(
      { error: "登録に失敗しました" },
      { status: 500 }
    );
  }
}


