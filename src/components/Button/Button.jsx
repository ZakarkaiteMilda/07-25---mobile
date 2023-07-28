import style from './Button.module.css';

export function Button({ text }) {
    return (
            <div>
                <button className={style.btn}>{text}</button>
            </div>
    );
}