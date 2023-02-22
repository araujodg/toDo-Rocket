import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface NewTaskProps {
  onSubmit: (taskText: string) => null
}

export function NewTask({ onSubmit }: NewTaskProps) {

  const [taskText, setTaskText] = useState<string>('')

  function handleTaskText(e: ChangeEvent<HTMLInputElement>) {
    setTaskText(e.target.value)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(taskText)
    setTaskText('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="newTaskInput"
        value={taskText}
        onChange={handleTaskText}
      />
      <button className={styles.createTaskBtn} type="submit">
        Criar<PlusCircle />
      </button>
    </form>
  );
}
