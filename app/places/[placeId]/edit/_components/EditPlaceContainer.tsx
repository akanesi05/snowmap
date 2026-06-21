"use client";
import EditPlaceForm from "./EditPlaceForm";
import PlacesMapClient from "../../../_components/PlacesMapClient";

type Post = {
  id: string;
  title: string;
  explanation: string;
  address: string;
  latitude: number;
  longitude: number;
};

type EditPlaceContainerProps = {
  posts: Post[];
  post: Post;
};

export default function EditPlaceContainer({
  post,
  posts,
}: EditPlaceContainerProps) {
  return (
    <div className="flex px-4 md:px-10 gap-6 md:gap-10 flex-col md:flex-row">
      <div className="md:w-2/5 md:h-[600px] p-8 flex flex-col gap-4 w-full order-2 md:order-1">
        <h1 className="text-gray-800 text-2xl font-bold mb-4">
          聖地を編集しよう！
        </h1>
        <p className="text-gray-800 mb-4">
          登録済みのタイトル・説明・住所を確認し、必要なところを修正してください。
          変更後は保存ボタンを押してください。
        </p>
      </div>
      <div className="md:w-3/5 md:h-[600px] relative overflow-hidden order-1 md:order-2 w-full h-[360px]">
        <PlacesMapClient posts={posts} />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
          <div className="bg-white text-black rounded-2xl p-6 shadow-xl w-[90%] max-w-[400px] max-h-[90%] overflow-y-auto">
            <EditPlaceForm post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
