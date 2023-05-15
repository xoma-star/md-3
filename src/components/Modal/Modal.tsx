import React, {useEffect} from 'react'
import classNames from 'classnames'
import useDynamicHeight from '../../lib/useDynamicHeight'
import FocusTrap from 'focus-trap-react'
import Backdrop from './Backdrop'
import CloseButton from './CloseButton'
import useAdaptivity from '../../lib/useAdaptivity'
import useSwipe from '../../lib/useSwipe'
import useDebounce from '../../lib/useDebounce'

interface props {
    children: React.ReactNode,
    onClose(): void
}

const Modal = ({children, onClose}: props) => {
    const {isMobile} = useAdaptivity()
    const dynamicHeight = useDynamicHeight()

    const debouncedChildren = useDebounce(children, 200)

    const {
        onTouchEnd,
        onTouchStart,
        onTouchMove,
        style,
        showDragHandle,
        onTouchMoveFix,
        roundTop
    } = useSwipe(dynamicHeight, !children || !isMobile, onClose)

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (children && e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', listener)

        return () => window.removeEventListener('keydown', listener)
    }, [children])

    return (
        <div
            onTouchMove={onTouchMove}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className={classNames(
                'fixed w-full top-0 left-0 ease-IOS max-lg:z-50 flex will-change-transform duration-500',
                children &&
                'max-lg:-translate-y-0 lg:animate-modalIn',
                !children &&
                'max-lg:translate-y-[100vh] lg:animate-modalOut'
            )}
            style={{height: dynamicHeight, ...style}}
        >
            <FocusTrap active={!!children && !isMobile} focusTrapOptions={{initialFocus: false}}>
                <div className={classNames('w-full h-full relative flex justify-end overflow-hidden border-ui-surface-secondary', children && 'max-lg:shadow-elevation-5')} style={
                    {
                        borderRadius: (roundTop && isMobile) ? '2rem 2rem 0 0' : 0,
                        borderTopWidth: (roundTop && isMobile) ? 2 : 0
                    }
                }>
                    <Backdrop onClick={onClose} show={!!children && !isMobile} />
                    <div
                        className={classNames(
                            'w-full h-full relative bg-ui-surface text-ui-surface-contrast lg:rounded-l-3xl lg:w-[480px] lg:p-8 lg:pr-0 duration-500 ease-IOS',
                            children && 'lg:translate-x-0',
                            !children && 'lg:translate-x-full'
                        )}
                    >
                        <div className={classNames(
                            'w-[32px] h-[4px] rounded-full bg-ui-surface-secondary absolute top-4 left-0 right-0 mx-auto duration-200',
                            showDragHandle && isMobile && 'opacity-40',
                            (!showDragHandle || !isMobile) && 'opacity-0'
                        )} />
                        <div
                            onTouchMove={onTouchMoveFix}
                            style={{
                                scrollbarGutter: 'stable'
                            }}
                            className={classNames(
                                'w-full h-full duration-300 ease-IOS lg:origin-right max-lg:origin-bottom relative max-lg:p-4 pr-8',
                                children && 'opacity-100 max-lg:scale-y-100 lg:translate-x-0',
                                !children && 'opacity-0 max-lg:scale-y-0 lg:translate-x-full',
                                showDragHandle && isMobile && 'overflow-hidden',
                                (!showDragHandle || !isMobile) && 'overflow-auto'
                            )}>
                            {!isMobile && <CloseButton onClick={onClose} />}
                            {children || debouncedChildren}
                        </div>
                    </div>
                </div>
            </FocusTrap>
        </div>
    )
}

export default Modal