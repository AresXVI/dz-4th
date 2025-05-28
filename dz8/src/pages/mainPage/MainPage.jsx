import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import Inputs from '../inputs/Inputs';
import Table from '../table/Table'; 
import { Modal } from '../../components/Modal';
import { getByTitle } from '@testing-library/dom';

const URL = 'https://6836e669664e72d28e429a5a.mockapi.io/Table-array';

const MainPage = () => {
    const [arr, setArr] = useState([]);
    const [addModal, setAddModal] = useState(false);
    const [delModal, setDelModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onBlur'
    });
    
    const formatPhoneNumber = (digits) => {
        digits = digits.slice(0, 12);

        let formatted = '+996';
        if(digits.length > 3) formatted += ` (${digits.slice(3, 6)}`;
        if(digits.length > 6) formatted += `) ${digits.slice(6, 8)}`;
        if(digits.length > 8) formatted += `-${digits.slice(8, 10)}`;
        if(digits.length > 10) formatted += `-${digits.slice(10, 12)}`;
        return formatted;
    };

    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const InputElement = e.target;
        const cursorPosition = InputElement.selectionStart;
        
        const digits = input.replace(/\D/g, '');
        let formatted = formatPhoneNumber(digits);

        setValue('ph_num', formatted);

        setTimeout(() => {
            const newCursorPosition = cursorPosition + (formatted.length - input.length);
            InputElement.selectionStart = InputElement.selectionEnd = newCursorPosition;
        }, 0);
    };

    const addFunc = async (data) => {
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.status === 201) {
                getFunc();
                openAddModal();
                reset();
            }
        } catch (error) {
            console.log(`Ошибка: ${error}`);
            alert('Не удалось выполнить запрос. Проверьте подключение к серверу.')
        } 
    };
    
    const getFunc = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setArr(data);
        } catch (error) {
            console.log(`Ошибка: ${error}`);
            alert('Не удалось выполнить запрос. Проверьте подключение к серверу.')
        }
    };
    
    const deleteFunc = async (id) => {
        try {
            const response = await fetch(URL + `/${id}`, {
                method: "DELETE",
            });
            
            if (response.status === 200) {
                getFunc();
                openDelModal();
            }
        } catch (error) {
            console.log(`Ошибка: ${error}`);
            alert('Не удалось выполнить запрос. Проверьте подключение к серверу.')
        }
    };
    
    useEffect(() => {
        getFunc();
    }, []);
    
    const openAddModal = () => setAddModal(true);
    const openDelModal = () => setDelModal(true);
    const closeModal = () => {
        setAddModal(false);
        setDelModal(false);
    };
    
    const inputsData = {
        register,
        handleSubmit,
        errors,
        addFunc,
        handlePhoneChange
    };

    const tableData = {
        arr,
        deleteFunc
    };

    const modalData = {
        addModal,
        delModal,
        closeModal
    };

    return (
        <div id='MainPage'>
            <Inputs inputsData={inputsData} />
            <Table tableData={tableData} />
            {addModal || delModal ? <Modal data={modalData} /> : null}
        </div>
    );
};

export default MainPage;