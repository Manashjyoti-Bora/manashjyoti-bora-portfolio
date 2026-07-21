import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A96E',
          light: '#E0C896',
          dark: '#A8854D',
        },
        ink: {
          DEFAULT: '#0A0A0C',
          surface: '#111118',
          elevated: '#16161E',
          border: '#1E1E28',
        },
        cream: {
          DEFAULT: '#F2EFE9',
          muted: '#C5C1B6',
          dim: '#8A877F',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.03em',
      },
    },
  },
  plugins: [],
};
export default config;
