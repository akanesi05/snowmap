import prisma from "@/lib/prisma";
import EditPlaceContainer from './_components/EditPlaceContainer'
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
  const posts = await prisma.sanctuaries.findMany();
  if (!post) {
    return <div className="text-center text-sm my-10">聖地がありません</div>
  }
    
  return (
    
        <EditPlaceContainer post={post} posts={posts}/>
  )
}
