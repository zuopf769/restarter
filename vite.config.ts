import presetIcons from '@unocss/preset-icons'
import react from '@vitejs/plugin-react-swc'
import { presetAttributify, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
    }),
  ],
})
