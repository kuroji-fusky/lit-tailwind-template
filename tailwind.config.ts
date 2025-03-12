import type { Config } from "tailwindcss"

const config: Config = {
  content: ["index.html", "src/**/*.{ts,css}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
