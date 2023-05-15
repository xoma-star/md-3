import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

const Body = ({className, size = 'm', children, ...rest}: props) => (
    <div
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--body-small',
            size === 'm' && 'typography--body-medium',
            size === 'l' && 'typography--body-large'
        )}
    >
        {children}
    </div>
)

export default Body