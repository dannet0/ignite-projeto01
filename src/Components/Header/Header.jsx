import { PlusCircle } from "phosphor-react"
import { useState } from "react"

import logo from '../../assets/logo.svg'

import styles from './Header.module.css'


export function Header({ onAddTask }) {

  const [title, setTitle] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
   
    onAddTask(title)

    setTitle('')
  }

  function onChangeTitle(e){
    console.log(e.target.value)
    setTitle(e.target.value)
  }


  return (
    <div className={styles.header}>
       <img src={logo} alt="" />

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Add a Task'
        onChange={onChangeTitle}
        value={title}
        />
        <button disabled={!title}>Create
        <PlusCircle size={16} weight={"bold"}/>
        </button>
      </form>
    </div>
  )
}