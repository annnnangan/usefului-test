import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        usBlue: {
          300: 'var(--us-blue300)',
          500: 'var(--us-blue500)',
          600: 'var(--us-blue600)',
          700: 'var(--us-blue700)'
        },
        usRed: {
          300: 'var(--us-red300)',
          500: 'var(--us-red500)',
          600: 'var(--us-red600)',
          700: 'var(--us-red700)'
        },
        usGreen: {
          300: 'var(--us-green300)',
          500: 'var(--us-green500)',
          600: 'var(--us-green600)',
          700: 'var(--us-green700)'
        },
        usOrange: {
          300: 'var(--us-orange300)',
          500: 'var(--us-orange500)',
          600: 'var(--us-orange600)',
          700: 'var(--us-orange700)'
        },
        usGray: {
          100: 'var(--us-gray100)',
          200: 'var(--us-gray200)',
          300: 'var(--us-gray300)',
          500: 'var(--us-gray500)',
          600: 'var(--us-gray600)',
          700: 'var(--us-gray700)',
          900: 'var(--us-gray900)',
          1100: 'var(--us-gray1100)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontSize: {
        '7xl': ['68px', '102px'],
        '3xl': ['32px', '48px'],
        sm: ['14px', '21px'],
        xs: ['12px', '18px']
      },
      animation: {
        shrink: 'shrink .25s ease-out',
        grow: 'grow .25s ease-out'
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' }
        },
        grow: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
