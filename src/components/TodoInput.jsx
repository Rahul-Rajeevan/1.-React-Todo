import React from 'react'

const TodoInput = ({data,handle,valFn,setData,setPage,page,totalCount,setLimit}) => {
  return (
    <div>
        <input value={data} type="text" onChange={handle}/>
        <button onClick={()=>{
            valFn();
            setData("");
        }}>Add</button>
        <button disabled={page<=1} onClick={()=>setPage(page-1)}>{'<'}</button>
        <button disabled={totalCount<page*5} onClick={()=>setPage(page+1)}>{'>'}</button>
        <select onChange={(e)=>setLimit(Number(e.target.value))}>
          <option>No of items</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
    </div>
  )
}

export default TodoInput