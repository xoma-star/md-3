import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    mode?: 'elevated' | 'filled' | 'outlined' | 'transparent',
    children?: React.ReactNode
}

const Card = ({mode = 'filled', children, className, ...rest}: props) => (
    <div
        className={classNames(
            'rounded-3xl relative duration-200 lg:[&>.container]:hover:opacity-hover',
            mode === 'elevated' && 'shadow-elevation-1 bg-ui-surface lg:hover:shadow-elevation-2',
            mode === 'filled' && 'bg-ui-surface-secondary lg:hover:shadow-elevation-1',
            mode === 'outlined' && 'border-[1px] border-ui-outline bg-ui-surface',
            mode === 'transparent' && 'bg-transparent',
            className
        )}
        {...rest}
    >
        <div className={classNames(
            'container absolute w-full h-full left-0 top-0 z-10 rounded-3xl opacity-0 duration-200',
            mode === 'elevated' && 'bg-ui-surface-contrast',
            mode === 'filled' && 'bg-ui-surface-secondary-contrast',
            mode === 'outlined' && 'bg-ui-surface-contrast'
        )} />
        <div className={'z-20 relative'}>
            {children}
        </div>
    </div>
)

export default Card