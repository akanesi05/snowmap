"use client";
import { useForm } from "react-hook-form";
import UpdateButton from "../../../../_components/UpdateButton";
import { useRouter } from "next/navigation";
import Link from "next/link";

type EditPlaceFormProps = {
  post: {
    id: string;
    title: string;
    explanation: string;
    address: string;
  };
};

export default function EditPlaceForm(props: EditPlaceFormProps) {
  const router = useRouter();
  type FormValues = {
    title: string;
    explanation: string;
    address: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});
  const submitEditPlace = async (data: FormValues): Promise<void> => {
    try {
      const res = await fetch("/api/places", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: props.post.id,
          title: data.title,
          address: data.address,
          explanation: data.explanation,
        }),
      });
      if (res.ok) {
        router.push(`/places/${props.post.id}`);
      }
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };
  return (
    <form
      className="px-6 mt-4 mb-4 w-full"
      onSubmit={handleSubmit(submitEditPlace)}
    >
      <h1 className="text-2xl font-bold mb-4">聖地編集フォーム</h1>
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
        defaultValue={props.post.title}
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
        defaultValue={props.post.explanation}
      />
      {errors.explanation && (
        <p className="text-red-500 text-sm mb-3">
          {errors.explanation.message}
        </p>
      )}
      <p className="text-gray-800">住所</p>
      <input
        {...register("address", {
          required: "住所を入力してください",
        })}
        type="text"
        className="text-black bg-blue-100 w-full rounded p-2 mt-1 mb-3"
        defaultValue={props.post.address}
      />
      {errors.address && (
        <p className="text-red-500 text-sm mb-3">{errors.address.message}</p>
      )}
      <p>
        <UpdateButton />
      </p>
      <Link
        href="/places/index"
        className="text-sm text-black pt-5 items-center inline-flex gap-1 hover:text-blue-600 underline"
      >
        一覧に戻る
      </Link>
    </form>
  );
}
