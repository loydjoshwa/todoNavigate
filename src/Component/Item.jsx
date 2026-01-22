import React, { useContext, useState } from 'react'
import Mycontext from "./CreateContext.jsx"
import { Link } from 'react-router-dom'

const Item = () => {
  const [text,setText]=useState("")

  const [id,setId]=useState(1)

  const {setDlt,dlt,store,setStore} = useContext(Mycontext)
  
  

  const handleAdd = ()=>{
    if(text.trim()==="")return;
    setStore([...store,{id:id,text:text}])
    setId((p)=>p+1)
    setText("")

  }
  const handleDelete= (item)=>{
    setStore(store.filter((i)=>i.id!==item.id))
    setDlt([...dlt,item])

  } 
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {store.map((item)=>(
          <li key={item.id}>{item.text} <button onClick={()=>handleEdit(item)}>edit</button><button onClick={()=>handleDelete(item)}><Link to={"/delitem"}>Delete</Link></button></li>
         
        ))}
      </div>

      <Link to={"/delitem"}  >Go To Delete</Link>
      
    </div>
  )
}

export default Item
