import { Link } from 'react-router-dom';
import style from './Main.module.css';
// import {RxDot, RxDotFilled} from 'react-icons/rx';

export function Main() {
    return (
            <main className={style.main}>
                <h3>Lorem ipsim</h3>
                <p>Lorem ipsum amet</p>
                <div>
                        {/* <RxDotFilled className={style.iconlink}/>  
                        <RxDot className={style.iconlink}/>  
                        <RxDot className={style.iconlink}/>   */}
                </div>
                <button>
                    <Link to='/'>Home</Link>
                </button>
            </main>
    );
}