import Link from 'next/link'
export default function Header() {
  return (
    <header className='bg-[#0EA5E9] py-4 px-4 text-white'>
      <div className="flex justify-between mx-auto max-w-6xl items-center">
        <div><Link href="/" className="font-bold text-lg">Snow Map</Link></div>
        <div className="flex gap-6 text-sm">
            <Link href="/places/index">聖地一覧</Link>
            <Link href="/auth/login">ログイン</Link>
            <Link href="/auth/register">新規登録</Link>
        </div>
      </div> 
     
    </header>

  )
}

