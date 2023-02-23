import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
    
  const [toDoList, setToDoList] = useState([]);

    return (
      <div>
        <Form toDoList={toDoList} setToDoList={setToDoList}/>
        <Display toDoList={toDoList} setToDoList={setToDoList}/>
      </div>
    );
}

export default App;
