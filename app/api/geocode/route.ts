export async function POST(req: Request) {
  try {
    const { placeName } = await req.json();
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      return Response.json({ error: "APIキーがありません" }, { status: 500 });
    }
    const encodedAddress = encodeURIComponent(placeName);
    const res = await fetch(
      `https://geocode.googleapis.com/v4/geocode/address/${encodedAddress}?key=${apiKey}`,
    );

    const geocodeData = await res.json();

    return Response.json(geocodeData.results[0].location);
  } catch (error) {}
}
