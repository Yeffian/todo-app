import React from 'react';
import { Task } from '../interfaces/Task';

interface TodoItemProps {
    task: Task;
    deleteTask(task: string): void;
}

export const TodoItem = ({ task, deleteTask }: TodoItemProps ) => {
    return (
        <div className="task">
             <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => deleteTask(task.taskName)}>
                 X
            </button>
        </div>
    );
};