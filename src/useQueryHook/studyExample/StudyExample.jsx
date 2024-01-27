import React, { useState } from "react";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import './query.css'

const todos = [
    {
        id: 1,
        title: "Learn HTML",
        completed: false,
    },
    {
        id: 2,
        title: "Learn CSS",
        completed: false,
    },
    {
        id: 3,
        title: "Learn Javascript",
        completed: false,
    },
    {
        id: 4,
        title: "Learn React",
        completed: false,
    },
    {
        id: 5,
        title: "Learn Next.js",
        completed: false,
    },
];

async function fetchTodo(query = "") {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
    );
    return [...filteredTodos];
}

async function addTodo(todo) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(todo)
    const newTodo = {
        id: todo.length+1,
        title: todo.title,
        completed: false
    }

    todos.push(newTodo);

    return newTodo
}

const StudyExample = () => {
    const [title, setTitle] = useState('')

    const queryClient = useQueryClient()
    
    const { data: todos, isLoading } = useQuery({
        queryFn: () => fetchTodo(),
        queryKey: ["todos"],
    });

    const mutaion = useMutation({
        mutationFn: addTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]})
        }
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <b>React Query Study</b>
            <div>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <button onClick={async (e) => {
                    try {
                        mutaion.mutate({title})
                        setTitle('')
                    } catch (e) {
                        console.log(e)
                    }     
                }}
                >
                    Add todo
                </button>
            </div>
            <div className="learn-list">
                {todos.map((todo) => {
                    return <TodoCard key={todo.id} todo={todo} />;
                })}
            </div>
        </div>
    );
};

function TodoCard({ todo }) {
    const [checked, setChecked] = useState(todo.completed);

    return (
        <div>
            {todo.title}
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
        </div>
    );
}

export default StudyExample;
