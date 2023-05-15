import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

const Headline = ({className, size = 'm', children, ...rest}: props) => (
    <div
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--headline-small',
            size === 'm' && 'typography--headline-medium',
            size === 'l' && 'typography--headline-large'
        )}
    >
        {children}
    </div>
)

export default Headline