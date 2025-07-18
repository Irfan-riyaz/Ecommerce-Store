// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2f3c7e] via-[#6c5ce7] to-[#f8c1d8] flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-2xl shadow-xl text-center w-full max-w-4xl space-y-8">

        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e0e7ff] via-[#f3e8ff] to-[#fbcfe8] drop-shadow-xl whitespace-nowrap">
          Welcome to Your E-Commerce Store
        </h1>

        <p className="text-white/80 text-lg">Choose your role to continue</p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => router.push('/admin/login')}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg rounded-full transition duration-300 shadow-lg hover:scale-105"
          >
            Admin
          </button>

          <button
            onClick={() => router.push('/user/products')}
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg rounded-full transition duration-300 shadow-lg hover:scale-105"
          >
            User
          </button>
        </div>
      </div>
    </div>
  );
}
