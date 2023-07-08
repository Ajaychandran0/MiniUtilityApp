import { Todo } from "../model"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import "./styles.css"

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (todoId: number) => {
        setTodos(todos.map((todo) => todo.id === todoId ? { ...todo, isDone: !todo.isDone, } : todo))
    }

    const handleDelete = (todoId: number) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const handleEdit = (e: React.FormEvent, todoId: number) => {
        e.preventDefault()
        setTodos(
            todos.map(todo => todo.id === todoId ? { ...todo, todo: editTodo } : todo)
        )
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input
                    ref={inputRef}
                    className="todos__single--text"
                    value={editTodo}
                    onChange={(e) => (setEditTodo(e.target.value))} />
            ) : (
                todo.isDone ? (
                    <s className="todos__single--text">{todo.todo}</s>
                ) : (
                    <span className="todos__single--text">{todo.todo}</span>

                )
            )}

            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }}><AiFillEdit /> </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}><AiFillDelete /> </span>
                <span className="icon" onClick={() => handleDone(todo.id)}><MdDone /> </span>
            </div>
        </form>
    )
}

export default SingleTodo
