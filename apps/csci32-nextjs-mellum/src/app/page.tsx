import Link from 'next/link'

export default function Home() {
  return (
    <Link
      href="/button"
      className="text-blue-500 hover:underline hover:text-blue-600 active:text-blue-700 transition-colors"
    >
      Check out the button lab
    </Link>
  )
}
