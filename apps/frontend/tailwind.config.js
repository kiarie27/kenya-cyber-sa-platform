/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b1120',
        surface: '#111c31',
        accent: '#1d4ed8',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        muted: '#94a3b8'
      }
    }
  },
  plugins: []
};
