import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='bg-[#0284C7] py-8 px-4 text-white'>
        <div className="flex gap-20 justify-between mx-auto max-w-6xl flex-col md:flex-row gap-10">
            <div>
                <Link href="/places/index" className="font-bold text-xl">Snow Map</Link>
                <p className="text-sm">聖地巡礼マップ</p>
                <p className="text-gray-200 mt-3 max-w-lg leading-relaxed">
                    Snow Manの聖地をめぐる旅。MV・ドラマ・バラエティのロケ地を巡って、
                    あなただけの巡礼マップを完成させよう。
                </p>
            </div>
            <div>
                <h3 className="font-bold">ページ</h3>
                <div className="flex flex-col gap-2">
                <Link href="/places/index" className="text-gray-200 hover:underline">聖地一覧</Link>
                <Link href="/auth/login" className="text-gray-200 hover:underline">ログイン</Link>
                <Link href="/auth/register" className="text-gray-200 hover:underline">新規登録</Link>
                </div>
            </div>
            <div>
                <h3 className="font-bold">サポート</h3>
                <div className="space-y-2">
                    <p className="text-gray-200 hover:underline">利用規約</p>
                    <p className="text-gray-200 hover:underline">プライバシーポリシー</p>
                    <p className="text-gray-200 hover:underline">お問い合わせ</p>
                </div>
            </div>
        </div>
    </footer>

  )
}

