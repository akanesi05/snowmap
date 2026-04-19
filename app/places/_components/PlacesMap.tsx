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

    const mapPosts = posts.filter((post) => {
       return post.latitude != null && post.longitude != null
     });
    return (
    <APIProvider apiKey={mapKey}>
    <Map
        style={{width: '100%', height: '100%'}}
        defaultCenter={{lat:35.7056, lng: 139.7519}}
        defaultZoom={10}
        gestureHandling='greedy'
        disableDefaultUI
         >
    {mapPosts.map((post) => { return (<Marker position={{lat: post.latitude,lng: post.longitude}} key={post.id}>
            </Marker>) })}
    </Map>
    </APIProvider>
    )
}

