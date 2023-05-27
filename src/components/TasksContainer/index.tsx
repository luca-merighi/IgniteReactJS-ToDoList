import { Task } from '../../App/App'
import { ClipboardText } from '@phosphor-icons/react'

import TaskCard from '../TaskCard'

import styles from './styles.module.css'

interface Tasks {
    tasks: Task[],
    handleChangeTaskCheckbox: (id: number) => void,
    handleDeleteTask: (id: number) => void,
    numberOfCompletedTasks: number
}

export default function TasksContainer(props: Tasks) {
    return (
        <section className={styles.tasksContainer}>
            <header className={styles.tasksContainerHeader}>
                <div className={styles.createdTasks}>
                    <h2>
                        Tarefas criadas
                    </h2>
                    
                    <span className={styles.createdTasksAmount}>
                        {props.tasks.length}
                    </span>
                </div>
                
                <div className={styles.completedTasks}>
                    <h2>
                        Concluídas
                    </h2>
                    
                    <span className={styles.completedTasksAmount}>
                        {props.tasks.length === 0 
                            ? '0' 
                            : `${props.numberOfCompletedTasks} de ${props.tasks.length}`}
                    </span>
                </div>
            </header>
            
            {props.tasks.length === 0 ? (
                <div className={styles.emptyTasksContainer}>
                    <ClipboardText size={75}/>
                    
                    <h3>
                        Você ainda não tem tarefas cadastradas
                    </h3>
                    
                    <p>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                </div>
            ) : (
                <ul className={styles.tasksList}>
                    {props.tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            handleChangeTaskCheckbox={() => props.handleChangeTaskCheckbox(task.id)}
                            handleDeleteTask={() => props.handleDeleteTask(task.id)} />
                    ))}
                </ul>
            )}
        </section>
    )
}