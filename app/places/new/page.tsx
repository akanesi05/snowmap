import PlacesMapClient from '../_components/PlacesMapClient'
import NewPlaceForm from './_components/NewPlaceForm'
import prisma from "@/lib/prisma";

type PostWithLocation = {
  id: string
  title: string
  explanation: string
  address: string
  latitude: number
  longitude: number
  createdAt: Date
  updatedAt: Date
}

export default async function PlacesNewPage() {
  const posts = await prisma.sanctuaries.findMany();
  const mapPosts = posts.filter((post) : post is PostWithLocation => { return (post.latitude !==null && post.longitude!==null)});
  return (
    <div className="flex px-10 gap-10">
      <div className="w-2/5 h-[600px] p-8">
        <NewPlaceForm />
      </div>
      <div className="w-3/5  h-[600px] relative m-4">
             <PlacesMapClient posts={mapPosts} />
            </div>
          </div>
  
  );
}
