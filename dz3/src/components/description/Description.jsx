import style from './description.module.css'
function Description({title, description}) {
  return (
    <div className={style.description}>{title}, {description}</div>
  )
}

export default Description