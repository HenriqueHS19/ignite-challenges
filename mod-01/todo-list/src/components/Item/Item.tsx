import { Trash } from 'phosphor-react';
import { useState } from 'react';

import checkIcon  from '../../assets/check.svg';

import styles from './styles.module.css';

export function Item() {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckItem() {
        setIsChecked(!isChecked);
    }

    return (
        <div className={isChecked ? `${styles.container} ${styles.containerChecked}` : `${styles.container}`}>
            
            <div className={styles.radio} onClick={handleCheckItem}>
                {isChecked &&
                    <img src={checkIcon} alt="Check icon" />
                }
            </div>
            
            <p> Qualquer coisa </p>
            
            <button>
                <Trash size='24px' />
            </button>
        </div>
    );
}