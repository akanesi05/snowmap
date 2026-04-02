import PostButton from './_components/PostButton'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>SnowMap</h1>
      <p>この表示はsrc/app/page.tsxに記載したテキストです。</p>
      <CreatePlaceButton />
      <Link href="/places/index">聖地一覧</Link>
    </main>
  );
}
