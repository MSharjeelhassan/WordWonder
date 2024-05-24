

export default function Button(props:any) {
  return (
    <>
      <button onClick={props.clicking} className={props.class}>{props.btnValue}</button>
    </>
  )
}

