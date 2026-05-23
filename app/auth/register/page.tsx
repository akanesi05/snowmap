import Link from 'next/link'
import { RegisterForm } from './_components/RegisterForm'
import Image from 'next/image'

export default function RegisterPage() {
  return (
    <div className="md:min-h-screen bg-gray-100 md:flex md:items-center px-4 py-10">
     <div className="mx-auto max-w-lg p-6 md:p-8 bg-white rounded-2xl shadow">
        <div className="mb-6 flex items-center gap-2">
          <Image src="/logo.png" alt="ロゴ" width={32} height={32} />
          <p className="text-sm font-semibold text-sky-500">Snow Man Pilgrimage</p>
        </div>
      <h1 className="mb-4 text-2xl font-bold">アカウント作成</h1>
       <p className="mb-10 text-sm text-gray-600">登録をして聖地巡礼の記録を始めよう</p>
      <RegisterForm />
      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600">既にアカウントをお持ちの方は</span>
        <Link href="/auth/login" className="ml-1 text-blue-600 hover:underline">
            ログイン
        </Link>
      </div>
    </div>
    </div>
  );
}
