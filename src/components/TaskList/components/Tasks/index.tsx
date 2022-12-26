import { Trash } from 'phosphor-react'
import React from 'react'
import { Task } from '../../types'
import { EmptyTasks } from './EmptyTasks'
import styles from './styles.module.css'

type TasksProps = {
  tasks: Task[]
  onDeleteTask: (taskId: string) => void
  onUpdateTask: (taskId: string) => void
}

export function Tasks({ tasks, onDeleteTask, onUpdateTask }: TasksProps) {

  const totalTasks = tasks.length
  const completedTasks = React.useMemo(() => tasks.filter(task => task.isCompleted).length, [tasks])

  return (
    <div className={styles.tasksContainer}>

      <header>
        <div className={styles.info}>
          <p className={styles.createdTasks}>Todas criadas</p>
          <span>{totalTasks}</span>
        </div>

        <div className={styles.info}>
          <p className={styles.completedTasks}>Concluídas</p>
          <span>{completedTasks} de {totalTasks}</span>
        </div>
      </header>

      {!totalTasks && <EmptyTasks />}


      {!!totalTasks &&
        <ul className={styles.tasks}>
          {tasks.map(task => (
            <li key={task.id} className={styles.task}>
              <div className={styles.taskContent}>
                <input
                  checked={task.isCompleted}
                  onChange={() => {
                    onUpdateTask(task.id)
                  }}
                  id={task.id}
                  type="checkbox" />
                <label htmlFor={task.id} className={task.isCompleted ? styles.taskCompleted : ''}>{task.description}</label>
              </div>

              <button
                className={styles.deleteTask}
                onClick={() => {
                  onDeleteTask(task.id)
                }}>
                <Trash color='#808080' size={18} />
              </button>
            </li>
          ))}
        </ul>}
    </div>
  )
}