'use client'
import { useState } from "react"
import NewPlaceForm from "./NewPlaceForm"
import PlacesMapClient from "../../_components/PlacesMapClient"

type ClickedLocation = {
  latitude: number
  longitude: number
  address: string
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleLocationSelect = (location: ClickedLocation) => {
  setSelectedLocation(location)
  console.log(location)
  openModal();
}
  const openModal = () => {
  setIsModalOpen(true);
};
  const closeModal = () => {
  setIsModalOpen(false);
};
  return (
     <>
    {/* <NewPlaceForm selectedLocation={selectedLocation} />
    <PlacesMapClient posts={posts} onLocationSelect={handleLocationSelect} /> */}
  <div className="flex px-10 gap-10">
    <div className="w-2/5 h-[600px] p-8">
    <h1 className="text-gray-800 text-2xl font-bold mb-4">聖地を投稿しよう！</h1>
    <p className="text-gray-800 mb-4">地図上の好きな場所をクリックして、聖地を投稿しよう！</p>
    <p className="text-gray-800 mb-4">投稿したい場所を地図上でクリックすると、投稿フォームが表示されます。</p>
    <p className="text-gray-800 mb-4">MV、ドラマ、映画、番組のタイトル、説明を入力して、住所を確認して投稿ボタンを押してください。。</p>
    </div>
  <div className="w-3/5 h-[600px] relative m-4 overflow-hidden">
    <PlacesMapClient posts={posts} onLocationSelect={handleLocationSelect} />
    {isModalOpen&& <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10"><div className="bg-white text-black rounded-2xl p-6 shadow-xl w-[400px] h-[400px]"><NewPlaceForm selectedLocation={selectedLocation} /><button onClick={closeModal}>閉じる</button></div></div>} 
  </div>
</div>
  </>
  )
}
