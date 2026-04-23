import Link from 'next/link'
import { ThemeToggle } from "./theme-toggle";
import Hero from './motion';
import { getServerSession } from "next-auth"

const projects = [
  {
    title: "Starkiko App",
    description: "Платформа для обучения фронтенд-разработке.",
    tech: ["Next.js", "Tailwind", "Motion", "Theme",],
    link: "#"
  },
  {
    title: "AI Dashboard",
    description: "Панель управления нейросетями с темным режимом.",
    tech: ["React", "Lucide", "Vercel"],
    link: "#"
  },
];

export default async function Home() 
{
  const session = await getServerSession()


  return (
    
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
          <Hero>
        <h1 className="text-6xl font-extrabold tracking-tighter leading-tight">
          Next.js <span className="text-zinc-500">Dark Mode</span></h1>
        
        <p className="text-lg opacity-70 max-w-md mx-auto">Создаем интерфейсы, которые приятно использовать в любое время суток.</p>
        
        
        {/* Кнопки через тег <a> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

          {/* Главная кнопка */}
          <Link href="/register"
              className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center min-w-[200px]"
              style={{backgroundColor: 'var(--btn-bg)',color: 'var(--btn-text)'}}>
              Sign Up
          </Link>
          
          {/* Второстепенная кнопка */}
          <a 
            href="/sales" 
            className="px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 flex items-center justify-center min-w-[200px]"
            style={{backgroundColor: 'var(--btn-bg)',color: 'var(--btn-text)'}}
          >
            Contact Sales
          </a>

        </div>
        </Hero>
      </main>


      <div>
      {session ? (
        <h1>Привет, {session.user.name}! Ты вошел.</h1>
      ) : (
        <h1>Ты еще не вошел в систему.</h1>
      )}
    </div>
    </div>
  );
}