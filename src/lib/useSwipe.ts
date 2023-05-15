import React, {useEffect, useState} from 'react'

const useSwipe = (height: number, disableBehaviour: boolean, onClose: () => void) => {
    const expandedHeight = 0
    const openedHeight = height / 4

    const [startPosition, setStartPosition] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [translate, setTranslate] = useState(0)

    useEffect(() => {
        if (disableBehaviour) setTranslate(height - openedHeight)
    }, [disableBehaviour])

    useEffect(() => {
        if (disableBehaviour) return
        if (translate !== 0) setTranslate(height - openedHeight)
    }, [height])

    const onTouchMove = (e: React.TouchEvent) => {
        if (disableBehaviour) return
        setCurrentPosition(e.touches[0].pageY)
    }
    const onTouchStart = (e: React.TouchEvent) => {
        if (disableBehaviour) return
        setStartPosition(e.touches[0].pageY)
        setCurrentPosition(e.touches[0].pageY)
    }
    const onTouchEnd = () => {
        if (disableBehaviour) return
        setTranslate(t => {
            const delta = currentPosition - startPosition
            if (Math.abs(delta) < 30) return t
            const newOffset = t + delta
            if (newOffset < (height - openedHeight) && t < newOffset) return height - openedHeight
            if (newOffset > (height - openedHeight)) {
                onClose()
                return height
            }
            return expandedHeight
        })
        setStartPosition(0)
        setCurrentPosition(0)
    }

    const onTouchMoveFix = (e: React.TouchEvent) => {
        if (e.currentTarget.scrollTop !== 0 && e.currentTarget.scrollHeight - e.currentTarget.clientHeight !== 0) {
            setStartPosition(e.touches[0].pageY)
            setCurrentPosition(e.touches[0].pageY)
            e.stopPropagation()
        }
    }

    const style: React.CSSProperties = {}
    if (startPosition !== 0) style.transitionDuration = '0ms'
    const currentOffset = Math.max(translate + currentPosition - startPosition, 0)
    if (!disableBehaviour) style.transform = `translateY(${currentOffset}px)`
    const showDragHandle = !!currentOffset
    const roundTop = currentOffset !== 0

    return {
        onTouchEnd,
        onTouchStart,
        onTouchMove,
        style,
        showDragHandle,
        onTouchMoveFix,
        roundTop
    }
}

export default useSwipe