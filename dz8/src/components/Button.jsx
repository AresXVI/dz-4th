import React from 'react'

function Button({title, className, onClick}) {
    
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button