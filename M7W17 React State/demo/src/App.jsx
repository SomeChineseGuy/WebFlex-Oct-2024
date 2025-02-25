import './App.css';
// import Header from './components/Header'
import Counter from './components/Counter';
import PrintName from './components/PrintName';
import List from './components/List';
import { useState } from 'react';


function App() {

  // const item = ["Bread", "Cheese", "Ham"]

  const [counter, setCounter] = useState(0)


  return (
    <div>
      <h1>Welcome everyone to React!</h1>
      {/* <Header title="The super cool Header component!" arr={[1,2,3,4,5]} num=
      {200} obj={{key: "pair"}} items={item} /> */}
      <Counter counter={counter} setCounter={setCounter} />

      <Counter counter={counter} setCounter={setCounter}/>
      {/* <Counter /> */}
      {/* <PrintName /> */}
      {/* <List /> */}
      

    </div>
  )
}

export default App


// app();
// counter();
// we are NOT calling the function again counter()
// Data in react can only be past DOWN to another component but not UP or not sideways