import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import clipboardIcon from '../../assets/clipboard.svg';
import plusIcon from '../../assets/plus.svg';
import { Task } from '../Task/Task';

import styles from './styles.module.css';

interface ITask {
    id: string;
    content: string;
    status: boolean;
}

export function Content() {

    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTaskText, setNewTaskText] = useState('');
    const [taskComplete, setTaskComplete] = useState(0);

    function handleChangeTaskText(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value);
    }

    function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        const newTask : ITask = {
            id: uuid(),
            content: newTaskText,
            status: true,
        };

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function handleCompleteTask(id: string) {
        const updateStatusTasks = tasks.map(function(task) {
            if (task.id === id) {
                task.status = !task.status;
            };

            return task;
        });

        let count = 0;
        updateStatusTasks.map(function(task) {
            if (!task.status) {
                count += 1;
            }
        });

        setTasks(updateStatusTasks);
        setTaskComplete(count);
    }

    function handleDeleteTask(id: string) {
        const newTasks = tasks.filter(task => task.id != id);
        
        let count = 0;
        newTasks.map(function(task) {
            if (!task.status) {
                count += 1;
            }
        });

        setTasks(newTasks);
        setTaskComplete(count);
    }

    return (
        <section className={styles.container}>
            <form onSubmit={handleCreateTask}>
                <input 
                    placeholder='Adicione uma nova tarefa' 
                    value={newTaskText}
                    onChange={handleChangeTaskText}
                />

                <button>
                    Criar
                    <img src={plusIcon} alt="Plus icon" />
                </button>
            </form>

            <header>
                <span>
                    <strong> Tarefas criadas </strong>
                    <p> { tasks.length } </p>
                </span>

                <span>
                    <strong> Concluidas </strong>
                    <p> {taskComplete === 0 ? taskComplete : `${taskComplete} de ${tasks.length}`} </p>
                </span>
            </header>

            {tasks.length > 0 ?
                <div className={styles.list}>
                    {tasks.map(function(task) {
                        return <Task 
                                    key={task.id} 
                                    id={task.id} 
                                    content={task.content} 
                                    handleCheckedTask={handleCompleteTask}
                                    handleDeleteTask={handleDeleteTask}
                                />;
                    })}
                </div>
                :
                <div className={styles.message}>
                    <img src={clipboardIcon} alt="Clipboard Icon" />

                    <span>
                        <strong> Você ainda não tem tarefas cadastradas </strong>
                        <p> Crie tarefas e organize seus itens a fazer </p>
                    </span>

                </div>
            }

        </section>
    );
}