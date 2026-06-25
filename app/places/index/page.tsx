import prisma from "@/lib/prisma";
import PlacesIndexContainer from "./_components/PlacesIndexContainer";
import { auth } from "@/lib/auth";

type PostWithLocation = {
  id: string;
  title: string;
  explanation: string;
  address: string;
  userId: string | null
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
};

export default async function PlacesIndexPage() {
  const session = await auth();
  const posts = await prisma.sanctuaries.findMany();
  const mapPosts = posts.filter((post): post is PostWithLocation => {
    return post.latitude !== null && post.longitude !== null;
  });
  return <PlacesIndexContainer posts={mapPosts} session={session} />;
}
