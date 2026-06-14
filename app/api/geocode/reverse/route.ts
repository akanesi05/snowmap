export async function POST(req: Request){
  try { const { latitude, longitude } = await req.json(); 
const apiKey = process.env.GOOGLE_MAPS_API_KEY
 if (!apiKey) {
          return  Response.json(
  { error: "APIキーがありません" },
  { status: 500 }
)}
const res = await fetch(`https://geocode.googleapis.com/v4/geocode/location/${latitude},${longitude}/?key=${apiKey}`)
const geocodeData = await res.json();
const address = geocodeData.results[0].formattedAddress
let formattedAddress = address 
    if (address.startsWith("日本、")) { formattedAddress = address.slice(3) } 
       const spaceIndex = formattedAddress.indexOf(" ") 
       formattedAddress = formattedAddress.slice(spaceIndex + 1)
    return Response.json({ address: formattedAddress})
  }
catch (error) {
    return Response.json(
      { error: "住所を取得できませんでした" },
      { status: 500 }
    );
  }

}


