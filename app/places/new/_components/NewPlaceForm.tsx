"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
import PostButton from "@/app/_components/PostButton";
type FormValues = {
    title: string
    explanation: string
    address: string
}

type NewPlaceFormProps = {
  selectedLocation: ClickedLocation | null
}

type ClickedLocation = {
  latitude: number
  longitude: number
}

export default function NewPlaceForm({ selectedLocation }: NewPlaceFormProps) {
  const router = useRouter();
  const { register, handleSubmit} = useForm<FormValues>({})
  const submitNewPlace = async(data: FormValues): Promise<void> => {
    if (!selectedLocation) {
       return
       }
    try {
      const res = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title:data.title, address:data.address, explanation:data.explanation,latitude: selectedLocation.latitude
                              ,longitude: selectedLocation.longitude }),
      })
    
    if (res.ok) {
        router.push("/places/index");
      }}
    catch (error) {
      console.error("投稿失敗:", error);
   }}
  return (
    <form className="px-6 mt-4 mb-4 w-full" onSubmit={handleSubmit(submitNewPlace)}>
            <h1 className="text-gray-800 text-2xl font-bold mb-4 ">聖地投稿フォーム</h1>
            <p className="text-gray-800">タイトル</p>
            <input {...register('title')} className="mr-6  sm:mr-0  text-black bg-blue-100" />
            <p className="text-gray-800">説明</p>
            <textarea
              {...register('explanation')}
              className="mr-6 sm:mr-0  text-black bg-blue-100 h-[100px]"
            />
            <p className="text-gray-800">住所</p>
            <input type="text" {...register('address')} className="mr-6  sm:mr-0  text-black bg-blue-100" />
            <p>
              <PostButton/>
            </p>
    </form>
  );
}

