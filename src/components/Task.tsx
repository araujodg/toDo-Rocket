import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { useState } from 'react';
import { TasksTypes } from '../App';

export function Task({ content }: TasksTypes) {
  const [status, setStatus] = useState(0);

  function handleChecked() {
    if (status === 0) {
      setStatus(1);
      return;
    }
    if (status === 1) {
      setStatus(0);
      return;
    }
  }

  return (
    <div className={styles.mainContainer}>
      <label className={styles.titleContainer} htmlFor="taskTitle">
        <p className={status === 1 ? styles.done : 'undone'}>{content}</p>
        <input onChange={handleChecked} type="checkbox" name="taskTitle" />
        <span className={styles.checkmark}>
          <Check style={{ display: status === 1 ? 'inline' : 'none' }} />
        </span>
      </label>
      <button className={styles.deleteBtn} type="button">
        <Trash size={24} />
      </button>
    </div>
  );
}
