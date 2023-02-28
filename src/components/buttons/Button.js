export default function Button(props) {
  const {disabled, children} = props;
  function handleClick(){
    console.log("Button Clicked");
  }

  function handleDisabledEvent(event){
    event.preventDefault();
  }

  return (
    <button
      
      aria-disabled={disabled}
      style={{backgroundColor: disabled ? "#ccc" : "green", cursor: disabled ? "not-allowed" : "default", border: 'none', width: 170, height: 55, borderRadius: 10, marginLeft: 60, marginTop: 20}}
      onClick={disabled ? handleDisabledEvent : handleClick}
    >
       <p style={{fontFamily: 'monospace', fontSize: 16, fontWeight: 'bold', color: 'white'}}> {children} </p>
    </button>
  )

}

