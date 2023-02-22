import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <form className={styles.form}>
      <input
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="newTaskInput"
      />
      <button className={styles.createTaskBtn} type="submit">
        Criar<PlusCircle />
      </button>
    </form>
  );
}
