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
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons({
          scale: 1.5,
          warn: true,
        }),
      ],
      shortcuts: [
        [
          'btn',
          'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
        [
          'icon-btn',
          'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
      ],
    }),
  ],
})
