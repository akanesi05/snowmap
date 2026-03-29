'use client'
import { useRouter } from 'next/navigation'

export default function EditButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.push('/places/:placeId/edit')}
      className="rounded bg-blue-500 px-4 py-2 text-white"
    >
      編集
    </button>
  )
}
