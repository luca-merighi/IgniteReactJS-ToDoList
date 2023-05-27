import React, { useState, useEffect } from 'react'

import Header from '../components/Header'

import styles from './styles.module.css'
import CreateTaskForm from '../components/CreateTaskForm'
import TasksContainer from '../components/TasksContainer'

export interface Task {
  id: number,
  description: string,
  checked: boolean
}

export interface Tasks {
  tasks: Task[]
}

const tasksList = [
  {
    id: 1,
    description: 'Terminar o primeiro módulo da trilha de ReactJS',
    checked: true
  },
  {
    id: 2,
    description: 'Cozinhar',
    checked: false
  },
]

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksList)
  const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)
  
  function handleCreateNewTask(taskDescription: string) {
    const newTask: Task = {
      id: tasks.length === 0 ? 1 : tasks.length + 1,
      description: taskDescription,
      checked: false
    }
    
    setTasks([
      ...tasks,
      newTask
    ])
  }
  
  function handleChangeTaskCheckbox(id: number) {
    const newTasksList = tasks.map(task => task.id === id ? {
      ...task,
      checked: !task.checked
    } : task)
    
    tasks.map(task => {
      if(task.id === id) {
        task.checked === false 
        ? setNumberOfCompletedTasks(numberOfCompletedTasks + 1) 
        : setNumberOfCompletedTasks(numberOfCompletedTasks - 1)
      }
    })
    setTasks(newTasksList)
  }
  
  function handleDeleteTask(id: number) {
    const newTasksList = tasks.filter(task => task.id !== id)
    setTasks(newTasksList)
  }
  
  useEffect(() => {
      tasks.filter(task => {
          if(task.checked === true) {
              setNumberOfCompletedTasks(numberOfCompletedTasks + 1)
          }
      }) 
  }, [])
  
  return (
    <React.Fragment>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.content}>
          <CreateTaskForm 
            handleCreateNewTask={handleCreateNewTask} />
          
          <TasksContainer 
            tasks={tasks}
            handleChangeTaskCheckbox={handleChangeTaskCheckbox}
            handleDeleteTask={handleDeleteTask}
            numberOfCompletedTasks={numberOfCompletedTasks} />
        </div>
      </main>
    </React.Fragment>
  )
}