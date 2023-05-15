import React from 'react'
import classNames from 'classnames'

export interface PanelProps {
    children?: React.ReactNode
    id: string
    className?: string
}

const Panel = ({children, className}: PanelProps) => (
    <div
        className={classNames(
            'bg-ui-background overflow-auto flex flex-grow-[1] duration-300',
            className
        )}
    >
        {children}
    </div>
)

export default Panel