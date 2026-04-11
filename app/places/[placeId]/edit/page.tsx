import Image from "next/image";
import prisma from "@/lib/prisma";
import EditButton from '../../_components/EditButton'
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
      <form className="px-6 mt-4 mb-4 w-full" >
        <h1 className="text-white text-2xl font-bold mb-4">聖地編集フォーム</h1>
        <p className="text-white">タイトル</p>
        <input className="mr-6  sm:mr-0  text-black bg-white" defaultValue={post.title} />
        
        <p className="text-white">説明</p>
        <textarea
          type="text"
          className="mr-6 sm:mr-0  text-black bg-white h-[100px]"
          defaultValue={post.explanation}
        />
        <p className="text-white">住所</p>
        <input type="text"className="mr-6  sm:mr-0  text-black bg-white" defaultValue={post.address} />
        <p>
         
        </p>
        </form>
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
