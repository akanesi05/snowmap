'use client'
import PostButton from "../../_components/PostButton";
import Image from "next/image";
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation";
type FormValues = {
    title: string
    explanation: string
    address: string
}
export default function PlacesNewPage() {
  const router = useRouter();
  const { register, handleSubmit} = useForm<FormValues>({})
  const submitNewPlace = async(data: FormValues): Promise<void> => {
    try {
      const res = await fetch("/api/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title:data.title, address:data.address, explanation:data.explanation }),
      })
    
    if (res.ok) {
        router.push("/places/index");
      }}
    catch (error) {
      console.error("投稿失敗:", error);
   }}
  return (
    <div className="flex">
      <div className="w-2/5 bg-[#020817] h-[600px] p-8">
      <form className="px-6 mt-4 mb-4 w-full" onSubmit={handleSubmit(submitNewPlace)}>
        <h1 className="text-white text-2xl font-bold mb-4">聖地投稿フォーム</h1>
        <p className="text-white">タイトル</p>
        <input {...register('title')} className="mr-6  sm:mr-0  text-black bg-white" />
        <p className="text-white">説明</p>
        <textarea
          {...register('explanation')}
          className="mr-6 sm:mr-0  text-black bg-white h-[100px]"
        />
        <p className="text-white">住所</p>
        <input type="text" {...register('address')} className="mr-6  sm:mr-0  text-black bg-white" />
        <p>
          <PostButton />
        </p>
        </form>
      </div>
      <div className="w-3/5 bg-pink-100 h-[600px] relative ">
        <Image
          className=" object-cover object-center"
          src="/map.png"
          alt="地図画像"
          fill
        />
      </div>
    </div>
  );
}
