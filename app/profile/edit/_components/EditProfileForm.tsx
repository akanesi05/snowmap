"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import UpdateButton from "@/app/_components/UpdateButton";

type EditProfileFormProps = {
  name: string;
};
type FormValues = {
  name: string;
};

export default function EditProfileForm({ name }: EditProfileFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const submitEditProfile = async ({ name }: FormValues): Promise<void> => {
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
        }),
      });
      if (res.ok) {
        router.push(`/profile`);
      }
    } catch (error) {
      console.error("更新失敗:", error);
    }
  };

  return (
    <>
      <form
        className="px-6 mt-4 mb-4 w-full"
        onSubmit={handleSubmit(submitEditProfile)}
      >
        <h1 className="text-2xl font-bold mb-4">プロフィール編集フォーム</h1>
        <div className="bg-white  p-10 md:p-6 rounded-lg shadow-md">
        <p className="text-gray-800">名前</p>
        <input
          {...register("name", {
            required: "名前を入力してください",
            maxLength: {
              value: 50,
              message: "名前は50文字以内で入力してください",
            },
          })}
          className="text-black bg-blue-100 w-full rounded p-2 mt-1 mb-3"
          defaultValue={name}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-3">{errors.name.message}</p>
        )}
        </div>
          <UpdateButton/>
    
        <Link
          href="/profile"
          className="text-sm text-black pt-5 items-center inline-flex gap-1 hover:text-blue-600 underline"
        >
          プロフィールに戻る
        </Link>
      </form>
    </>
  );
}
