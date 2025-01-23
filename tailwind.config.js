/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'translate-x-[-2680px]',
    'translate-x-[-1340px]',
    'translate-x-[0px]',
    'translate-x-[1340px]',
    'translate-x-[2680px]',
    'z-[2]',
    'z-[0]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
