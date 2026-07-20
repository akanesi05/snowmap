"use client";
import dynamic from "next/dynamic";

type Post = {
  id: string;
  title: string;
  explanation: string;
  address: string;
  latitude: number;
  longitude: number;
};

type PlacesMapClientProps = {
  posts: Post[];
  onLocationSelect?: (location: ClickedLocation) => void;
  currentLocation?: CurrentLocation | null;
};

type ClickedLocation = {
  latitude: number;
  longitude: number;
  address: string;
};

type CurrentLocation = {
  latitude: number;
  longitude: number;
};

const PlacesMap = dynamic(() => import("./PlacesMap"), { ssr: false });
export default function PlacesMapClient({
  posts,
  onLocationSelect,
  currentLocation
}: PlacesMapClientProps) {
  return <PlacesMap posts={posts} onLocationSelect={onLocationSelect} currentLocation={currentLocation} />;
}
