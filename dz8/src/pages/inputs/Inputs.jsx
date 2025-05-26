import React from 'react';
import Button from '../../components/Button';

const Inputs = ({ inputsData }) => {
    const {
        register,
        handleSubmit,
        errors,
        addFunc,
        handlePhoneChange,
    } = inputsData;

    return (
        <form onSubmit={handleSubmit(addFunc)}>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    placeholder='NAME'
                    {...register("name", { required: true })}
                />
                {errors.name && <small>Обязательное поле</small>}
            </label>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    placeholder='EMAIL'
                    {...register("email", {
                        required: "Обязательное поле",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@(mail\.ru|inbox\.ru|bk\.ru|list\.ru|internet\.ru|xmail\.ru|yandex\.ru|gmail\.com|yandex\.com|hotmail\.com|outlook\.com)$/,
                            message: "Введите корректный email (например: example@gmail.com)"
                        }
                    })}
                />
                {errors.email && <small>{errors.email.message}</small>}
            </label>
            <label>
                <input
                    type='text'
                    className='inputs__styles'
                    placeholder='USERNAME'
                    {...register("username", { required: true })}
                />
                {errors.username && <small>Обязательное поле</small>}
            </label>
            <label>
                <input
                    type='tel'
                    className='inputs__styles'
                    onInput={handlePhoneChange}
                    placeholder='+996 (___) __-__-__'
                    {...register("ph_num", { 
                        required: "Обязательное поле",
                        pattern: {
                            value: /^\+996\s?\(?\d{3}\)?\s?\d{2}-\d{2}-\d{2}$/,
                            message: 'Введите номер телефона правильно: +996 (ХХХ) ХХ-ХХ-ХХ'
                        }
                    })}
                />
                {errors.ph_num && <small>{errors.ph_num.message}</small>}
            </label>
            <label>
                <Button
                    title="CREATE"
                    className="create__button"
                    type="submit"
                    
                />
            </label>
        </form>
    );
};

export default Inputs;