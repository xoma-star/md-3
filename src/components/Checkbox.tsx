import React from 'react';
import classNames from "classnames";
import {Icon16CheckOutline} from "@vkontakte/icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode,
    description?: React.ReactNode
}

const Checkbox = (props: CheckboxProps) => {
    const {
        children,
        disabled,
        checked,
        ...rest
    } = props
    return (
        <label className={classNames('flex flex-row items-center gap-2', !disabled && 'cursor-pointer', disabled && 'opacity-disabled')}>
            <div
                className={classNames(
                    'relative flex items-center justify-center text-ui-primary-contrast rounded-full w-[40px] h-[40px] overflow-hidden',
                    !disabled && 'lg:[&>.overlay]:hover:opacity-hover lg:[&>.overlay]:active:opacity-pressed lg:[&>.overlay]:focus:focus-visible:opacity-focus [&>.overlay]:active:opacity-pressed [&>.overlay]:focus:focus-visible:opacity-focus',
                )}
            >
                <input
                    {...rest}
                    disabled={disabled}
                    checked={checked}
                    type={'checkbox'}
                    className={classNames(
                        'w-[18px] h-[18px] rounded-[2px] duration-100 appearance-none checked:bg-ui-primary border-2 checked:border-ui-primary border-ui-surface-contrast',
                    )}
                />
                <Icon16CheckOutline width={18} height={18} className={classNames('absolute duration-100', checked && 'scale-100', 'scale-0')} />
                <div className={'overlay absolute top-0 left-0 w-full h-full bg-ui-surface-contrast opacity-0'}/>
            </div>
            {children}
        </label>
    );
};

export default Checkbox;