import React from 'react'
import style from './description.module.css'
const Description = ( {data} ) => {
  return (
    <div>
      <h1 className={style.title}>{data.title}</h1>
      <p className={style.desc}>{data.description}</p>
    </div>
  )
}

export default Description