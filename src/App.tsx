import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css';
import { TaskList } from './components/TaskList';
import { ChangeEvent, useState } from 'react';

interface TasksTypes {
  content: string,
  id: string,
  isDone: boolean,
}

export default function App() {
  const [tasks, setTasks] = useState<TasksTypes[]>([])

  function handleCreateNewTask(taskText: string) {
    const newTask: TasksTypes = {
      content: taskText,
      id: uuidv4(),
      isDone: false,
    }

    setTasks([...tasks, newTask])

    return null
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <NewTask onSubmit={handleCreateNewTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
