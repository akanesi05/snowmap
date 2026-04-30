'use client'
import { useState } from "react"
import NewPlaceForm from "./NewPlaceForm"
import PlacesMapClient from "../../_components/PlacesMapClient"

type ClickedLocation = {
  latitude: number
  longitude: number
}

type  Post= {
    id: string
    title: string
    explanation: string
    address: string
    latitude: number
    longitude: number
}

type NewPlaceContainerProps = {
  posts: Post[]
}

export default function NewPlaceContainer({ posts }: NewPlaceContainerProps) {
  const [selectedLocation, setSelectedLocation] = useState<ClickedLocation | null>(null);
  const handleLocationSelect = (location: ClickedLocation) => {
  setSelectedLocation(location)
}
  return (
     <>
    {/* <NewPlaceForm selectedLocation={selectedLocation} />
    <PlacesMapClient posts={posts} onLocationSelect={handleLocationSelect} /> */}
    <div className="flex px-10 gap-10">
  <div className="w-2/5 h-[600px] p-8">
    <NewPlaceForm selectedLocation={selectedLocation} />
  </div>

  <div className="w-3/5 h-[600px] relative m-4">
    <PlacesMapClient posts={posts} onLocationSelect={handleLocationSelect} />
  </div>
</div>
  </>
  )
}
