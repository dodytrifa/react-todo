import {useState, useEffect} from 'react'
import './App.css';
import Input from './components/Input'
import Todo from './components/Todo'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filtered, setFiltered] = useState([])
  
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFiltered(todos.filter(todo => todo.completed === false))
        break
      default:
        setFiltered(todos)
        break
    }
  }

  useEffect(() =>{
    filterHandler()
  },[todos,status])

  return (
    <div className="App">
      <header>
        <h1>Tes</h1>
      </header>
      <Input 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <Todo 
      todos={todos}
      setTodos={setTodos}
      filtered={filtered}/>
    </div>
  );
}

export default App;
