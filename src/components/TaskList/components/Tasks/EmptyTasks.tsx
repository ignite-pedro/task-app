import styles from './styles.module.css'
import { ClipboardText } from 'phosphor-react'

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardText color="#808080" size={56} />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <p>Crie tarefas o organize seus itens a fazer</p>
    </div>
  )
}