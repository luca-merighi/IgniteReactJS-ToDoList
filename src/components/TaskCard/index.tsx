import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Task } from '../../App/App'

interface TaskProps {
    task: Task,
    handleChangeTaskCheckbox: (id: number) => void,
    handleDeleteTask: (id: number) => void,
}

export default function TaskCard(props: TaskProps) {
    return (
        <li className={styles.taskCard}>
            <label className={styles.labelAsCheckbox}>
                <input 
                type="checkbox" 
                checked={props.task.checked}
                onChange={() => props.handleChangeTaskCheckbox(props.task.id)}
                className={styles.checkbox} />
                <span 
                className={styles.checkmark}
                tabIndex={0}
                onClick={() => props.handleChangeTaskCheckbox(props.task.id)} />
            </label>
            
            <p className={props.task.checked === true ? styles.checked : ''}>
                {props.task.description}
            </p>
            
            <button
                type="button"
                onClick={() => props.handleDeleteTask(props.task.id)}
                title="Deletar tarefa">
                <Trash size={24} />
            </button>
        </li>
    )
}