import React from 'react'

export const Input = ( {inputValue, func} ) => {
    return (
        <input 
            className='addInputValue' 
            type='text' 
            placeholder='Введите имя...'
            value={inputValue}
            onChange={func}
        />
    )
}