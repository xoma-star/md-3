import React, {ButtonHTMLAttributes} from 'react'
import classNames from 'classnames'
import Label from './Typography/Label'

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode
    children?: string
    isActive?: boolean
}

const NavButton = ({icon, children, className, isActive, ...rest}: props) => (
    <button
        {...rest}
        className={classNames(className, 'flex flex-col items-center')}
    >
        <div
            className={classNames(
                'rounded-full py-1 relative mb-1 duration-200',
                isActive &&
                    'bg-ui-secondary-container duration-100 text-ui-secondary-container-contrast px-4 mx-0',
                !isActive && 'text-ui-surface-secondary-contrast px-0 mx-4'
            )}
        >
            <div
                className={classNames(
                    'overlay absolute top-0 left-0 w-full h-full opacity-0 duration-100 rounded-full',
                    isActive && 'bg-ui-secondary-container-contrast',
                    !isActive && 'bg-ui-surface-secondary-contrast'
                )}
            />
            {icon}
        </div>
        <Label
            className={
                isActive
                    ? 'text-ui-surface-contrast'
                    : 'text-ui-surface-secondary-contrast'
            }
        >
            {children}
        </Label>
    </button>
)

export default NavButton