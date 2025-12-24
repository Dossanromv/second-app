import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      
      {/* Шапка с логотипом и переключателем */}
      <header className="absolute top-0 w-full p-6 flex justify-between items-center max-w-7xl top-2" >
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* Красивый анимированный логотип */}
          <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
            <span className="text-white dark:text-black font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight">StarKiko</span>
        </div>
        
        <ThemeToggle />
      </header>

      <main className="max-w-3xl text-center space-y-10 px-4 mt-10">
        <h1 className="text-6xl font-extrabold tracking-tighter leading-tight">
          Next.js <span className="text-zinc-500">Dark Mode</span>
        </h1>
        
        <p className="text-lg opacity-70 max-w-md mx-auto">
          Создаем интерфейсы, которые приятно использовать в любое время суток.
        </p>

        <div className="flex justify-center">
          <a 
            href="#" 
            className="px-10 py-4 rounded-full font-semibold shadow-xl transition-all hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--btn-bg)',
              color: 'var(--btn-text)'
            }}
          >
            Начать обучение
          </a>
        </div>
      </main>
    </div>
  );
}