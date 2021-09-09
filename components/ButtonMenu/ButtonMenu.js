import React from "react";

export const ButtonMenu = ({Icon, name, onOpenModal, className}) => {
    return (
        <div className={className} onClick={onOpenModal}>
            <Icon iconName='docs'/>
            <span>{name}</span>
        </div>
    )
}