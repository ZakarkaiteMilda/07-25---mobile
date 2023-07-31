import style from './CloseIxon.module.css';
import { GrClose } from 'react-icons/gr';

export function CloseIcon() {
    return (
            <div>
                <GrClose className={style.close}  size='4rem' color='brown'/>
            </div>
    );
}