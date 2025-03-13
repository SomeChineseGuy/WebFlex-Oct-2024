import { useState } from 'react'
import './App.css'
import ClassBased from './components/ClassBased'
import Effect from './components/Effect'
import LifeCycle from './components/LifeCycle'

function App() {
  const [render, setRender ] = useState(false)
  return (
    <>
      <h1>REACT TIME!</h1>
      <button onClick={() => setRender(!render)}>Render</button>
      {/* <ClassBased title="Awesome title!" num={100} /> */}
      {/* <Effect /> */}
      {render && <LifeCycle />}
    </>
  )
}

export default App
