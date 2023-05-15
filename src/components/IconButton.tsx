import React from 'react'
import classNames from 'classnames'

interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode?: 'filled' | 'tonal' | 'outlined' | 'text'
    children: React.ReactNode
}

const IconButton = (props: IconButtonProps) => {
    const {mode = 'filled', children, className, disabled = false, ...rest} = props
    return (
        <button
            {...rest}
            className={classNames(
                'w-[40px] h-[40px] rounded-full flex justify-center items-center relative duration-100 overflow-hidden flex-shrink-0',
                className,
                mode === 'filled' && 'text-ui-primary-contrast bg-ui-primary',
                mode === 'tonal' && 'text-ui-primary bg-ui-surface-secondary',
                mode === 'outlined' && 'border-[1px] border-ui-outline',
                mode === 'text' && 'text-ui-primary bg-transparent',
                !disabled && 'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
                disabled && 'opacity-disabled'
            )}
        >
            <div
                className={classNames(
                    'overlay absolute top-0 left-0 w-full h-full opacity-0 duration-100',
                    mode === 'filled' && 'bg-ui-primary-contrast',
                    mode === 'tonal' && 'bg-ui-primary',
                    mode === 'outlined' && 'bg-ui-primary',
                    mode === 'text' && 'bg-ui-primary'
                )}
            />
            {children}
        </button>
    )
}

export default IconButton