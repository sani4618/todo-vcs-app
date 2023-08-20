import React, { useState } from 'react'

const Search = () => {
    const[SearchTodo,SetSearchTodo]=useState(
        {
          todoid:""
        }
      )
    
      const readTodo=(read)=>{
        SetSearchTodo({...SearchTodo,[read.target.name]:read.target.value})
      }
    
      const DisplayTodo=()=>{
        console.log(SearchTodo)
      }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">Todo Id</label>
                <input type="text" name="todoid" value={SearchTodo.todoid} className="form-control" onChange={readTodo} />

              </div>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={DisplayTodo} className="btn btn-success">Search</button>
              </div>


            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search