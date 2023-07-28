import { Link } from "react-router-dom"
import style from './Skip.module.css';

export function Skip() {
    return (
         <div className={style.skip}>
                 <Link className={style.skipLink} to="/register">Skip</Link>
        </div>
    );
}