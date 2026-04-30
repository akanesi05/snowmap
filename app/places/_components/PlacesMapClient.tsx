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
  onLocationSelect?: (location: ClickedLocation) => void
};


type ClickedLocation = {
  latitude: number
  longitude: number
}
const PlacesMap = dynamic(
    () => import('./PlacesMap'),
    {ssr: false}
)
export default function PlacesMapClient({ posts, onLocationSelect }: PlacesMapClientProps) {
    return ( 
        <PlacesMap posts={posts} onLocationSelect={onLocationSelect}/>
    )
}

