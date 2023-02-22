import styles from './Header.module.css';
import rocketSvg from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <hgroup>
        <img src={rocketSvg} className={styles.rocket} alt="Launching rocket" />
        <h1 className={styles.title}>to<span>do</span></h1>
      </hgroup>
    </header>
  );
}
