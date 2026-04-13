import Image from "next/image";
import prisma from "@/lib/prisma";
import EditPlaceForm from './_components/EditPlaceForm'

interface PlacesEditPageProps {
  params: {
    placeId: string
  }
}
export default async function PlacesEditPage({ params }: PlacesEditPageProps){
   const { placeId } = await params
   const post =  await prisma.sanctuaries.findUnique({
        where: { id: placeId }
    })
   
  if (!post) {
    return <div className="text-center text-sm my-10">聖地がありません</div>
  }
    
  return (
    <div className="flex">
      <div className="w-2/5 bg-[#020817] h-[600px] p-8">
      <EditPlaceForm post={post} />
      </div>
      <div className="w-3/5 bg-pink-100 h-[600px] relative">
        <Image
          className=" object-cover object-center"
          src="/map.png"
          alt="地図画像"
          fill
        />
      </div>
    </div>
  )
}
