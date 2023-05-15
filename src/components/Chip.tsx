import React from 'react'
import classNames from 'classnames'
import {Icon24CancelOutline, Icon24Done} from '@vkontakte/icons'
import Label from './Typography/Label'

interface AssistProps {
    mode: 'assist',
    elevated?: boolean
}
interface FilterProps {
    mode: 'filter',
    selected?: boolean,
    elevated?: boolean
}

interface InputProps {
    mode: 'input',
    onDelete?(): void
}

interface CommonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    before?: React.ReactNode
    disabled?: boolean,
}

type ChipProps = CommonProps & (AssistProps | FilterProps | InputProps)

const Chip = (props: ChipProps) => {
    const {
        mode,
        className,
        before,
        children,
        disabled,
        ...rest
    } = props

    let selected = undefined
    if (mode === 'filter') selected = props.selected ?? false

    return (
        <button
            {...rest}
            disabled={disabled}
            className={classNames(
                'h-[32px] rounded-[8px] gap-[8px] px-[16px] overflow-hidden flex flex-row duration-200 w-fit relative whitespace-nowrap items-center',
                'lg:hover:shadow-elevation-1 lg:active:shadow-elevation-0',
                mode === 'assist' && 'border-[1px] border-ui-outline bg-ui-surface text-ui-surface-contrast',
                mode === 'filter' && !selected && 'border-[1px] border-ui-outline bg-ui-surface text-ui-surface-contrast',
                mode === 'filter' && selected && 'bg-ui-secondary-container text-ui-secondary-container-contrast',
                mode === 'input' && 'border-[1px] border-ui-outline bg-ui-surface text-ui-surface-contrast',
                disabled && 'cursor-default opacity-disabled',
                !disabled && 'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
                (selected || before) && 'pl-[34px]',
                className
            )}
        >
            <div
                className={classNames(
                    disabled && 'hidden',
                    'overlay absolute w-full h-full top-0 left-0 opacity-0 duration-100',
                    (mode === 'assist' || (selected && mode === 'filter')) && 'bg-ui-secondary-container-contrast',
                    (!selected || mode === 'assist') && 'bg-ui-surface-contrast'
                )}
            />
            <div
                className={classNames(
                    'text-ui-primary duration-100 flex-shrink-0 flex-grow-0 absolute left-[8px]',
                    before || selected ? 'scale-x-100' : 'scale-x-0'
                )}
            >
                {before ? before : <Icon24Done width={18} height={18}/>}
            </div>
            <Label size={'l'}>{children}</Label>
            {mode === 'input' && <div className={'text-[18px] -mr-[8px]'}><Icon24CancelOutline width={18} height={18}/></div>}
        </button>
    )
}

export default Chip