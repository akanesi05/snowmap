import Link from 'next/link'
import Image from 'next/image'
import type { Session } from "next-auth"

type HeaderProps = {
  session: Session | null
}
export default function Header( { session }: HeaderProps ) {
  return (
    <header className='bg-[#0EA5E9] py-4 px-4 text-white'>
      <div className="flex justify-between mx-auto max-w-6xl items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ロゴ" width={32} height={32} />
            <span className="font-bold text-lg">Snow Map</span>
          </Link>
        <div className="flex gap-6 text-sm">
            <Link href="/places/index">聖地一覧</Link>
            <Link href="/places/new">聖地投稿</Link>
            {session ? (
              <Link href="/auth/logout">ログアウト</Link>
            ) : (
              <>
                <Link href="/auth/login">ログイン</Link>
                <Link href="/auth/register">新規登録</Link>
              </>
            )}
        </div>
      </div> 
    </header>
  )
}

