import prisma from "@/lib/prisma";
import EditButton from '../../_components/EditButton'
import { format } from "date-fns"
import Link from "next/link";
import { ArrowLeft, MapPin,Calendar,NotebookText } from "lucide-react"
import {auth} from "@/lib/auth";

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
  const session = await auth()
  return (
    <div className="bg-gray-50 py-8 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link href="/places/index" className="text-sm text-gray-500 mb-4 items-center inline-flex gap-1"><ArrowLeft size={16} /> 聖地一覧に戻る</Link>
          <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl text-gray-900 title-font mb-4 pb-2 font-bold border-b border-gray-200">{post.title}</h2>
            <div className="border-b border-gray-200">
                <p className="text-lg text-gray-900 font-medium title-font flex items-center gap-2"> <MapPin size={24} color="gray" strokeWidth={1} /> {post.address}</p>
                <p className="leading-relaxed text-base flex items-center gap-2"> <Calendar size={24} color="gray" strokeWidth={1} /> {format(new Date(post.createdAt), "yyyy/MM/dd")}</p>
                <p className="leading-relaxed text-base flex gap-2 pt-4 pb-4 mb-4"> <NotebookText size={24} color="gray" strokeWidth={1} /> {post.explanation}</p>
              </div>
               { session && <div className="pt-4"> EditButton </div> }
              <div className="pt-4">
                <EditButton href={`/places/${post.id}/edit`} />
              </div>
            </div>
          </div>
    </div>
  )
}
