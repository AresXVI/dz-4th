import React from 'react'
import Button from './Button'
import { createPortal } from 'react-dom'

export const Modal = ({ data }) => {

    const {
        addModal,
        delModal, 
        closeModal
    } = data

    return createPortal(
        <div className='modal-overlay'>
            <div className='modal'>
                <p>ПОЛЬЗОВАТЕЛЬ УСПЕШНО 
                {addModal === true
                ? " СОЗДАН"
                : delModal === true
                    ? " УДАЛЕН"
                    : ""
                }</p>
                <Button 
                    className='close__button' 
                    onClick={closeModal}
                    title='ЗАКРЫТЬ'
                />
            </div>
        </div>,
        document.getElementById('App')
    )
}
