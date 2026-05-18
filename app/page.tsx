import CreatePlaceButton from './_components/CreatePlaceButton'
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className='bg-sky-50 min-h-screen px-6 py-16'>
      <section className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className="space-y-6">
          <h1 className='text-5xl font-bold text-slate-900'>Snow Map</h1>
          <p className="text-lg font-semibold text-sky-600">Snow Manの聖地を地図で記録して、見つけることができるアプリ</p>
          <p className="leading-8 text-slate-700">
          MVやドラマ、バラエティなどに登場したロケ地を投稿し、みんなで共有しよう。あなたの投稿が、誰かの巡礼の旅を手助けし、より楽しいものにするかもしれません。
          </p>
          <div className="flex gap-4">
            <Link href="/places/index" className="rounded bg-blue-500 text-white px-4 py-2">聖地を探す</Link>
            <CreatePlaceButton />
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <Image
            src="/home-map-illustration.png"
            alt="地図とピンのイラスト"
            width={500}
            height={350}
            className="w-full rounded-2xl"
          />
        </div> 
      </section>
      <section className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="font-bold text-slate-900">ロケ地を探す</h2>
          <p className="mt-2 text-sm text-slate-600">
          投稿された聖地を、地図上で見つけられます。
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="font-bold text-slate-900">自担の足跡を残す</h2>
          <p className="mt-2 text-sm text-slate-600">
            自担が訪れた場所や気になる場所を投稿できます。
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="font-bold text-slate-900">近くの聖地を見つける</h2>
          <p className="mt-2 text-sm text-slate-600">
            現在地から近い聖地を見つけられます。
          </p>
        </div>
      </section>
    </main>
  );
}
