import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import Inputs from '../inputs/Inputs';
import Table from '../table/Table';
import {Modal} from '../../components/Modal';
const URL = 'http://localhost:8000/Table-array'

const MainPage = () => {
    const [input, setInput] = useState('')
    const [arr, setArr] = useState([])
    const [addModal, setAddModal] = useState(false)
    const [delModal, setDelModal] = useState(false)

    const {
        register,    
        handleSubmit,
        formState: {errors},
        reset
    } = useForm()

    const addFunc = async (data, e) => {
        e.preventDefault()
        
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"    
            },
            body: JSON.stringify(data)
        })    
        if(response.status === 201) {
            getFunc(); 
            openAddModal()
        }
    }    

    const getFunc = async () => {
        const response = await fetch(URL);    
        const data = await response.json();
        setArr(data);
        reset(setInput)
    }

    const deleteFunc = async (id) => {
        const response = await fetch(URL + `/${id}`, {
            method: "DELETE",
        })    
        if(response.status === 200) {
            getFunc();
            openDelModal();
        }
    }

    useEffect(() => {
        getFunc()    
    }, [])
    const openAddModal = () => setAddModal(true);
    const closeAddModal = () => setAddModal(false);

    const openDelModal = () => setDelModal(true);
    const closeDelModal = () => setDelModal(false);

    const inpitsData = {
        register,
        handleSubmit,
        errors,
        setInput,
        addFunc
    }    

    const tableData = {
        arr,
        deleteFunc
    }    

    return (
        <div>
            <Inputs inputsData={inpitsData} />
            <Table tableData={tableData}/>
            {addModal === true
            ? <Modal onClick={closeAddModal} title='СОЗДАН'/>
            : ''}
            {delModal === true
            ? <Modal onClick={closeDelModal} title='УДАЛЕН'/>
            : ''}
        </div>
    )
}

export default MainPage
