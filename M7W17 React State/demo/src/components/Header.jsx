/* eslint-disable react/prop-types */
const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.items.map((item, i) => {
        console.log(item, i)
        return (
          <div key={i}>
            <div>
              <p >{item}</p>
            </div>
          </div>
          
        )
      })}
    </div>
  )
}

export default Header;