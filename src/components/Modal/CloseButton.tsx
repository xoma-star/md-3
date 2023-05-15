import React from 'react'
import IconButton from '../IconButton'
import {Icon28CancelOutline} from '@vkontakte/icons'

interface props extends React.HTMLAttributes<HTMLDivElement> {
    onClick(e: React.MouseEvent): void
}

const CloseButton = ({onClick}: props) => (
    <div className={'float-right relative z-50'}>
        <IconButton
            onClick={onClick}
            mode={'text'}
            title={'Закрыть'}
        >
            <Icon28CancelOutline />
        </IconButton>
    </div>
)

export default CloseButton