import { PlusCircle } from 'phosphor-react'
import React from 'react'
import styles from './styles.module.css'

type TaskFromProps = {
  onCreateNewTask: (taskDescription: string) => void
}

export function TaskForm({ onCreateNewTask }: TaskFromProps) {
  const [newTask, setNewTask] = React.useState('')

  return (
    <form
      className={styles.taskForm}
      onSubmit={(event) => {
        event.preventDefault()
        if (!newTask) {
          return
        }

        onCreateNewTask(newTask)
        setNewTask('')
      }}
    >
      <input
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value)
        }}
        placeholder="Adicione uma nova tarefa"
      />

      <button>
        <span>Criar</span>
        <PlusCircle size={16} color="#f2f2f2" />
      </button>
    </form>
  )
}
