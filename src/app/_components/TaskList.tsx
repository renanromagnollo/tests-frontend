"use client"

import { Task } from "@/domains"

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => onToggleTask(task.id)}
          >
            {task.title}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Deletar</button>
        </li>
      ))}
    </ul>
  )
}