import EditButton from '../../_components/EditButton'
import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import PlacesMapClient from '../_components/PlacesMapClient'

export default async function PlacesIndexPage() {
    const posts = await prisma.sanctuaries.findMany();
    return (
    <div>
        <h1>場所一覧</h1>
    <div className="flex">
    <div className="overflow-y-auto m-4 h-[600px]">
        {posts.map((post) => { return (<div className=" p-4" key={post.id}>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.address}</h2>
                <Link href={`/places/${post.id}`}>
                     詳細
                </Link>
                <EditButton href={`/places/${post.id}/edit`} />
            </div>
        </div>) })}
    </div>
    <div className="w-3/5 bg-pink-100 h-[600px] relative m-4">
       <PlacesMapClient />
      </div>
    </div>
    </div>
  )
}
