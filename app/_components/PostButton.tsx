// export default function PostButton() {
//   return (
//     <main>
//     <button className="rounded bg-blue-500 text-white px-4 py-2">
//       投稿
//     </button>
//     </main>
//   );
// }
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
