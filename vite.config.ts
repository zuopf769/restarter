import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import Unocss from '@unocss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      importMode: 'sync',
    }),
    Unocss({
      presets: [
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
      rules: [
        [
          'drop-shadow-vite',
          {
            filter: 'drop-shadow(0 0 2em #646cffaa)',
          },
        ],
        [
          'drop-shadow-react',
          {
            filter: 'drop-shadow(0 0 2em #61dafbaa)',
          },
        ],
      ],
    }),
  ],
})
