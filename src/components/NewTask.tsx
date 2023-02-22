import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface NewTaskProps {
  onSubmit: (taskText: string) => null
}

export function NewTask({ onSubmit }: NewTaskProps) {

  const [taskText, setTaskText] = useState<string>('')

  function handleTaskText(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity('')
    setTaskText(e.target.value)
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(taskText)
    setTaskText('')
  }

  function onInvalidTask(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity('Este campo é obrigatório!')

  }

  const isTaskTextEmpty = taskText.length === 0;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
        type="text"
        name="newTaskInput"
        value={taskText}
        onChange={handleTaskText}
        required
        onInvalid={onInvalidTask}
      />
      <button disabled={isTaskTextEmpty} className={styles.createTaskBtn} type="submit">
        Criar<PlusCircle />
      </button>
    </form>
  );
}
