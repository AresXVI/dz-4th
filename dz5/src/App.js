import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { List } from './components/List';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [arr, setArr] = useState([]);

  const trackFunc = (e) => setInputValue(e.target.value);

  const addArrFunc = () => {
    inputValue.trim() === ''
    ?alert('Список пуст !')
    : setArr([...arr, inputValue]); setInputValue('');
  }

  const renameFunc = (index) => {
    const update = [...arr];
    update[index] = inputValue;
    setArr(update)
    setInputValue('')
  }

  return ( 
    <div className="App">
      <div className='container'>
        <Input 
          inputValue={inputValue} 
          func={trackFunc}
        />
        <Button 
          className='addButton'
          title={'Добавить'} 
          func={addArrFunc}
        />
      </div>
        <List 
          title={'Поменять'} 
          arr={arr} 
          inputValue={inputValue} 
          func={renameFunc}
        />
      </div>
  );
}

export default App;
