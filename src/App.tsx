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
  onCheckedDone?: (checkedTask: TasksTypes, status: number) => void
}

export default function App() {
  const [tasks, setTasks] = useState<TasksTypes[]>([])
  const [tasksDone, setTasksDone] = useState<TasksTypes[]>([])

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
    const doneWithoutRemoved = tasksDone.filter((task) => task.id !== id)
    setTasks(tasksWithoutRemoved)
    setTasksDone(doneWithoutRemoved)
  }

  function onCheckedDone(checkedTask: TasksTypes, status: number) {
    switch (status) {
      case 1:
        if (tasksDone.some((task) => task.id === checkedTask.id) === true) {
          const doneTasksWithoutUndone = tasksDone.filter(doneTask => doneTask.id !== checkedTask.id)
          setTasksDone([...doneTasksWithoutUndone])
        }
        break;
    
      default:
        if (tasksDone.some((task) => task.id === checkedTask.id) === false) {
          setTasksDone([...tasksDone, checkedTask])
        }
        break;
    }
  
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <NewTask onSubmit={handleCreateNewTask} />
        <TaskList createCount={tasks.length} doneCount={tasksDone.length} onCheckedDone={onCheckedDone} onDeleteClick={handleDeleteTask} tasks={tasks} />
      </div>
    </div>
  );
}
