import React from "react";

export const ButtonMenu = ({Icon, className, name, onOpenModal}) => {
    return (
        <div className={className} onClick={onOpenModal}>
            <Icon iconName='docs'/>
            <span>{name}</span>
        </div>
    )
}