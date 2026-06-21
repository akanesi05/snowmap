"use client";
import { useRouter } from "next/navigation";

type DeleteButtonProps = {
  id: string;
}; //型定義

export default function DeleteButton(props: DeleteButtonProps) {
  //引数
  const router = useRouter();
  const submitDeletePlace = async (): Promise<void> => {
    try {
      const res = await fetch("/api/places", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: props.id }),
      });
      if (res.ok) {
        router.push("/places/index");
      }
    } catch (error) {
      console.error("削除失敗:", error);
    }
  };
  return (
    <button
      type="button"
      onClick={() => submitDeletePlace()}
      className="rounded bg-gray-300 px-4 py-2 text-gray-800"
    >
      削除
    </button>
  );
}
