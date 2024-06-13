import React from 'react'
import { useLocation } from 'react-router-dom'

const SubProduct = () => {
    const location=useLocation();
    console.log(location);
  return (
    <>sub</>
  )
}

export default SubProduct