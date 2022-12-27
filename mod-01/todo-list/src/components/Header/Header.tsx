import logoSvg from '../../assets/logo.svg';

import styles from './styles.module.css';

export function Header() {
    return (
        <header className={styles.container}>
            <img src={logoSvg} alt="Todo list logo" />
        </header>
    );
}