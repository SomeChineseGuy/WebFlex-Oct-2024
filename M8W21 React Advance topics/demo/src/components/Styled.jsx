import React, { useEffect, useState } from "react";
import {styled} from 'styled-components';
const Styled = () => {
  const [position, setPosition ] = useState({
    x:0,
    y:0
  });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      setPosition({
        x: event.x,
        y: event.y
      })
    })
  },[])

  const PTag = styled.p`
    color: rgb(0, ${position.x / 4}, ${position.y / 4});
    background: rgb(${position.x / 4}, ${position.y / 4}, 0);
    border: 10px dotted rgb(${position.x / 4},0, ${position.y / 4});
    font-size: ${position.y / 5}px ;
    font-weight: bold
  `

  const message = position.y < 550 ? "And Dr. Dre Said" : "Nothing you idiots! He's Die and locked in my basement!"

  const HeadingTag = styled.h4`
    color: aqua;
    background-color: black;

  `
  return (
    <div>
      <PTag > {message} </PTag>
  
    </div>
  )
};

export default Styled;
