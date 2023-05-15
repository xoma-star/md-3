import React from 'react'
import classNames from 'classnames'
import Label from './Typography/Label'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    before?: React.ReactNode
    mode?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text'
    after?: React.ReactNode
}

const Button = (props: ButtonProps) => {
    const {
        children,
        before,
        mode = 'filled',
        after,
        className,
        disabled,
        ...rest
    } = props

    return (
        <button
            {...rest}
            disabled={disabled}
            className={classNames(
                className,
                'h-[40px] gap-[8px] rounded-[20px] min-w-[48px] px-[12px] overflow-hidden',
                mode === 'filled' && 'bg-ui-primary text-ui-primary-contrast',
                mode === 'filled' && !disabled && 'lg:hover:shadow-elevation-1 lg:active:shadow-elevation-0 active:shadow-elevation-0 lg:focus:focus-visible:shadow-elevation-0',
                mode === 'elevated' && 'shadow-elevation-1 bg-ui-surface-secondary text-ui-primary',
                mode === 'elevated' && !disabled && 'lg:hover:shadow-elevation-2 lg:active:shadow-elevation-1 active:shadow-elevation-1 lg:focus:focus-visible:shadow-elevation-1',
                mode === 'tonal' && 'bg-ui-secondary-container text-ui-secondary-container-contrast',
                mode === 'tonal' && !disabled && 'lg:hover:shadow-elevation-1 lg:active:shadow-elevation-0 active:shadow-elevation-0 lg:focus:focus-visible:shadow-elevation-0',
                mode === 'text' && 'text-ui-primary',
                mode === 'outlined' && 'border-[1px] border-ui-outline text-ui-primary',
                !disabled &&
                'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
                disabled && 'opacity-disabled',
                'flex flex-row items-center duration-100 relative'
            )}
        >
            <div
                className={classNames(
                    'overlay absolute w-full h-full top-0 left-0 opacity-0 duration-100',
                    mode === 'filled' && 'bg-ui-primary-contrast',
                    mode === 'text' && 'bg-ui-primary',
                    mode === 'elevated' && 'bg-ui-primary',
                    mode === 'tonal' && 'bg-ui-secondary-container-contrast',
                    mode === 'outlined' && 'bg-ui-primary',
                    disabled && 'hidden'
                )}
            />
            {before && <Label size={'l'}>{before}</Label>}
            <Label size={'l'}>{children}</Label>
            {after && <Label size={'l'}>{after}</Label>}
        </button>
    )
}

export default Button