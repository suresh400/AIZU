import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          light: '#FF8C00',
          dark: '#CC5500',
          glow: 'rgba(255,107,0,0.15)',
          50: '#FFF3E8',
          100: '#FFE0C0',
          200: '#FFC07A',
          300: '#FF9D3D',
          400: '#FF8C00',
          500: '#FF6B00',
          600: '#E05A00',
          700: '#B84500',
          800: '#8C3300',
          900: '#5C2200',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FBC741',
          dark: '#D97706',
        },
        cream: {
          DEFAULT: '#F5EDD8',
          light: '#FFF8ED',
          sand: '#E8D5B0',
          dark: '#DBC99A',
        },
        dark: {
          DEFAULT: '#2C1A00',
          800: '#3D2600',
          700: '#5C3800',
        },
        body: '#5C4A2A',
        muted: '#9A8060',
        footer: '#FF6B00',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FF6B00 0%, #FF8C00 50%, #F59E0B 100%)',
        'cream-gradient': 'linear-gradient(180deg, #F5EDD8 0%, #FFF8ED 100%)',
        'hero-gradient': 'radial-gradient(ellipse at 60% 50%, rgba(255,107,0,0.15) 0%, transparent 70%), linear-gradient(180deg, #F5EDD8 0%, #FFF8ED 100%)',
        'glow-orange': 'radial-gradient(ellipse at center, rgba(255,107,0,0.2) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'shimmer': 'shimmer 2s infinite linear',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,107,0,0.6)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'orange': '0 4px 30px rgba(255,107,0,0.25)',
        'orange-lg': '0 8px 50px rgba(255,107,0,0.35)',
        'glass': '0 8px 32px rgba(44,26,0,0.08)',
        'glass-lg': '0 16px 64px rgba(44,26,0,0.12)',
        'card': '0 4px 24px rgba(44,26,0,0.08)',
        'card-hover': '0 12px 48px rgba(44,26,0,0.15)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
