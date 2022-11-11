import { FaRegTrashAlt } from 'react-icons/fa'

const styles = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: 'ml-2 cursor-pointer line-through',
    button: `cursor-pointer flex items-center`
}

export default function todo({todo, toggleComplete, deleteTodo}) {
  return (
    <li className={todo.completed ? styles.liComplete : styles.li}>
        <div className={styles.row}>
            <input 
              onChange={() => toggleComplete(todo)}
              className={styles.checkbox} 
              type="checkbox" 
              checked={todo.completed ? "checked" : ""}
            />
            <p 
              onClick={() => toggleComplete(todo)}
              className={todo.completed ? styles.textComplete : styles.text}
            >{todo.task}</p>
        </div>
        <button onClick={() => deleteTodo(todo)}>
          {<FaRegTrashAlt/>}
        </button>
    </li>
  )
}
