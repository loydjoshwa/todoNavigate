import React, { useContext } from 'react'
import MyContext from './CreateContext'
import { Link } from 'react-router-dom'

const Delitem = () => {
  const {dlt}=useContext(MyContext)
  return (
    <div>
      {dlt.map((item)=>(
        <li key={item.key}>{item.text}</li>
      ))}
      <>
      <Link to={"/"}>To Home</Link>
      </>
    </div>
  )
}

export default Delitem
