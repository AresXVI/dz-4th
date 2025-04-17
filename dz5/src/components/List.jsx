import React from 'react'
import { Button } from './Button'

export const List = ( {arr, title, func, inputValue} ) => {
    return (
        <ul>
            {arr.map((e, index) => 
                <h2 key={index}>
                    {e}
                    <Button 
                        className='renameButton'
                        title={title} 
                        func={() => func(index)}
                        disabled={inputValue.trim() === ''}
                    />
                </h2>
            )}
        </ul>
    )
}
