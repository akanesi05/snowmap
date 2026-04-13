'use client'
import { useRouter } from 'next/navigation'

export default function UpdateButton() {
  return (
    <button
      type="submit"
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
        更新
    </button>
  )
}
