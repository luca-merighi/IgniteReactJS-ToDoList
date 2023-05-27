import {useState} from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import styles from './styles.module.css'

interface CreateTaskFormProps {
    handleCreateNewTask: (taskDescription: string) => void
}

export default function CreateTaskForm(props: CreateTaskFormProps) {
    const [taskDescription, setTaskDescription] = useState('')
    
    function handleCreateNewTask() {
        if(taskDescription === '') {
            return
        } else {
            props.handleCreateNewTask(taskDescription)
            setTaskDescription('')
        }
    }
    
    return (
        <section className={styles.createTaskForm}>
            <input 
                type="text"
                value={taskDescription}
                onChange={e => setTaskDescription(e.target.value)}
                placeholder="Adicione uma nova tarefa" />
            
            <button
                type="button"
                onClick={handleCreateNewTask}>
                Criar
                <PlusCircle size={24} />
            </button>
        </section>
    )
}