import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';
import { TasksTypes } from '../App';


export function Task(task: TasksTypes) {
  const [status, setStatus] = useState(0);

  function handleChecked() {
    if (status === 0) {
      setStatus(1);
      task.onCheckedDone!(task, status)
      return;
    }
    if (status === 1) {
      setStatus(0);
      task.onCheckedDone!(task, status)
      return;
    }


  }

  return (
    <div className={styles.mainContainer}>
      <label className={styles.titleContainer} htmlFor="taskTitle">
        <p className={status === 1 ? styles.done : 'undone'}>{task.content}</p>
        <input onChange={handleChecked} type="checkbox" name="taskTitle" />
        <span className={styles.checkmark}>
          <Check style={{ display: status === 1 ? 'inline' : 'none' }} />
        </span>
      </label>
      <button onClick={() => task.onDeleteClick!(task.id)} className={styles.deleteBtn} type="button">
        <Trash size={24} />
      </button>
    </div>
  );
}
