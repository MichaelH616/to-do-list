import React from 'react'

const Display = ({toDoList, setToDoList}) => {

    const deleteHandler = (id) => {
        let updatedList = toDoList.filter((task) => task.id !== id)
        setToDoList(updatedList)
    }

    const boxHandler = (i) => {
      const isClicked = toDoList.map((task, idx) => {  
        if (idx === i) {
          task.clicked = !task.clicked
        }
        return task
      }
      )
      setToDoList(isClicked);
    }

    return (
      <div>
          <div className="col-4 offset-2 my-5">
            {
              toDoList.map((task, idx) => (
                <div className="container text-center" key={task.id}>
                    <label className={`form-check-label h4 mx-2 ${task.clicked? "text-decoration-line-through":""}`}>{idx + 1}. {task.content}</label>
                    <input type="checkbox" className="form-check-input" onChange={()=> boxHandler(idx)}/>
                    <button className="mx-2 btn btn-danger" onClick={() => deleteHandler(task.id)}>Delete Task</button>
                </div>
              )
            )
            }
          </div>
      </div>
    )
    
}

export default Display