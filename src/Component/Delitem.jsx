import React, { useContext } from 'react'
import MyContext from './CreateContext'
import { Link } from 'react-router-dom'

const Delitem = () => {
  const {dlt,setDlt,setStore,store}=useContext(MyContext)

  const handleUndo = (item)=>{
    setDlt(dlt.filter((i)=>i.id!==item.id))
    setStore([...store,item])
  }
  return (
    <div>
      {dlt.map((item)=>(
        <li key={item.key}>{item.text} <button onClick={()=>handleUndo(item)}><Link to={"/"}>Undo</Link></button></li>
      ))}
      <>
      <Link to={"/"}>To Home</Link>
      </>
    </div>
  )
}

export default Delitem
