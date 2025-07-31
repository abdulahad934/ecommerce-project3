/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',    // v4 এ লাগতে পারে স্পষ্ট করা
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

