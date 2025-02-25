// require myName from './components/Name.js'


import './App.css'
// import {MyName} from './components/Name.jsx';
// import Button from './components/Button.jsx';
import Cards from './components/Cards'

// Data will always be an array of objects
const data = [{
  title: "Card 1 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonContent: "Click me!",
  buttonActive: true,
  catImage: true
},
{
  title: "Card 2 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonContent: "Do Not Click me!",
  buttonActive: false,
  catImage: false
},
{
  title: "Card 3 ",
  content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus itaque perspiciatis quasi veniam, iste corporis libero quo numquam!",
  buttonContent: "Cool Button!",
  buttonActive: true,
  catImage: true
}]

const arrOfComponents = data.map((items, idx) => {
  return (<Cards key={idx} content={items.content} title={items.title} buttonContent={items.buttonContent} buttonActive={items.buttonActive} catImage={items.catImage} />)
})

function App() {
  return (
    <div>
      <h1>Changing something?</h1>
      {arrOfComponents}



      {/* <MyName myName="Steve" numbers={[1,2,3,4]}/> */}
      {/* {MyName({myName: 'Andy', numbers: [5,6,7,8]})} */}
      {/* {MyName({myName: "Steve"})}
      {MyName({myName: "Andy"})}
      {MyName({myName: "Sarah"})}
      {MyName({myName: "Jason"})}
      {MyName2({myName: "Jason"})} */}

      {/* {Button({buttonValue: 'Click Me'})}
      {Button({buttonValue: 'Maybe Click me?'})}
      {Button({buttonValue: 'Does not work'})} */}
    </div>
  )
}

export default App
// In react everything will react as html functions
// Those returned html functions are called "Components"