'use client'
import PostButton from "../../_components/PostButton";
import Image from "next/image";
import { useForm } from "react-hook-form"
type FormValues = {
    title: string
    explanation: string
    address: string
}
export default function PlacesNewPage() {
  const { register, handleSubmit} = useForm<FormValues>({})
  const submitPlace = (data: FormValues): void => { console.log(data) }
  return (
    <div className="flex">
      <div className="w-2/5 bg-[#020817] h-[600px] p-8">
      <form className="px-6 mt-4 mb-4 w-full" onSubmit={handleSubmit(submitPlace)}>
        <h1 className="text-white text-2xl font-bold mb-4">聖地投稿フォーム</h1>
        <p className="text-white">タイトル</p>
        <input type="text" {...register('title')} className="mr-6  sm:mr-0  text-black bg-white" />
        <p className="text-white">説明</p>
        <input
          type="text"
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
      <div className="w-3/5 bg-pink-100 h-[600px] relative">
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
