import prisma from "@/lib/prisma";
export async function POST(req: Request) {
  try {
    const {title,address,explanation } = await req.json();
    const apiKey = process.env.GOOGLE_MAPS_API_KEY
    const encodedAddress = encodeURIComponent(address);
    const res = await fetch(`https://geocode.googleapis.com/v4/geocode/address/${encodedAddress}?key=${apiKey}`)
    const geocodeData = await res.json();
        if (!geocodeData.results?.[0]) {
          return Response.json({ error: "住所から位置情報を取得できませんでした。住所を見直してください。" }, { status: 400 })
        }
    const location = geocodeData.results[0].location
    await prisma.sanctuaries.create({
      data: {
        title,
        address,
        explanation,
        latitude: location.latitude,
        longitude: location.longitude
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
        const apiKey = process.env.GOOGLE_MAPS_API_KEY
    const encodedAddress = encodeURIComponent(address);
    const res = await fetch(`https://geocode.googleapis.com/v4/geocode/address/${encodedAddress}?key=${apiKey}`)
    const geocodeData = await res.json();
        if (!geocodeData.results?.[0]) {
          return Response.json({ error: "住所から位置情報を取得できませんでした。住所を見直してください。" }, { status: 400 })
        }
    const location = geocodeData.results[0].location

    await prisma.sanctuaries.update({
            data: {
                title,
                explanation,
                address,
                latitude: location.latitude,
                longitude: location.longitude
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
