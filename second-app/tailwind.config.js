/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Включаем темную тему через класс (чтобы кнопка работала)
  darkMode: "class", 
  // 2. Указываем пути ко всем файлам, где ты пишешь классы
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};