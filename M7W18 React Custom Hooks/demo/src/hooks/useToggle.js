import {useState} from 'react';

const useToggle = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    // if(onAndOff) {
    //   setOnAndOff(false)
    // } else {
    //   setOnAndOff(true)
    // }

    // onAndOff ? setOnAndOff(false) : setOnAndOff(true)

    setToggle(!toggle)
  }

  return [toggle, handleToggle]

}



export default useToggle;