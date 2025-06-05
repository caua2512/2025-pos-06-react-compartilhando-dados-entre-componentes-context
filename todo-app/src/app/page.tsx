import Link from 'next/link'
import Naver  from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Bem-vindo!</h1>
      <Naver />
    </main>
  )
}