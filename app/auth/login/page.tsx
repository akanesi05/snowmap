import Link from 'next/link'
import { LoginForm } from './_components/LoginForm'

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="mb-4 text-2xl font-bold">ログイン</h1>
      
      <LoginForm />

      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600">アカウントをお持ちでない方は</span>
        <Link href="/auth/register" className="ml-1 text-blue-600 hover:underline">
          新規登録
        </Link>
      </div>
    </div>
  )
}
