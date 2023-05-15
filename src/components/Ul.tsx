import React from 'react'
import {Icon12Chevron} from '@vkontakte/icons'

interface props {
    items: string[]
}

const Ul = ({items}: props) => (
    <ul className={'flex flex-row items-center gap-3 flex-wrap gap-y-0'}>
        {items.map(x => (
            <li key={x} className={'flex flex-row gap-1 items-center'}>
                <Icon12Chevron className={'text-ui-primary'} />
                <span>{x}</span>
            </li>
        ))}
    </ul>
)

export default Ul