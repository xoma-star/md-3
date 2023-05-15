import {useEffect, useState} from 'react'

type Appearance = 'light' | 'dark'

const useAppearance = () => {
    const [appearance, setAppearance] = useState<Appearance>(window.matchMedia('(prefers-color-scheme: dark)')?.matches
        ? 'dark'
        : 'light')

    const listener = (e: MediaQueryListEvent) => setAppearance(e.matches ? 'dark' : 'light')

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', listener)
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', listener)
        }
    }, [])

    return appearance
}

export default useAppearance