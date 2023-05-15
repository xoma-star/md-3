import React, {useEffect, useState} from 'react'
import classNames from 'classnames'
import {PanelProps} from "./Panel";

interface props {
    children: React.ReactElement<PanelProps>[] | React.ReactElement<PanelProps>
    className?: string
    activePanel: string
}

const View = ({children, activePanel, className}: props) => {
    const [prevPanel, setPrevPanel] = useState<string>(activePanel)
    const [currentPanel, setCurrentPanel] = useState('')

    const classNamesByType = {
        in: 'animate-panelIn will-change-transform z-30 flex w-full h-full',
        out: 'animate-panelOut will-change-transform z-20 absolute top-0 left-0 flex w-full h-full invisible',
        hidden: 'invisible w-0 h-0'
    }

    useEffect(() => {
        setPrevPanel(currentPanel)
        setCurrentPanel(activePanel)
    }, [activePanel])

    const panels = (
        React.Children.toArray(children) as React.ReactElement<PanelProps>[]
    ).map(elem => (
        <div
            key={elem.props.id}
            className={classNames(
                elem.props.id === currentPanel && classNamesByType.in,
                elem.props.id === prevPanel && classNamesByType.out,
                elem.props.id !== currentPanel && elem.props.id !== prevPanel && classNamesByType.hidden
            )}
        >
            {elem}
        </div>
    ))

    return (
        <div className={classNames('flex w-full overflow-hidden h-full relative', className)}>
            {panels}
        </div>
    )
}

export default View