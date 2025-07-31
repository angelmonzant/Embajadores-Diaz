module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4d1a',
        dark: '#222222',
        light: '#f7f7f7',
      },
    },
  },
  plugins: [],
};

{
  "name": "embajadores-diaz",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^13.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.0.0",
    "@mui/material": "^5.0.0",
    "@supabase/supabase-js": "^2.0.0"
  }
}
