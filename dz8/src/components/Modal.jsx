import React from 'react'
import Button from './Button'

export const Modal = ({title, onClick}) => {
    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <p>ПОЛЬЗОВАТЕЛЬ УСПЕШНО {title}</p>
                <Button 
                    className='close__button' 
                    onClick={onClick}
                    title='ЗАКРЫТЬ'
                />
            </div>
        </div>
    )
}
