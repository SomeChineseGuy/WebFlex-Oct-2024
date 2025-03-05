import useToggle from "../hooks/useToggle";

const OnOff = () => {

  const [onAndOff, handleToggle] = useToggle();
  const [onAndOff2, handleToggle2] = useToggle();
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={() => handleToggle2()}>Toggle</button>
      {onAndOff && <h1>☀️</h1>}
      {!onAndOff && <h1>🌕</h1>}
      {onAndOff2 && <h1>☀️</h1>}
      {!onAndOff2 && <h1>🌕</h1>}
    </div>
  )
}


export default OnOff;