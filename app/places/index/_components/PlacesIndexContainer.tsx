'use client'
import { useState } from "react"
import EditButton from '../../../_components/EditButton'
import Link from "next/link";
import PlacesMapClient from '../../_components/PlacesMapClient'
import type { Session } from "next-auth"

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

type PlacesIndexContainerProps = {
  posts: PostWithLocation[]
  session: Session | null
}

type CurrentLocation = { 
  latitude: number 
  longitude: number 
} 

const calculate = ({ post,currentLocation }: { post: PostWithLocation; currentLocation: CurrentLocation }) => {
      const currentLatRad  =  currentLocation.latitude * Math.PI / 180
      const currentLngRad  =  currentLocation.longitude * Math.PI / 180
      const postLatRad  =  post.latitude * Math.PI / 180
      const postLngRad =  post.longitude * Math.PI / 180
      const latDiff=postLatRad - currentLatRad
      const lngDiff=postLngRad - currentLngRad
      const a=Math.sin(latDiff/2) * Math.sin(latDiff/2) + Math.cos(currentLatRad) * Math.cos(postLatRad) * Math.sin(lngDiff/2) * Math.sin(lngDiff/2)
      const c=2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
      const distance=6371 * c
      return distance
}

export default function PlacesIndexContainer({ posts, session }: PlacesIndexContainerProps) {
    const [currentLocation, setCurrentLocation] = useState<CurrentLocation | null>(null);
    const handleGetCurrentLocation = () =>{
          navigator.geolocation.getCurrentPosition(position => {
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          });
    } 
    const sortedPosts = [...posts];
    if (currentLocation) {
    const compare =(a: PostWithLocation, b: PostWithLocation): number=>{
    const aDistance = calculate({ post:a, currentLocation })
    const bDistance = calculate({ post:b, currentLocation})  
    return aDistance - bDistance
    }
sortedPosts.sort(compare)
}
  return (
    <div className="bg-gray-100 p-4 flex flex-col">
      <div className="flex items-center gap-2 font-bold text-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        <h1>場所一覧</h1>
      </div>
    <div className="flex gap-8 flex-col md:flex-row">
      <div className="md:w-2/5 flex flex-col gap-4 w-full order-2 md:order-1">
        <div>
        <div className="flex-col gap-2 mb-4 items-start">
          <button className="bg-blue-500 rounded-full text-white py-2 px-4" onClick={handleGetCurrentLocation}>現在地を取得</button>
        </div>
          {currentLocation && (
        <p>現在地を取得しました</p>
     )}</div>
    <div className="overflow-y-auto h-[600px]">
        {sortedPosts.map((post) => { return (<div className="py-2" key={post.id}>
            <div className="bg-white p-4 md:p-6  rounded-lg shadow-md">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                <h2 className="text-sm text-gray-600 font-medium title-font mb-4">{post.address}</h2>
                {currentLocation && (
                  <p className="text-sm mt-2 text-gray-700">現在地から {calculate({ post, currentLocation }).toFixed(2)} km</p>
                )}
                <div className="flex gap-2 items-center mt-4">
                <Link className="rounded bg-gray-800 px-4 py-2 text-white" href={`/places/${post.id}`}>
                     詳細
                </Link>
                {session && <EditButton href={`/places/${post.id}/edit`} />}
                </div>
            </div>
        </div>) })}
    </div>
    </div>
    <div className="md:w-3/5 md:h-[600px] relative rounded-lg overflow-hidden border w-full order-1 md:order-2 h-[300px]">
       <PlacesMapClient posts={posts} />
      </div>
    </div>
  </div>
  )
}
