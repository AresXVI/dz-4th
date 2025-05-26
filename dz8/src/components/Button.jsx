import React from 'react'

function Button({title, className, onClick, type, onKeyDown}) {
    
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            onKeyDown={onKeyDown}
            
        >
            {title}
        </button>
    )
}

export default Button