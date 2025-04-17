"use client";

import React, {useState, useEffect} from "react";
import axios from 'axios';

const DataFetch = () => {
  const [dataUrl, setDataUrl ] = useState(null)
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random').then(({data}) => {
      setDataUrl(data.message)
    })

  }, [])
  return (
    <div>
      {dataUrl && <img src={dataUrl} /> }
    </div>
  )
};

export default DataFetch;
