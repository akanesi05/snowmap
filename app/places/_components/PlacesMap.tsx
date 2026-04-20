"use client";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'; 
import { useState } from 'react';
type  Post= {
    id: string
    title: string
    explanation: string
    address: string
    latitude: number
    longitude: number
}

type PlacesMapProps = {
  posts: Post[];
};
export default function PlacesMap({ posts }: PlacesMapProps) {
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!mapKey) {
          return <p>APIキーがありません</p>
        }

    const mapPosts = posts.filter((post) => {
       return post.latitude != null && post.longitude != null
     });
    return (
    <div>
      {selectedPost&& <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">タイトル: {selectedPost.title}</h2>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">住所: {selectedPost.address}</h2>
                <p className="leading-relaxed text-base">説明: {selectedPost.explanation}</p>
              
                {/* <EditButton href={`/places/${selectedPost.id}/edit`} /> */}
            </div>}
    
    <div className="w-full h-[600px] relative m-4">
    <APIProvider apiKey={mapKey}>
    <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat:35.7056, lng: 139.7519}}
        defaultZoom={10}
        gestureHandling='greedy'
        disableDefaultUI
         >
    {mapPosts.map((post) => { return (<Marker position={{lat: post.latitude,lng: post.longitude}} key={post.id} onClick={() => setSelectedPost(post)}>
            </Marker>) })}
    </Map>
    </APIProvider>
    </div>
    </div>
    )
}

