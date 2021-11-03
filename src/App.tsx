import React, { useState } from 'react';
import { Task } from './interfaces/Task';
import './App.css';
import { TodoItem } from './components/TodoItem';
// import { TodoItem } from './components/TodoItem';

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);

    // Reset the input forms
    setTask("");
    setDeadline(0);
  }

  const deleteTask = (task: string): void => {
    setTodoList(todoList.filter(t => t.taskName !== task));
  }

  return (
    <div className="App">
        <div className="header"> 
            <div className="input-container">
              <input
                type="text"
                placeholder="Task..."
                name="task"
                value={task}
                onChange={handleChange}
              />

              <input
                type="number"
                placeholder="Deadline (in Days)..."
                name="deadline"
                value={deadline}
                onChange={handleChange}
              />
            </div>
            
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todo-list"> 
            {todoList.map((t: Task, key: number) => {
              return <TodoItem key={key} task={t} deleteTask={deleteTask}/>;
            })}
        </div>
    </div>
  );
}

export default App;
