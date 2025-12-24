import { ThemeToggle } from "./theme-toggle";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-3xl text-center space-y-10 px-4">
        <h1 className="text-6xl font-semibold leading-tight">
          Next.js Dark Mode Tutorial
        </h1>
        
        <p className="text-lg opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex justify-center items-center gap-4">
          <a 
            href="#" 
            className="px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg"
            style={{
              backgroundColor: 'var(--btn-bg)',
              color: 'var(--btn-text)'
            }}
          >
            Начать обучение
          </a>
        </div>
      </div>
    </div>
  );
}