import { atomWithStorage } from 'jotai/utils'

export const appearanceAtom = atomWithStorage<'auto' | 'light' | 'dark'>(
  'use-dark',
  'auto',
)
