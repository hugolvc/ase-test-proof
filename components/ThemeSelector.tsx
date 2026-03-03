'use client'
import { useTheme } from './ThemeProvider'

export function ThemeSelector() {
    const { theme, setTheme } = useTheme()
    const themes = ['aurora', 'claymorphism', 'glassmorphism', 'material', 'minimalistic', 'neumorphism', 'neo-brutalism', 'retro_ascii', 'standard', 'windows_311']

    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="bg-white text-black p-1 rounded border border-gray-300"
        >
            {themes.map(t => (
                <option key={t} value={t}>{t}</option>
            ))}
        </select>
    )
}
