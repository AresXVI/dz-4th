import React from 'react'
import { Button } from './Button'

const FormInput = ({ addArrFunc, register, handleSubmit, errors }) => {
    return (
    <form onSubmit={handleSubmit(addArrFunc)}>
        <label>
            <input
                type='text'
                className={errors.name && "error"}
                placeholder='name'
                {...register("name", {required: true})}
            />
            {errors.name && <small>Обязательное поле</small>}
        </label>
        <label>
            <input
                type='text'
                className={errors.username && "error"}
                placeholder='username'
                {...register("username", {required: true})}
            />
            {errors.username && <small>Обязательное поле</small>}
        </label>
        <label>
            <input
                type='text'
                className={errors.email && "error"}
                placeholder='email'
                {...register("email", {required: true})}
            />
            {errors.email && <small>Обязательное поле</small>}
        </label>
        <label>
            <input
                type='text'
                className={errors.phone && "error"}
                placeholder='phone'
                {...register("phone", {required: true})}
            />
            {errors.phone && <small>Обязательное поле</small>}
        </label>
        <label>
            <input
                type='text'
                placeholder='website'
                {...register('website')}
            />
        </label>
        <label>
            <Button title="создать"/>
        </label>
    </form>
    )
}

export default FormInput