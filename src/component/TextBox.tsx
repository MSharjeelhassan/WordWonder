


const TextBox = (props:any) => {
  return (
    <>
      <textarea onChange={props.changing} value={props.textValue} className={props.class} rows={5} name="" id=""></textarea>
    </>
  )
}

export default TextBox
