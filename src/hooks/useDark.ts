import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useMedia } from 'react-use'

import { appearanceAtom } from '~/stores/atoms'

export function useDark() {
  const [setting, setSetting] = useAtom(appearanceAtom)
  const isDark = useMedia('(prefers-color-scheme: dark)', false)
  const isDarkMode = setting === 'dark' || (isDark && setting !== 'light')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.toggle('dark', true)
    } else {
      document.documentElement.classList.toggle('dark', false)
    }
  }, [isDarkMode])

  const toggleDark = () => {
    if (setting === 'auto') {
      setSetting(isDark ? 'light' : 'dark')
    } else {
      setSetting('auto')
    }
  }

  return [isDarkMode, toggleDark] as const
}
