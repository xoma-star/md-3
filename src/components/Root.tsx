import React, {HTMLAttributes} from 'react'
import useDynamicHeight from '../lib/useDynamicHeight'

interface props extends HTMLAttributes<HTMLDivElement> {
    modal?: React.ReactNode | null,
    snackbar?: React.ReactNode | null,
    children: React.ReactNode
}

const Root = ({children, modal, snackbar}: props) => {
    const dynamicHeight = useDynamicHeight()

    return (
        <main
            className={'flex lg:flex-row max-lg:flex-col-reverse'}
            style={{height: dynamicHeight}}
        >
            {children}
            {modal}
            <div
                className={
                    'duration-100 bg-color-background rounded-xl fixed bottom-4 right-4 px-4 py-2 min-h-[18px] lg:w-96'
                }
                style={{
                    transform: snackbar ? 'translateY(0)' : 'translateY(100px)'
                }}
            >
                {snackbar}
            </div>
        </main>
    )
}

export default Root