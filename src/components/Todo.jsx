import React from 'react'
import { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from 'axios'
import { useEffect } from 'react'

const Todo = () => {
    const [data, setData] = useState("")
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)
    const [totalCount, setTotalCount] = useState(0)
    const [limit, setLimit] = useState(3)
const handle=(e)=>{
setData(e.target.value)
}

const deleted =async(id1)=>{
 await axios.delete(`http://localhost:8080/abc/${id1}`)
  let r1=await axios.get(`http://localhost:8080/abc?_page=${page}&_limit=${limit}`)
setList(r1.data)
}

const valueFn=async()=>{
await axios.post('http://localhost:8080/abc', {"value":data})
}

useEffect(()=>{
  const pageDisplay=async()=>{
  let r1=await axios.get(`http://localhost:8080/abc?_page=${page}&_limit=${limit}`)
setList(r1.data)
setTotalCount(Number(r1.headers["x-total-count"]))
}
pageDisplay();
},[page,limit])




  return (
    <div>
        <TodoInput data={data} handle={handle} valFn={valueFn} setData={setData} page={page} setPage={setPage} totalCount={totalCount} setLimit={setLimit}/>
        <TodoList list={list} deleted={deleted}/>
    </div>
  )
}

export default Todo