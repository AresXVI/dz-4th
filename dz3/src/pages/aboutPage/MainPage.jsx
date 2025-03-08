import React from 'react'
import Description from '../../components/description/Description'
import style from './mainPage.module.css'
function MainPage() {
  return (
    <div className={style.MainPage}>
        <Description title="Title" description="description"/>
    </div>
  )
}

export default MainPage