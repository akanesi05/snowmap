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
  favoritedUsers: {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}[];
};

export default async function PlacesIndexPage() {
  const session = await auth();
  const posts = await prisma.sanctuaries.findMany({
  orderBy: {
    createdAt: "desc",
  },
  include: {
    favoritedUsers: session?.user?.id
      ? {
          where: {
            id: session.user.id,
          },
        }
      : false,
  },
});
  const mapPosts = posts.filter((post): post is PostWithLocation => {
    return post.latitude !== null && post.longitude !== null;
  });
  return <PlacesIndexContainer posts={mapPosts} session={session} />;
}
