import {useEffect, useState} from 'react'

const useDynamicHeight = () => {
    const [dynamicHeight, setDynamicHeight] = useState(window.innerHeight)
    useEffect(() => {
        const listener = (e: UIEvent) => {
            const target = e.currentTarget as Window
            setDynamicHeight(target.innerHeight)
        }
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)
    }, [])

    return dynamicHeight
}

export default useDynamicHeight