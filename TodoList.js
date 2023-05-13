import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
 
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return

        }

        const newTodos = [todo, ...todos] 

        setTodos(newTodos)

        console.log(...todos)
    }

    const removeTodo = SelectedId =>{
        const removeArr = [...todos].filter(todo => todo.id !== SelectedId)

        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

        const completeTodo = Selectedid => {
            let updatedTodos = todos.map(todo=>{
                console.log('This is complete TODO')
                console.log(todo.isComplete)
               
                if(todo.id === Selectedid){
                    todo.isComplete = !todo.isComplete
                }
                console.log(todo.isComplete)
                return todo
            })
            setTodos(updatedTodos)
        
    }


    return (
    <div>
        <h1>What is the plan for Today?</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList