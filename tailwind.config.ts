import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage : {
        eleceed : "url('/hello-world/public/804_EC9E91ED9288EC8381EC84B8_mobile.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
