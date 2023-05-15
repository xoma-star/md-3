import React, {useRef, useState} from 'react'
import classNames from 'classnames'
import Body from './Typography/Body'

interface InputProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    before?: React.ReactNode
    after?: React.ReactNode,
    supportingText?: string,
    error?: boolean,
    multiline?: boolean
}

const Textarea = (props: InputProps) => {
    const [isActive, setIsActive] = useState(false)
    const ref = useRef<HTMLTextAreaElement>(null)
    const {
        before,
        after,
        className,
        disabled,
        placeholder,
        value,
        supportingText,
        error = false,
        ...rest
    } = props
    return (
        <div className={classNames(className)}>
            <div
                className={classNames(
                    isActive && 'border-ui-primary',
                    !isActive && 'border-ui-outline',
                    !disabled &&
                    'lg:[&>.overlay]:hover:opacity-hover [&>.overlay]:active:opacity-pressed',
                    'border-2 bg-ui-surface-secondary rounded-xl px-4 py-4 flex flex-row gap-2 items-center duration-100 relative typography--body-large'
                )}
            >
                <div
                    role={'presentation'}
                    onClick={() => ref.current?.focus()}
                    className={classNames(
                        'overlay cursor-text absolute w-[calc(100%_+_0.25rem)] h-[calc(100%_+_0.25rem)]',
                        '-top-0.5 -left-0.5 opacity-0 duration-100 rounded-xl bg-ui-surface-contrast z-40'
                    )}
                />
                {before && (
                    <div className={'text-ui-surface-secondary-contrast z-10 mr-2'}>
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
                    <textarea
                        {...rest}
                        id={placeholder}
                        ref={ref}
                        value={value}
                        disabled={disabled}
                        className={classNames('outline-0 bg-transparent w-full text-ui-surface-contrast translate-y-2 pr-4')}
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                    />
                </div>
                {after && (
                    <div
                        className={
                            'text-ui-surface-secondary-contrast z-50'
                        }
                    >
                        {after}
                    </div>
                )}
            </div>
            {supportingText && <Body size={'s'} className={'text-ui-surface-secondary-contrast ml-4 mt-1'}>{supportingText}</Body>}
        </div>
    )
}

export default Textarea