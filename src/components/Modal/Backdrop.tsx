import React from 'react'
import classNames from 'classnames'

interface props {
    onClick(): void,
    show: boolean
}

const Backdrop = ({show, onClick}: props) => (
    <div
        title={'Закрыть'}
        aria-hidden
        onClick={onClick}
        className={classNames(
            'w-full bg-ui-background-contrast absolute h-full top-0 left-0 cursor-pointer max-lg:hidden duration-300',
            show && 'opacity-30',
            !show && 'opacity-0'
        )}
    />
)

export default Backdrop