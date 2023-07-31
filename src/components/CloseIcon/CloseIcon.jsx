import style from './CloseIcon.module.css';
import { GrClose } from 'react-icons/gr';

export function CloseIcon() {
    return (
            <div className={style.container}>
                <GrClose className={style.close}  size='4rem' color='brown'/>
            </div>
    );
}