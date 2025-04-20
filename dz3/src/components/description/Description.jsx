import React from 'react'
import style from './description.module.css'
const Description = ( {data} ) => {
  return (
    <div>
      <h1 className={style.title}>{data.title}</h1>
      <h2 className={style.desc}>{data.description}</h2>
    </div>
  )
}

export default Description