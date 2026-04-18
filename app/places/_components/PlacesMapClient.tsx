"use client";
import dynamic from "next/dynamic"

const PlacesMap = dynamic(
    () => import('./PlacesMap'),
    {ssr: false}
)
export default function PlacesMapClient() {
    return ( 
        <PlacesMap />
    )
}

