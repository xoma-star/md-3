import React from 'react'
import {Icon24Spinner} from '@vkontakte/icons'

const Spinner = () => (
    <div className={'w-full h-full flex items-center justify-center'}>
        <Icon24Spinner className={'animate-spin'} />
    </div>
)

export default Spinner