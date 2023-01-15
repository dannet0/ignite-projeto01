import { ListChecks } from 'phosphor-react'
import { Task } from '../Task/Task'

import styles from './Tasks.module.css'


export function Tasks ({ tasks, onComplete, onDelete }) {
    const tasksSize = tasks.length
    const completedTasks = tasks.filter(task => task.completed).length
    return (
        <section>
            <div className={styles.tasksInfo}>
                <div>
                    <p className={styles.blue}>Created Tasks</p>
                    <span>{tasksSize}</span>
                </div>
                <div>
                    <p className={styles.purple}>Completed Tasks</p>
                <span>{completedTasks} of {tasksSize}</span>
                </div>
            </div>
            {tasks.length === 0 ? 
            
            <div className={styles.noTasks}>

                <ListChecks size={100} color="#808080" />
                <span><p>You dont have any tasks created yet</p></span>
                <p>Create a new task and organize your todo's</p>
            </div>
            :
            tasks
            .sort(function(a,b){if(a.completed < b.completed){return -1}})
            .map(task =>(
                <Task
                key={task.id}
                task={task}
                onComplete={onComplete}
                onDelete={onDelete}
                />
            ))}

        </section>
    )
}