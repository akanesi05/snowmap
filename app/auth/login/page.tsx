import Link from 'next/link'
import { LoginForm } from './_components/LoginForm'
import Image from 'next/image'
import { Suspense } from 'react'

export default function LoginPage() {
  return (
    <div className="bg-gray-100 px-4 py-10 md:min-h-screen md:flex md:items-center">
    <div className="mx-auto max-w-lg p-6 md:p-8 bg-white rounded-2xl shadow">
      <div className="mb-6 flex items-center gap-2">
        <Image src="/logo.png" alt="ロゴ" width={32} height={32} />
        <p className="text-sm font-semibold text-sky-500">Snow Man Pilgrimage</p>
      </div>
      <h1 className="mb-2 text-2xl font-bold">ログイン</h1>
      <p className="mb-6 text-sm text-gray-600">聖地巡礼の記録を続けよう</p>  
      <Suspense fallback={<p>読み込み中...</p>}>
      <LoginForm />
      </Suspense>
      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600">アカウントをお持ちでない方は</span>
        <Link href="/auth/register" className="ml-1 text-blue-600 hover:underline">
          新規登録
        </Link>
      </div>
    </div>
    </div>
  )
}
