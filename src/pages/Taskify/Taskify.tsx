import { useState } from 'react'
import './Taskify.css'
import InputField from '../../components/Taskify/InputField'
import { Todo } from '../../model'
import TodoList from '../../components/Taskify/TodoList'

// React.FC => React.FunctionalComponent
const Taskify: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Taskify
