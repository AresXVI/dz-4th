import React from 'react'
import Description from '../../components/description/Description'
import style from './aboutPage.module.css'
function AboutPage() {
  const data = {title: 'Title 2', description: 'description 2'}
  return (
    <div className={style.aboutPage}>
      <Description data={data}/>
    </div>
  )
}

export default AboutPage
