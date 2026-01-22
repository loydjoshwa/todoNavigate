import React, { useState } from 'react'
import Item from './Component/Item'
import Delitem from './Component/Delitem'
import MyContext from './Component/CreateContext'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [dlt,setDlt]=useState([])
    const [store,setStore]=useState([]);


  return (
    <div>
      <MyContext.Provider value={{dlt,setDlt,store,setStore}}>
        <Routes>
        <Route path='/' element={<Item />} /> 
         <Route path='/delitem' element={<Delitem  />} /> 
         </Routes>
      </MyContext.Provider>
    
      
    </div>
  )
}

export default App
