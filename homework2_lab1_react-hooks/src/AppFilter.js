import React, { useState } from "react";
import "./App.css";
import { AddTodo, Title, Todos} from "./features";

const initTasks = [
    { id: "todo-0", content: "Do Homework", done: false },
    { id: "todo-1", content: "Write a report", done: true },
    { id: "todo-2", content: "Hangout with friends", done: true },
    { id: "todo-3", content: "New Task", done: false },
];

export default function App() {
    const [tasks, setTasks] = useState(initTasks);
    const [filter, setFilter] = useState("all");

    const onFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const onDelete = (id) => {
        let updatedTasks = tasks.filter((e) => {
                return e.id !== id;
            });
        setTasks(updatedTasks);
    };

    const addTask = (e) => {
        console.log("Add task", e);
        let updatedTasks = [...tasks, {
            id:parseInt(Math.random()*100),
            content: e,
            done: false,
        }]
        setTasks(updatedTasks)
    }
    
    const toggleDone = (id) => {
        console.log("toggle", id)
        const updatedTasks = tasks.map((e) => {
            if (id === e.id) {
                return { ...e, done: !e.done };
            }
            return e;
        });
        setTasks(updatedTasks);
    }

    return (
        //version 1
            <div className="container">
                <Title />
                <AddTodo onAdd={addTask} />
                <span>
                    <label htmlFor="filter">Filter</label>
                    <select name="filter" onChange={onFilterChange} value={filter}>
                    <option value="all">...</option>
                    <option value="done">Done</option>
                    <option value="active">Not Done Yet</option>
                    </select>
                </span>
                <Todos
                    tasks={tasks}
                    onDelete={onDelete}
                    toggleDone={toggleDone}
                    filter={filter}
                />
        {/* version 2 */}
            <div className="container">
                <Title />
                <AddTodo onAdd={(e) => {
                        setTasks([...tasks, { id: parseInt(Math.random() * 100), content: e, done: false }]);}} />
                <span>
                    <label htmlFor="filter">Filter</label>
                    <select name="filter" onChange={(e) => setFilter(e.target.value)} value={filter}>
                        <option value="all">...</option>
                        <option value="done">Done</option>
                        <option value="active">Not Done Yet</option>
                    </select>
                </span>
                <Todos
                    tasks={tasks}
                    onDelete={(id) => {
                        setTasks(tasks.filter((e) => { return(e.id !== id); }))
                    }}
                    toggleDone={(id) => {
                        setTasks(tasks.map((e) => {
                            if (id === e.id) {
                                return { ...e, done: !e.done };
                            }
                            return e;
                        })
                    )}}
                    filter={filter}
                />
            </div> 
        </div>
    );
}
