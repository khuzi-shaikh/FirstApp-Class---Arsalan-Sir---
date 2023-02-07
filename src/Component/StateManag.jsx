import React,{useState} from 'react'

export const StateManag = () => {
    const [data,setData]=useState()
    const [data1,setData1]=useState()
  return (
    <div><br /><br /><br /><br /><br />
        <label htmlFor="">First Name : </label>
      <input type="text" onChange={(e)=>setData(e.target.value)}/>
      <h1>{data}</h1><br /><br /><br />
        <label htmlFor="">Last Name : </label>
      <input type="text" onChange={(e)=>setData1(e.target.value)}/>
      <h1>{data1}</h1>
    </div>
  )
}
