import react from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      importMode: 'sync',
    }),
    Unocss(),
  ],
})
