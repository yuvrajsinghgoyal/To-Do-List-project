

import { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import ToDoContext from "./context/ToDoContext";

function App() {
  const [list,setList]  = useState([
    {id:1,  todoData:"todoData 1" ,finished:false},
    {id:2,  todoData:"todoData 2" , finished:true}
  
  ]);
  return (
    <ToDoContext.Provider value={{list,setList}}>
      <AddTodo updateList={(todo)=> setList([
        ...list,{id:list.length+1,  todoData:todo, finished:false }
        ])} />
      <TodoList  />
    </ToDoContext.Provider >
  )
}

export default App
