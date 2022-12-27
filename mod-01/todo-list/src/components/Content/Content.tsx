import clipboardIcon from '../../assets/clipboard.svg';
import plusIcon from '../../assets/plus.svg';
import { Item } from '../Item/Item';

import styles from './styles.module.css';

export function Content() {
    return (
        <section className={styles.container}>
            <form>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button type="submit"> 
                    Criar 
                    <img src={plusIcon} alt="Plus icon" />
                </button>
            </form>

            <header>
                <span>
                    <strong> Tarefas criadas </strong>
                    <p> 0 </p>
                </span>

                <span>
                    <strong> Concluidas </strong>
                    <p> 0 </p>
                </span>
            </header>

            <div className={styles.list}>
                <Item />
            </div>


            {/* <div className={styles.message}>
                <img src={clipboardIcon} alt="Clipboard Icon" />

                <span>
                    <strong> Você ainda não tem tarefas cadastradas </strong>
                    <p> Crie tarefas e organize seus itens a fazer </p>
                </span>

            </div> */}

        </section>
    );
}