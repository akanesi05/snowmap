"use client";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps'; 
type  Post= {
    id: number;
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
    const mapKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    console.log(posts.length)
    console.log(posts[17]['title'])
    console.log(posts[17]['latitude'])
    console.log(posts[17]['longitude'])
    if (!mapKey) {
          return <p>APIキーがありません</p>
        }
    return (
    <APIProvider apiKey={mapKey}>
    <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat: 22.54992, lng: 0}}
        defaultZoom={3}
        gestureHandling='greedy'
        disableDefaultUI
    />
      <Marker position={{lat: posts[17].latitude,lng: posts[17].longitude}} />
    </APIProvider>
    )
}

