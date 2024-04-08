import React from "react"



const Button = (props) => {
    const sayLabel = () => {
        alert(`A label desse botão é ${props.label}`)
    }
    
    return <button onClick={sayLabel}>{props.label}</button>
    
}



export default Button