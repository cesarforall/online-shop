/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // auto-fit 200
        autoFit200: 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    }
  },
  plugins: []
}
