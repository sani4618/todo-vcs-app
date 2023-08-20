import React, { useState } from 'react'
import Header from './Header'

const AddSearchApp = () => {
    const[addToDo,setToDo]=useState(
        {
            id:"",
            NewToDo:"",
            update:"",
            userName:""
        }
    )
    const readToDo=(eventt)=>{
        setToDo({...addToDo,[eventt.target.name]:eventt.target.value})
    }
    const displaytodo=()=>
    {
        console.log(addToDo)
    }
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Todo Id</label>
                                <input type="text" name="id" value={addToDo.id} className="form-control" onChange={readToDo}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Enter your Todo</label>
                                <input type="text" name="NewToDo" value={addToDo.NewToDo} className="form-control" onChange={readToDo}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Update Todo Status</label>
                                <radio className="input form-control">false</radio>
                                <radio className="input form-control">true</radio>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" >
                                <label htmlFor="" className="form-label">User Name</label>
                                <input type="text" name="userName" value={addToDo.userName} className="form-control" onChange={readToDo}/>
                            </div>
                            <div className="row g-3 div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={displaytodo} className="btn btn-danger">Add New Todo</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSearchApp