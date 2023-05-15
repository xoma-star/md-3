import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'

interface props extends HTMLAttributes<HTMLDivElement> {
    size?: 's' | 'm' | 'l'
}

const Title = ({className, size = 'm', children, ...rest}: props) => (
    <div
        {...rest}
        className={classNames(
            className,
            size === 's' && 'typography--title-small',
            size === 'm' && 'typography--title-medium',
            size === 'l' && 'typography--title-large'
        )}
    >
        {children}
    </div>
)

export default Title