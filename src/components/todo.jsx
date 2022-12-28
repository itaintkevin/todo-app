import { FaRegTrashAlt } from 'react-icons/fa'

const styles = {
}

export default function todo({todo, toggleComplete, deleteTodo}) {
  return (
    <li className={todo.completed ? `flex justify-between bg-slate-400 p-4 my-2 capitalize` : 'flex justify-between rounded-md shadow-md bg-slate-200 p-4 mt-3 mb-2 capitalize'}>
        <div className="flex">
            <input 
              onChange={() => toggleComplete(todo)}
              className="" 
              type="checkbox" 
              checked={todo.completed ? "checked" : ""}
            />
            <p 
              onClick={() => toggleComplete(todo)}
              className={todo.completed ? 'ml-2 cursor-pointer line-through' : 'ml-2 cursor-pointer'}
            >{todo.task}</p>
        </div>
        <button onClick={() => deleteTodo(todo)}>
          {<FaRegTrashAlt/>}
        </button>
    </li>
  )
}
