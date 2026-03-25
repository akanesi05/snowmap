"use client";
import { signIn } from "next-auth/react";
import Link from 'next/link'
import { RegisterForm } from './_components/RegisterForm'

export default function RegisterPage() {
  return (
     <div className="mx-auto max-w-md py-10">
      <h1 className="mb-4 text-2xl font-bold">アカウント作成</h1>
       <p className="mb-10 text-sm">登録をして聖地巡礼の記録を始めよう</p>
      
      <RegisterForm />

      <div className="mt-4 text-center text-sm">
        <span className="text-gray-600">既にアカウントをお持ちの方は</span>
        <Link href="/auth/login" className="ml-1 text-blue-600 hover:underline">
            ログイン
        </Link>
      </div>
    </div>
  );
}
