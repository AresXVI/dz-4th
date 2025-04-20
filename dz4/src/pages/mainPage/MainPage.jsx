import { useEffect, useState } from 'react'
import style from './MainPage.module.css'
function MainPage({name, lastname}) {
    const [state, setState] = useState({name, lastname})
    useEffect(() => {
        setState({name, lastname})
    }, [name, lastname])
    return <div className={style.MainPage}>
        <h1>Добро пожаловать {state. name} {state.lastname}, мы тебя ждали !</h1>
    </div>
}
export default MainPage;
