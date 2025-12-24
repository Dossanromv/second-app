// import Image from "next/image";

export default function Home() {
  return (
<div className="min-h-screen flex items-center justify-center bg-white dark:bg-black transition-all duration-300 px-4">
      
      <div className="max-w-3xl w-full text-center space-y-10">
        
        <h1 className="text-4xl md:text-6xl font-semibold text-black dark:text-white leading-tight">
          Next.js Dark Mode Tutorial
        </h1>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis 
          assumenda atque ad tempore nihil maxime doloribus aut ab quibusdam commodi, 
          quidem nemo odit veniam eum temporibus molestias, quaerat dicta.
        </p>
        
        
        <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform">
          Начать обучение
        </button>

      </div>
    </div>
  );
}
