"use client"

import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { Task } from "@/domains";
import TaskForm from "./_components/TaskForm";
import TaskList from "./_components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask(title: string) {
    const newTask: Task = { id: uuidv4(), title, completed: false }
    setTasks((prev: Task[]) => [...prev, newTask])
  }

  function toogleTask(id: string) {
    setTasks((prev: Task[]) =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id: string) {
    setTasks((prev: Task[]) => prev.filter(task => task.id !== id))
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Taskify</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onToggleTask={toogleTask} onDeleteTask={deleteTask} />
      </main>
    </div>
  );
}
