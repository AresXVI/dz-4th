import React from 'react'
import Description from '../../components/description/Description'
import style from './mainPage.module.css'
function MainPage() {
  const data = {title: 'Title', description: 'description'}
  return (
    <div className={style.mainPage}>
      <Description data={data}/>
    </div>
  )
}

export default MainPage
