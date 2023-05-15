import React, {ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    size?: 'default' | 'small' | 'large',
    mode?: 'primary' | 'secondary' | 'tertiary'
}

const FloatingButton = ({className, children, size = 'default', mode = 'primary', disabled, ...rest}: props) => (
    <button
        disabled={disabled}
        {...rest}
        className={classNames(
            'flex items-center justify-center relative duration-200 overflow-hidden',
            mode === 'primary' && 'bg-ui-primary-container text-ui-primary-container-contrast',
            mode === 'secondary' && 'bg-ui-secondary-container text-ui-secondary-container-contrast',
            mode === 'tertiary' && 'bg-ui-tertiary-container text-ui-tertiary-container-contrast',
            size === 'large' && 'w-24 h-24 rounded-3xl',
            size === 'default' && 'w-[56px] h-[56px] rounded-[16px]',
            size === 'small' && 'w-[40px] h-[40px] rounded-[12px]',
            disabled && 'opacity-disabled',
            !disabled && 'shadow-elevation-3 lg:hover:shadow-elevation-4 lg:active:shadow-elevation-2 active:shadow-elevation-2',
            !disabled && 'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
            className
        )}
    >
        <div className={classNames(
            'overlay absolute left-0 top-0 w-full h-full opacity-0 duration-200',
            !disabled && (
                (mode === 'primary' && 'bg-ui-primary-container-contrast') ||
                (mode === 'secondary' && 'bg-ui-secondary-container-contrast') ||
                (mode === 'tertiary' && 'bg-ui-tertiary-container-contrast')
            )
        )} />
        {children}
    </button>
)

export default FloatingButton