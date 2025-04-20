import { useForm } from 'react-hook-form';
import './App.css';
import { useState } from 'react';
import Table from './components/Table';
import FormInput from './components/FormInput';

function App() {

  const [arr, setArr] = useState([])

  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm()

  const addArrFunc = (values) => {
    const update = [...arr, values]; 
    setArr(update); 
    reset()
  }
  
  const clearTableFunc = () => setArr(reset(arr))
  const deleteFunc = (i) => setArr(arr => arr.filter((_, index) => index !== i))

  return (
    <div className="App">
      <FormInput 
        addArrFunc={addArrFunc}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      <Table 
        arr={arr} 
        clearTableFunc={clearTableFunc} 
        deleteFunc={deleteFunc}
      />
  </div>
  );
}

export default App;
