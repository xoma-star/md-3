import React, {HTMLAttributes, useRef, useState} from 'react'
import {Icon24ArrowLeftOutline, Icon24ArrowRightOutline} from '@vkontakte/icons'
import IconButton from './IconButton'
import classNames from 'classnames'
import Body from './Typography/Body'

interface props extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode | React.ReactNode[],
    header?: React.ReactNode,
    icon?: React.ReactNode
}

const HorizontalScroll = ({children, icon, header, ...rest}: props) => {
    const [showArrows, setShowArrows] = useState([false, true])
    const [mouseIn, setMouseIn] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
        setShowArrows([
            e.currentTarget.scrollLeft !== 0,
            e.currentTarget.scrollWidth - e.currentTarget.scrollLeft !==
            e.currentTarget.clientWidth
        ])
    }

    const arrowRightHandler = () => ref.current?.scroll({
        behavior: 'smooth',
        left: ref.current.scrollLeft + (ref.current.clientWidth / 3)
    })
    const arrowLeftHandler = () => ref.current?.scroll({
        behavior: 'smooth',
        left: ref.current.scrollLeft - (ref.current.clientWidth / 3)
    })

    const scrollable = Number(ref.current?.clientWidth) < Number(ref.current?.scrollWidth)

    return (
        <div {...rest}>
            {(header || icon) && <div className={'flex flex-row items-center gap-2'}>
                <div className={'text-ui-primary'}>{icon}</div>
                <Body size={'l'}>{header}</Body>
            </div>}
            <div
                className={'flex items-center relative'}
                onMouseEnter={() => setMouseIn(true)}
                onMouseLeave={() => setMouseIn(false)}
            >
                <div
                    className={'flex flex-row justify-start items-center gap-2 overflow-auto relative py-2.5'}
                    onScroll={scrollHandler}
                    ref={ref}
                >
                    {children}
                </div>
                {showArrows[0] && mouseIn && scrollable && (
                    <div className={'absolute left-3 max-lg:hidden'}>
                        <IconButton
                            className={classNames('opacity-50 hover:opacity-100 duration-200')}
                            onClick={arrowLeftHandler}
                        >
                            <Icon24ArrowLeftOutline />
                        </IconButton>
                    </div>
                )}
                {showArrows[1] && mouseIn && scrollable && (
                    <div className={'absolute right-3 max-lg:hidden'}>
                        <IconButton
                            className={classNames('opacity-50 hover:opacity-100 duration-200')}
                            onClick={arrowRightHandler}
                        >
                            <Icon24ArrowRightOutline />
                        </IconButton>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HorizontalScroll