import { useEffect, useState } from "react";
import './Addlist.css'
export default AddList;

const initialstate={
     task:'',
     id:''
}

function AddList({ addTask, editableItem, updatelist }) 
{
     const [newTask, setNewTask] = useState(initialstate);


     function handleChange(e)
      {

          setNewTask({ [e.target.name]: e.target.value });
     }

     function handleSubmit(e) 
     {
          e.preventDefault();
          if (editableItem) 
          {
               updatelist(newTask);
          }
          else 
          {
               addTask(newTask);
          }

         setNewTask(initialstate);
     }

     useEffect(() => {
          if (editableItem) {
               setNewTask(editableItem);
          }
     }, [editableItem]);

     return (
          <div className="AddSection">
               <input type='text' name='task' placeholder="Enter Task" onChange={handleChange} value= {newTask.task}></input>
               <button onClick={handleSubmit} className="add-button">{editableItem ? 'Edit Task' : 'Add Task'}</button>
          </div>
     )
}

