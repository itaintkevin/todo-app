import { useState, useEffect } from 'react'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from "firebase/firestore"; 
import { db } from './firebase-config'
import Todo from './components/todo'
import { AiOutlinePlus } from 'react-icons/ai'

const styles = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#141e30] to-[#243b55]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 mt-20`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form : `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-green-400 text-white`,
  count: `text-center p-2`
} 

function App() {

  const [todos, setTodos] = useState([ ]);
  const [input, setInput] = useState("");

  // Create Todo
  const createTodo = async (e) => {
    e.preventDefault(e) 
    if (input === "") {
      alert("Enter a Valid Todo");
      return
    }
    await addDoc(collection(db, 'todos'), {
      task: input,
      completed: false  
    })
    setInput("");
  }

  // Read from Firestore Database
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr);
    })
    return () => unsubscribe;
  }, []);

  // Update Firestore Database
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  // Delete Todo 
  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, 'todos', todo.id))
  }

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h3 className={styles.heading}>To-Do App</h3>
        <form onSubmit={createTodo} className={styles.form}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className={styles.input} 
            type="text" 
            placeholder="Add To-Do"
          />
          <button className={styles.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo 
              key={index} 
              todo={todo} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : <p className={styles.count}>{`You have ${todos.length} To-Do's`}</p>}
      </div>
    </div>
  );
}

export default App;
