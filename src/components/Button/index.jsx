import React from 'react';
import style from './button.module.scss'

const Button = (props) => {
    return (
        <button onClick={props.onClick}type={props.type} className={style.button}>
            {props.children}
        </button>
    )
}
export default Button