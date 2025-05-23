import React from 'react'

export const Button = ({ title, onClick, className }) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
