'use client'
import { useRouter } from 'next/navigation'

export default function PostButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.push('/places/new')}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      投稿
    </button>
  )
}
