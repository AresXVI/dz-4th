import { use, useEffect, useState } from "react"
import style from'./ErrorPage.module.css'
function ErrorPage({name, lastname}) {
    const [state, setState] = useState({name, lastname})
    useEffect(() => {
        setState({name, lastname})
    }, [name, lastname])
    return <div className={style.ErrorPage}>
        <h1>Тебе сюда нельзя - {state.name} {state.lastname}</h1>
    </div>
}
export default ErrorPage;