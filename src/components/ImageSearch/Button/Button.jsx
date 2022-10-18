import css from "./Button.module.css"

export default function Button( {onClick}) {
  return (
      <button className={css.btn} onClick={onClick}>Loade nore </button>
  )
}

