"use client";
import dynamic from "next/dynamic"

type Post = {
  id: string
  title: string;
  explanation: string;
  address: string;
  latitude: number 
  longitude: number
};

type PlacesMapClientProps = {
  posts: Post[];
};

const PlacesMap = dynamic(
    () => import('./PlacesMap'),
    {ssr: false}
)
export default function PlacesMapClient({ posts }: PlacesMapClientProps) {
    return ( 
        <PlacesMap posts={posts}/>
    )
}

