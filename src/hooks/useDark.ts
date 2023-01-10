import { useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

export function useDark() {
  const [setting, setSetting] = useLocalStorage<'auto' | 'light' | 'dark'>(
    'use-dark',
    'auto',
  )
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
