import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

const Display = ({className, size = 'm', children, ...rest}: props) => (
    <div
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--display-small',
            size === 'm' && 'typography--display-medium',
            size === 'l' && 'typography--display-large'
        )}
    >
        {children}
    </div>
)

export default Display