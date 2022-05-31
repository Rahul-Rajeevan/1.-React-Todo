import React from 'react'
import styles from './Style.module.css'
const TodoItem = ({e,deleted}) => {
    return (
        <div className={styles.q1}>
        <div >{e.value}</div>
        <button onClick={()=>deleted(e.id)}>x</button>
        
    </div>
  )
}

export default TodoItem