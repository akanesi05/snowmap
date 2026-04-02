'use client'
import { useRouter } from 'next/navigation'

export default function PostButton() {
  return (
    <button
      type="submit"
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      投稿
    </button>
  )
}
