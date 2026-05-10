
export default function Footer() {
  return (
    <footer className='bg-[#0284C7] py-8 px-4 text-white'>
        <div className="flex gap-20 justify-between mx-auto max-w-6xl">
            <div>
                <h2 className="font-bold text-xl">Snow Map</h2>
                <p className="text-sm">聖地巡礼マップ</p>
                <p className="text-gray-200 mt-3 max-w-lg leading-relaxed">
                    Snow Manの聖地をめぐる旅。MV・ドラマ・バラエティのロケ地を巡って、
                    あなただけの巡礼マップを完成させよう。
                </p>
            </div>
            <div>
                <h3 className="font-bold">ページ</h3>
                <div className="space-y-2">
                <p className="text-gray-200">聖地一覧</p>
                <p className="text-gray-200">ログイン</p>
                <p className="text-gray-200">新規登録</p>
                </div>
            </div>
            <div>
                <h3 className="font-bold">サポート</h3>
                <div className="space-y-2">
                    <p className="text-gray-200">利用規約</p>
                    <p className="text-gray-200">プライバシーポリシー</p>
                    <p className="text-gray-200">お問い合わせ</p>
                </div>
            </div>
        </div>
    </footer>

  )
}

