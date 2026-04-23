'use client'


import { signIn } from "next-auth/react"
import { useState } from 'react'
import { registerUser } from '@/app/actions'
import { ThemeToggle } from '@/app/theme-toggle'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const result = await registerUser(email, name)
    setIsLoading(false)

    if (result.success) {
      setStatus('✅ Аккаунт создан!')
    } else {
      setStatus('❌ Ошибка: ' + result.error)
    }
  }

  return (


    // Контейнер, который реагирует на смену темы (bg-white / dark:bg-slate-950)

    <div className="relative min-h-screen flex flex-col items-center justify-center">
      
      {/* Шапка с логотипом и переключателем */}
      <header className="absolute right-100 top-2 w-full p-5 flex justify-between items-center max-w-7xl" >
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* Красивый анимированный логотип */}
          <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
            <span className="text-white dark:text-black font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight">StarKiko</span>
        </div>
        <ThemeToggle />

      </header>
        <main className="max-w-3xl text-center space-y-10 px-4 mt-0">
        <h1 className="text-3xl font-extrabold tracking-tighter leading-tight mb-100"> Welcome back </h1>
        
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button 
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="px-10 py-4 rounded-full text-sm font-bold uppercase absolute bottom-100 tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center text" 
          style={{backgroundColor: 'var(--btn-bg)',color: 'var(--btn-text)'}}
          >

            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 mr-4" alt="Google"/>
            Sign in with Google
          </button>
          </div>
            </main>
      </div>

  )
}