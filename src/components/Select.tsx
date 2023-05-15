import React, {HTMLAttributes, useEffect, useState} from 'react';
import Input from "./Input";
import {Icon16ChevronOutline} from "@vkontakte/icons";
import classNames from "classnames";
import Body from "./Typography/Body";

interface ItemProps {
    before?: React.ReactNode,
    label: string,
    value: string,
    focus?: boolean,
    onClick?(): void
}

const SelectItem = ({before, label, focus, onClick}: ItemProps) =>
    <div
        onClick={onClick}
        className={classNames(
            'flex flex-row items-center h-[56px] gap-[16px] cursor-pointer relative px-[16px]',
        focus && '[&>.overlay]:opacity-focus',
        'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',

    )}>
        <div className={'overlay absolute w-full h-full top-0 left-0 duration-200 bg-ui-surface-secondary-contrast opacity-0'}/>
        {before}
        <Body>{label}</Body>
</div>


interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
    options: ItemProps[],
    onValueChange(e: string): void
}

const Select = ({options, onValueChange, placeholder}: SelectProps) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!showOptions) return
        const clickListener = () => {
            setShowOptions(false)
        }
        const keyDownListener = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'Down') setSelectedIndex(s => Math.min(options.length - 1, s + 1))
            if (e.key === 'ArrowUp' || e.key === 'Up') setSelectedIndex(s => Math.max(0, s - 1))
            if (e.key === 'Enter' || e.key === 'Space') setShowOptions(false)
        }
        window.addEventListener('click', clickListener)
        window.addEventListener('keydown', keyDownListener)
        return () => {
            window.removeEventListener('click', clickListener)
            window.removeEventListener('keydown', keyDownListener)
        }
    }, [showOptions, options.length])

    useEffect(() => {
        onValueChange(options[selectedIndex].value)
    }, [selectedIndex])

    return (
        <div className={classNames('relative')} onClick={e => e.stopPropagation()}>
            <Input
                readOnly
                value={options[selectedIndex].label}
                type={'text'}
                after={<Icon16ChevronOutline onClick={() => setShowOptions(s => !s)} className={classNames('cursor-pointer duration-200', showOptions && '-rotate-90', !showOptions && 'rotate-90')}/>}
                placeholder={placeholder}
                onFocus={() => setShowOptions(true)}
            />
            <div
                className={classNames(
                    'absolute bg-ui-surface-secondary z-[5000] text-ui-surface-secondary-contrast ease-IOS duration-300 h-fit max-h-60 w-full rounded-[6px] overflow-auto origin-top',
                    showOptions && 'scale-y-100 shadow-elevation-1',
                    !showOptions && 'scale-y-0 opacity-0'
                )}
            >
                {options.map((x, i) => <SelectItem onClick={() => setSelectedIndex(i)} focus={i === selectedIndex} key={x.value} label={x.label} value={x.value} />)}
            </div>
        </div>
    );
};

export default Select;