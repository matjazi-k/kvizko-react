import React from "react"
import './Container.css'

type ContainerType = 'row' | 'column'
type ContainerStyle = 'card' | 'outline'

type Props = React.PropsWithChildren<{
    className?: string
    type?: ContainerType
    style?: ContainerStyle
    colorClassName?: string | null
}>

export default function Container({ 
    children, 
    className = "",
    type = "row",
    style = "card",
    colorClassName = "surface-container"
}: Props) {
    return (
        <div className={`
            container
            flex-${type} 
            ${className}
            ${colorClassName}
            ${style}
        `}>
            {children}
        </div>
    )
}
