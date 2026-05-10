import prisma from "@/lib/prisma";
import PlacesIndexContainer from './_components/PlacesIndexContainer'

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

export default async function PlacesIndexPage() {
    const posts = await prisma.sanctuaries.findMany();
    const mapPosts = posts.filter((post) : post is PostWithLocation => { return (post.latitude !==null && post.longitude!==null)});
    return (
    
       <PlacesIndexContainer posts={mapPosts} />
  )
}
