'use client'
import { useState } from "react"
import EditButton from '../../../_components/EditButton'
import Link from "next/link";
import PlacesMapClient from '../../_components/PlacesMapClient'


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

export default function PlacesIndexContainer({ posts }: PlacesIndexContainerProps) {
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
    <div>
        <h1>場所一覧</h1>
    <div className="flex">
        <div>
          <button onClick={handleGetCurrentLocation}>Get Current Position</button>
        </div>
        {currentLocation && (
  <div>
    <p>現在地を取得しました</p>
  </div>
)}
    <div className="overflow-y-auto m-4 h-[600px]">
        {sortedPosts.map((post) => { return (<div className=" p-4" key={post.id}>
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.title}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{post.address}</h2>
                {currentLocation && (
                  <p>現在地から {calculate({ post, currentLocation }).toFixed(2)} km</p>
                )}
                <Link href={`/places/${post.id}`}>
                     詳細
                </Link>
            
                <EditButton href={`/places/${post.id}/edit`} />
            </div>
        </div>) })}
    </div>
    <div className="w-3/5 h-[600px] relative ">
       <PlacesMapClient posts={posts} />
      </div>
    </div>
    </div>
  )
}
