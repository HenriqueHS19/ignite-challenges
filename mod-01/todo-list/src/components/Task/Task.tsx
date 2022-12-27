import { Trash } from 'phosphor-react';
import { useState } from 'react';

import checkIcon  from '../../assets/check.svg';

import styles from './styles.module.css';

interface ITask {
    id: string;
    content: string;
    handleCheckedTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export function Task({ id, content, handleCheckedTask, handleDeleteTask }: ITask) {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckItem() {
        setIsChecked(!isChecked);
        handleCheckedTask(id);
    }

    function handleDelete() {
        handleDeleteTask(id);
    }

    return (
        <div className={isChecked ? `${styles.container} ${styles.containerChecked}` : `${styles.container}`}>
            
            <div className={styles.radio} onClick={handleCheckItem}>
                {isChecked &&
                    <img src={checkIcon} alt="Check icon" />
                }
            </div>
            
            <p> {content} </p>
            
            <button onClick={handleDelete}>
                <Trash size='24px' />
            </button>
        </div>
    );
}