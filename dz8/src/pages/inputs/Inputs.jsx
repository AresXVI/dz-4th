import React from 'react'
import Button from '../../components/Button'

const Inputs = ({inputsData}) => {
    const {
        register,
        handleSubmit,
        errors,
        setInput,
        addFunc
    } = inputsData 

    return (
        <form onSubmit={handleSubmit(addFunc)}>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='NAME'
                    {...register("name", {required: true})}
                />
                {errors.name && <small>Обязательное поле</small>}
            </label>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='EMAIL'
                    {...register("email", {required: true})}
                />
                {errors.email && <small>Обязательное поле</small>}
            </label>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='USERNAME'
                    {...register("username", {required: true})}
                />
                {errors.username && <small>Обязательное поле</small>}
            </label>
            <label>
                <Button 
                    title="CREATE"
                    className="create__button"
                />
            </label>
        </form>
    )
}

export default Inputs