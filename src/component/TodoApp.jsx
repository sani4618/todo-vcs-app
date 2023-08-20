import axios from 'axios'
import React, { useEffect, useState } from 'react'
const TodoApp = () => {
    const appLink="https://dummyjson.com/todos"
    const [todo, setTodo] = useState({"todos": [ ]})
    useEffect(
        ()=>{
            fetchData()
        }
    )
    const fetchData=()=>{
        axios.get(appLink).then(
            (response)=>{
                setTodo(response.data)
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">                      
                                {todo.todos.map(
                                    (value,index)=>{
                                        return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3  d-flex align-items-stretch">
                                             <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{value.id}</h5>
                                            <p class="card-text">{value.todo}</p>
                                            <p class="card-text">{value.completed}</p>
                                            <p class="card-text">{value.userId}</p>
                                            
                                        </div>
                                    </div> 
                                 </div>
                                    }
                                )}                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp