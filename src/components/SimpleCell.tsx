import React, {HTMLAttributes} from 'react'
import classNames from 'classnames'
import Body from './Typography/Body'

interface props extends HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode
    before?: React.ReactNode
    after?: React.ReactNode
    className?: string
    description?: string
}

const SimpleCell = ({
    className,
    after,
    before,
    children,
    description,
    ...rest
}: props) => (
    <div {...rest} className={classNames(className, 'flex flex-row items-center gap-2 justify-between w-full')}>
        <div className={'flex flex-row gap-2 flex-grow[1] items-center'}>
            {before && <div className={'text-ui-primary'}>{before}</div>}
            <div className={'flex-grow[1]'}>
                <Body size={'l'}>
                    {children as string}
                </Body>
                {description && (
                    <Body size={'s'} className={'opacity-75'}>
                        {description}
                    </Body>
                )}
            </div>
        </div>
        {after && <div>{after}</div>}
    </div>
)

export default SimpleCell