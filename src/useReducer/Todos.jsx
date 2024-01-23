import React, { useReducer, useState } from "react";

const ACTIONS = {
    ADD_TODO: "addTodo",
    TOGGLE_TODO: 'toggleTodo',
    REMOVE_TODO: 'removeTodo'
}

function reducer(todos, action) {
     switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.REMOVE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
     }
} 

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName('')
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </form>
        {todos.map(todo => 
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />    
        )}
    </>
    );
};

const Todo = ({todo, dispatch}) => {
    return (
        <div style={{display: "flex"}}>
            <span style={{color: todo.complete ? "green" : "black"}}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.REMOVE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}

export default Todos;
