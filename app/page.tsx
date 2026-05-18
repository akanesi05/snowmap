import Link from "next/link";
import Image from "next/image";
import { MapPin, NotebookPen, Navigation, ArrowRight, Snowflake } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-50 to-white px-6 py-16">
      <Snowflake className="pointer-events-none absolute left-16 top-28 h-16 w-16 text-sky-200/50" />
      <Snowflake className="pointer-events-none absolute right-20 top-80 h-20 w-20 text-sky-100/60" />
      <Snowflake className="pointer-events-none absolute left-16 bottom-48 h-28 w-28 text-sky-200/35" />
      <section className='relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        <div className="space-y-6">
          <h1 className='text-5xl font-bold text-slate-900'>Snow Map</h1>
          <p className="text-lg font-semibold text-sky-600">Snow Manの聖地を地図で記録して、見つけることができるアプリ</p>
          <p className="leading-8 text-slate-700">
          MVやドラマ、バラエティなどに登場したロケ地を投稿し、みんなで共有しよう。あなたの投稿が、誰かの巡礼の旅を手助けし、より楽しいものにするかもしれません。
          </p>
          <div className="flex gap-4">
            <Link href="/places/index" className="inline-flex w-48 justify-center rounded bg-blue-500 text-white px-6 py-3 hover:bg-blue-600">聖地を探す</Link>
            <Link href="/places/new" className="inline-flex w-48 justify-center rounded border border-blue-500 bg-white px-6 py-3 text-blue-500 hover:bg-blue-100">聖地を投稿する</Link>
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
      <section className="relative z-10 max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/places/index" className="group rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <MapPin size={20} />
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">ロケ地を探す</h2>
            <ArrowRight size={18} />
          </div>
            <p className="mt-2 text-sm text-slate-600">
              投稿された聖地を、地図上で見つけられます。
            </p>
        </Link>
        <Link href="/places/new" className="group rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <NotebookPen size={20} />
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">自担の足跡を残す</h2>
            <ArrowRight size={18} />
          </div>
            <p className="mt-2 text-sm text-slate-600">
              自担が訪れた場所を投稿できます。
            </p>
        </Link>
        <Link href="/places/index" className="group rounded-2xl bg-white p-6 shadow">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-600">
            <Navigation size={20} />
          </div>
          
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-slate-900">近くの聖地を見つける</h2>
            <ArrowRight size={18} />
          </div>
            <p className="mt-2 text-sm text-slate-600">
              現在地から近い聖地を見つけられます。
            </p>
        </Link>
      </section>
    </main>
  );
}
