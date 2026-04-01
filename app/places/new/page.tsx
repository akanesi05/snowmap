import PostButton from "../../_components/PostButton";
import Image from "next/image";
export default function PlacesNewPage() {
  return (
    <div className="flex">
      <div className="w-2/5 bg-[#020817] h-[600px] p-8">
        <h1 className="text-white text-2xl font-bold mb-4">聖地投稿フォーム</h1>
        <p className="text-white">タイトル</p>
        <input type="text" className="mr-6  sm:mr-0  text-black bg-white" />
        <p className="text-white">説明</p>
        <input
          type="text"
          className="mr-6 sm:mr-0  text-black bg-white h-[100px]"
        />
        <p className="text-white">住所</p>
        <input type="text" className="mr-6  sm:mr-0  text-black bg-white" />
        <p>
          <PostButton />
        </p>
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
