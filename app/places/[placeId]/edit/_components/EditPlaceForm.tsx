'use client'
import { useForm } from "react-hook-form"
import UpdateButton from '../../../../_components/UpdateButton'
import { useRouter } from "next/navigation";

type EditPlaceFormProps = {
  post: {
    title: string
    explanation: string
    address: string
  }
}

export default function EditPlaceForm(props: EditPlaceFormProps) {
    const router = useRouter();
    type FormValues = {
    title: string
    explanation: string
    address: string
}
    const { register, handleSubmit} = useForm<FormValues>({})
    const submitEditPlace = async(data: FormValues): Promise<void> => {
        try {
      const res = await fetch("/api/places", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id:props.post.id,title:data.title, address:data.address, explanation:data.explanation }),
      })
      if (res.ok) {
        router.push(`/places/${props.post.id}`);
      }
        }

    catch (error) {
      console.error("更新失敗:", error);
    }
}
    return (
        <form className="px-6 mt-4 mb-4 w-full" onSubmit={handleSubmit(submitEditPlace)}>
        <h1 className="text-white text-2xl font-bold mb-4">聖地編集フォーム</h1>
        <p className="text-white">タイトル</p>
        <input {...register('title')} className="mr-6  sm:mr-0  text-black bg-white" defaultValue={props.post.title} />
        
        <p className="text-white">説明</p>
        <textarea
          {...register('explanation')}
          type="text"
          className="mr-6 sm:mr-0  text-black bg-white h-[100px]"
          defaultValue={props.post.explanation}
        />
        <p className="text-white">住所</p>
        <input {...register('address')} type="text"className="mr-6  sm:mr-0  text-black bg-white" defaultValue={props.post.address} />
        <p>
          <UpdateButton />
        </p>
        </form>
    )
}

