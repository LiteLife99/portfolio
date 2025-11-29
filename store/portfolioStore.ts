import { create } from 'zustand'

interface PortfolioState {
  isAvailable: boolean
  currentSection: string
  setIsAvailable: (available: boolean) => void
  setCurrentSection: (section: string) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  isAvailable: true,
  currentSection: 'home',
  setIsAvailable: (available) => set({ isAvailable: available }),
  setCurrentSection: (section) => set({ currentSection: section }),
}))

