import PlacesMapClient from '../_components/PlacesMapClient'
import NewPlaceForm from './_components/NewPlaceForm'
import prisma from "@/lib/prisma";

export default async function PlacesNewPage() {
  const posts = await prisma.sanctuaries.findMany();
  return (
    <div className="flex px-10 gap-10">
      <div className="w-2/5 h-[600px] p-8">
        <NewPlaceForm />
      </div>
      <div className="w-3/5  h-[600px] relative m-4">
             <PlacesMapClient posts={posts} />
            </div>
          </div>
  
  );
}
