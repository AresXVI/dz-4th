import React from 'react'
import Description from '../../components/description/Description'
import style from './aboutPage.module.css'
function AboutPage() {
  return (
    <div className={style.aboutPage}>
      <Description data={{title: 'Title 2', description: 'description 2'}}/>
    </div>
  )
}

export default AboutPage