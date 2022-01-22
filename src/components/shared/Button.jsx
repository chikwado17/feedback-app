import React from 'react'

export const Button = ({children, type, disabled, version}) => {
    return (
        <button type={type} disabled={disabled} className={`btn btn-${version}`} >
            {children}
        </button>
    )
}

export default Button;
