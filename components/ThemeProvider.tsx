'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'aurora' | 'claymorphism' | 'glassmorphism' | 'material' | 'minimalistic' | 'neumorphism' | 'neo-brutalism' | 'retro_ascii' | 'standard' | 'windows_311'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('standard')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const saved = localStorage.getItem('theme') as Theme
        if (saved) setTheme(saved)
    }, [])

    useEffect(() => {
        if (mounted) {
            document.body.className = `theme-${theme}`
            localStorage.setItem('theme', theme)
        }
    }, [theme, mounted])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('useTheme must be used within ThemeProvider')
    return context
}
