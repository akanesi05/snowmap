import prisma from "@/lib/prisma";
import EditButton from '../../_components/EditButton'
import { format } from "date-fns"

interface PlacesDetailPageProps {
  params: {
    placeId: string
  }
}
export default async function PlacesPage({ params }: PlacesDetailPageProps) {
   const { placeId } = await params
    const post = await prisma.sanctuaries.findUnique({
        where: { id: placeId }
    })

if (!post) {
    return <div className="text-center text-sm my-10">聖地がありません</div>
  }
  return (
    <div>
      <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4" >
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">タイトル: {post.title}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">住所: {post.address}</h2>
                <p className="leading-relaxed text-base">説明: {post.explanation}</p>
                <p className="leading-relaxed text-base">作成日: {format(new Date(post.createdAt), "yyyy/MM/dd")}</p>

                <EditButton href={`/places/${post.id}/edit`} />
            </div>
        </div>
    </div>
    </div>
  )
}
