import React from 'react'

export const Button = ({className, title, func, disabled}) => {
    return (
        <button 
            className={className}
            onClick={func}
            disabled={disabled}
        >
            {title}
        </button>
    )
}