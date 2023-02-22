import { Header } from './components/Header';
import { NewTask } from './components/NewTask';

import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <NewTask />
      </div>
    </div>
  )
}