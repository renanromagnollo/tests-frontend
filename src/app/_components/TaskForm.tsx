"use client"
import { useState } from 'react'

type TaskFormProps = {
  onAddTask: (title: string) => void
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (title.trim() !== "") {
      onAddTask(title)
      setTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Nova tarefa'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}