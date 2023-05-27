import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src="/logo.svg" alt="Logo ToDo List" />
        </header>
    )
}