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

export async function PATCH(req: Request) {
  try{
    const { id, title, address, explanation } = await req.json();

    await prisma.sanctuaries.update({
            data: {
                title,
                explanation,
                address
            },
            where: {
                id: id
            }
  })
  return Response.json({ message: "聖地が更新されました" });
}catch (error) {
    return Response.json(
      { error: "更新に失敗しました" },
      { status: 500 }
    );
  }

}
