import React from 'react'
import "./styles.css"

export default function Botao(props) {
    return (
        <button className={props.Subtrair} onClick={props.onClick}>
            {props.children}
        </button>

    )
}