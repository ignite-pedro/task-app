import React from "react";
import type { Task } from "./types";
import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/Tasks";

import styles from './styles.module.css'
import { generateId } from "../../helpers";

export function TaskList() {

  const [tasks, setTasks] = React.useState<Task[]>([])

  const handleCreateNewTask = (taskDescription: string): void => {
    const newTask = {
      id: generateId(),
      description: taskDescription,
      isCompleted: false
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  const handleDeleteTask = (taskId: string): void => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
  }

  const handleUpdateTask = (taskId: string): void => {
    setTasks((prevTasks) =>
      prevTasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          }
        }
        return task
      })
    )
  }

  return (
    <div className={styles.todoListContainer}>
      <TaskForm onCreateNewTask={handleCreateNewTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  )
}