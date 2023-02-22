import { Clipboard } from 'phosphor-react'
import { useState } from 'react'
import { Task } from './Task';
import styles from './TaskList.module.css'
import { TasksTypes } from '../App';

export interface TaskListProps {
  tasks?: TasksTypes[],
}

export function TaskList({ tasks = [] }: TaskListProps) {

  const isTaskListEmpty = tasks.length === 0;

  return (
    <div className={styles.mainContainer}>
      <section className={styles.tasksInfo}>
        <h2 className={styles.created}>Tarefas criadas <span className={styles.count}>0</span></h2>
        <h2 className={styles.done}>Concluídas <span className={styles.count}>0</span></h2>
      </section>
      {isTaskListEmpty ? <div className={styles.emptyList}>
        <Clipboard size={56}/>
        <p className={styles['emptyList__text--bold']}>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div> : tasks.map((task: TasksTypes) => (
         <Task key={task.id} content={task.content} />
      ) )}
    </div>
  )
}