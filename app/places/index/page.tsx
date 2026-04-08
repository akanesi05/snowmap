import EditButton from '../../_components/EditButton'
import prisma from "@/lib/prisma";
import Link from "next/link";
export default async function PlacesIndexPage() {
    const posts = await prisma.sanctuaries.findMany();
    return (
    <div>
        <h1>場所一覧</h1>
    <div className="flex flex-wrap -m-4">
        {posts.map((post) => { return (<div className="xl:w-1/4 md:w-1/2 p-4" key={post.id}>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.address}</h2>
                <p className="leading-relaxed text-base">{post.explanation}</p>
                <Link href={`/places/${post.id}`}>
                     詳細
                </Link>
                <EditButton />
            </div>
        </div>) })}
    </div>
    </div>
  )
}
