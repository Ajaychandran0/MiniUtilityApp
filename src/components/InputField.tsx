
import React, { SetStateAction, useRef } from "react";
import "./styles.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}
interface Event {
    target: { value: SetStateAction<string>; };
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const handleChange = (e: Event) => {
        setTodo(e.target.value);
    }
    console.log(todo)
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
                type="input"
                placeholder="Enter a task"
                className="input__box"
                value={todo}
                onChange={handleChange}
            ></input>
            <button className="input__submit" type="submit">Go</button>
        </form>
    )
}

export default InputField
