/* eslint-disable react/prop-types */
import './Name.css';

// module.exports = {myName}
export const MyName = (props) => {
  console.log(props)
  return (
    <div className="name-container">
      <h1>My name is {props.myName}</h1>
    </div>
  )
};

// module.exports = {myName2}
export const MyName2 = (props) => {
  return (
    <div className="name-container">
      <h1>Goodbye {props.myName}</h1>
    </div>
  )
};

// export default MyName;
// module.exports = myName
 


