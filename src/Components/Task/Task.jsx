import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({ task, onComplete, onDelete }) {

    function handleComplete() {
        onComplete(task.id)
    }

    function handleDelete() {
        onDelete(task.id)
        
    }
    return (
        <div className={styles.task}>
            <input
            className={styles.checkbox}
            type="checkbox"
            checked ={task.completed}
            onChange={handleComplete}
            />
            <p className={task.completed ? styles.taskCompleted: ""}>{task.title}</p>
            <button
            onClick={handleDelete}>
            <Trash size={20}/>
            </button>
        </div>
    )
}