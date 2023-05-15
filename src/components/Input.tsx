import React, {useRef, useState} from 'react'
import classNames from 'classnames'
import Body from './Typography/Body'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    before?: React.ReactNode
    after?: React.ReactNode,
    supportingText?: string,
    error?: boolean,
    multiline?: boolean
}

const Input = (props: InputProps) => {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    const {
        before,
        after,
        className,
        disabled,
        placeholder,
        value,
        supportingText,
        onFocus,
        onBlur,
        error = false,
        ...rest
    } = props
    return (
        <div className={classNames(className)}>
            <div
                className={classNames(
                    isActive && 'border-ui-primary',
                    !isActive && 'border-ui-outline',
                    !disabled && 'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
                    'border-[1px] bg-ui-surface-secondary rounded-[6px] flex flex-row h-[56px] px-[16px] gap-[16px] items-center duration-100 relative overflow-hidden '
                )}
            >
                <div
                    role={'presentation'}
                    onClick={() => ref.current?.focus()}
                    className={classNames(
                        'overlay cursor-text absolute w-full h-full',
                        'top-0 left-0 opacity-0 duration-100 bg-ui-surface-contrast z-40'
                    )}
                />
                {before && (
                    <div className={'text-ui-surface-secondary-contrast z-10 -ml-[4px]'}>
                        {before}
                    </div>
                )}
                <div className={classNames('w-full relative', (isActive || value) ? 'z-50' : 'z-10')}>
                    <label
                        className={classNames(
                            'absolute -z-10 top-0 left-0 duration-300 cursor-pointer',
                            (isActive || value) && '-translate-y-2.5 scale-75 origin-top-left text-ui-primary',
                            (!isActive && !value) && 'text-ui-surface-secondary-contrast'
                        )}
                        htmlFor={placeholder}
                    >{placeholder}</label>
                    <input
                        {...rest}
                        id={placeholder}
                        ref={ref}
                        value={value}
                        disabled={disabled}
                        className={classNames('outline-0 bg-transparent w-full text-ui-surface-contrast translate-y-2 appearance-none')}
                        onFocus={(e) => {
                            setIsActive(true)
                            if (onFocus) onFocus(e)
                        }}
                        onBlur={(e) => {
                            setIsActive(false)
                            if (onBlur) onBlur(e)
                        }}
                    />
                </div>
                {after && (
                    <div
                        className={
                            'text-ui-surface-secondary-contrast -mr-[4px] z-50'
                        }
                    >
                        {after}
                    </div>
                )}
            </div>
            {supportingText && <Body size={'s'} className={'text-ui-surface-secondary-contrast mx-[16px] mt-[4px]'}>{supportingText}</Body>}
        </div>
    )
}

export default Input