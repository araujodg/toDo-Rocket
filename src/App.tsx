import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import { TaskList } from './components/TaskList';
import { useState } from 'react';

export interface TasksTypes {
  content: string,
  id: string,
  onDeleteClick?: (id: string) => void
}

export default function App() {
  const [tasks, setTasks] = useState<TasksTypes[]>([])

  function handleCreateNewTask(taskText: string) {
    const newTask: TasksTypes = {
      content: taskText,
      id: uuidv4(),
    }

    setTasks([...tasks, newTask])

    return null
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutRemoved = tasks.filter((task) => task.id !== id)
    setTasks(tasksWithoutRemoved)
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <NewTask onSubmit={handleCreateNewTask} />
        <TaskList onDeleteClick={handleDeleteTask} tasks={tasks} />
      </div>
    </div>
  );
}
