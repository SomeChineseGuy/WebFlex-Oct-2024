/* eslint-disable react/prop-types */
import './Cards.css'

const Cards = (props) => {

  const dogImage = "https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg"
  const catImage = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg"
  return (
    <div className={`cards-container `}>
      <img src={props.catImage ? catImage : dogImage} alt="" />
      <h1 className='cards-title'>{props.title}</h1>
      <h3 className='cards-content'>{props.content}</h3>
      <button className={`${props.buttonActive ? "active" : ""}`}>{props.buttonContent}</button>
    </div>
  )
}

export default Cards;