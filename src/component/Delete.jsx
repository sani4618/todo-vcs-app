import React, { useState } from 'react'
import Header from './Header'

const Delete = () => {
    const[deleteTodo,SetDeleteTodo]=useState(
        {
            todoid:""
        }
    )
    
      const readTodo=(read)=>{
        SetDeleteTodo({...deleteTodo,[read.target.name]:read.target.value})
      }
    
      const DisplayTodo=()=>{
        console.log(deleteTodo)
      }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Todo Id</label>
                            <input type="text" name="todoid" value={deleteTodo.todoid} className="form-control" onChange={readTodo}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={DisplayTodo} className="btn btn-success">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete