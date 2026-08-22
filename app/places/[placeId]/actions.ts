import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
export async function addFavorite(placeId: string) {
  "use server";

  const session = await auth();

  if (session && session.user && session.user.id) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { favoritedSanctuaries: { connect: { id: placeId } } },
    });
  }
  revalidatePath(`/places/${placeId}`);
}

export async function releaseFavorite(placeId: string) {
  "use server";

  const session = await auth();

  if (session && session.user && session.user.id) {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { favoritedSanctuaries: { disconnect: { id: placeId } } },
    });
    revalidatePath(`/places/${placeId}`);
  }
}
