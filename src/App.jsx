import { useState } from 'react'
import { Header } from './Components/Header/Header'
import { Tasks } from './Components/Tasks/Tasks'

import styles from './App.module.css'

function App() {

  const [tasks, setTasks] = useState([])

  function addTask(taskTitle) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: taskTitle,
        completed: false
      }
    ])
  }

  function completeTaskbyID(taskID) {
    const newTasks = tasks.map(task =>{
      if(task.id === taskID) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })
    setTasks(newTasks)
  }

  function deleteTaskbyID(taskID) {
    const tasksNotDeleted = tasks.filter(task => task.id !== taskID)
    setTasks(tasksNotDeleted)
  }

  return (
    <div className={styles.App}>
      <Header onAddTask={addTask} />
      <Tasks
      tasks = {tasks}
      onComplete = {completeTaskbyID}
      onDelete = {deleteTaskbyID}
      />
    </div>
  )
}

export default App
