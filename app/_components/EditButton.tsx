"use client";
import { useRouter } from "next/navigation";

type EditButtonProps = {
  href: string;
};

export default function EditButton(props: EditButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(props.href)}
      className="rounded bg-gray-300 px-4 py-2 text-gray-800 cursor-pointer"
    >
      編集
    </button>
  );
}
