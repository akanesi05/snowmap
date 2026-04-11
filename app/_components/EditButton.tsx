'use client'
import { useRouter } from 'next/navigation'

export default function EditButton(props) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.push(props.href)}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      編集
    </button>
  )
}
