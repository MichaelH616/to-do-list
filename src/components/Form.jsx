import React, { useState } from 'react'

const Form = ({toDoList, setToDoList}) => {
    
    const [task, setTask] = useState ({
        content : "",
        clicked: false
    })

    const changeHandler = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let id = crypto.randomUUID();
        let newTask = {...task, id:id}
        setToDoList([...toDoList, newTask]);
        setTask({content:""});
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <form action="" className="form col-4 offset-2" onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Task:</label>
                            <input type="text" name="content" className="form-control" onChange={changeHandler} value={task.content}></input>
                            <button>Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form