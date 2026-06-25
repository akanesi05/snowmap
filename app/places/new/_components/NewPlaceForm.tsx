"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PostButton from "@/app/_components/PostButton";

type FormValues = {
  title: string;
  explanation: string;
  address: string;
};

type NewPlaceFormProps = {
  selectedLocation: ClickedLocation | null;
};

type ClickedLocation = {
  latitude: number;
  longitude: number;
  address: string;
};

export default function NewPlaceForm({ selectedLocation }: NewPlaceFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({});
  useEffect(() => {
    if (selectedLocation) {
      const address = selectedLocation.address;
      setValue("address", address);
    }
  }, [selectedLocation, setValue]);
  const submitNewPlace = async (data: FormValues): Promise<void> => {
    if (!selectedLocation) {
      return;
    }
    try {
      const res = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.title,
          address: data.address,
          explanation: data.explanation,
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        }),
      });

      if (res.ok) {
        router.push("/places/index");
      }
    } catch (error) {
      console.error("投稿失敗:", error);
    }
  };
  return (
    <form
      className="px-6 mt-4 mb-4 w-full"
      onSubmit={handleSubmit(submitNewPlace)}
    >
      <h1 className="text-gray-800 text-2xl font-bold mb-4">
        聖地投稿フォーム
      </h1>
      <p className="text-gray-800">タイトル</p>
      <input
        {...register("title", {
          required: "タイトルを入力してください",
          maxLength: {
            value: 50,
            message: "タイトルは50文字以内で入力してください",
          },
        })}
        className="text-black bg-blue-100 w-full rounded p-2 mt-1 mb-3"
      />
      {errors.title && (
        <p className="text-red-500 text-sm mb-3">{errors.title.message}</p>
      )}
      <p className="text-gray-800">説明</p>
      <textarea
        {...register("explanation", {
          required: "説明を入力してください",
          maxLength: {
            value: 500,
            message: "説明は500文字以内で入力してください",
          },
        })}
        className="text-black bg-blue-100 h-[100px] w-full rounded p-2 mt-1 mb-3"
      />
      {errors.explanation && (
        <p className="text-red-500 text-sm mb-3">
          {errors.explanation.message}
        </p>
      )}
      <p className="text-gray-800">住所</p>
      <input
        type="text"
        {...register("address", {
          required: "住所を入力してください",
        })}
        className="text-black bg-blue-100 w-full rounded p-2 mt-1 mb-3"
      />
      {errors.address && (
        <p className="text-red-500 text-sm mb-3">{errors.address.message}</p>
      )}
      <p>
        <PostButton />
      </p>
    </form>
  );
}
