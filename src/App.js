import { useState } from "react";
import AddList from "./components/Addlist";
import TaskList from "./components/Tasklist";
import './App.css'
import Theme from "./context/ThemeContext";


function App() 
{

     const[list,setList]=useState([]);
     const[editableItem , setEditableItem]=useState(null);

     function addTask(newTask)
     {
          setList([...list,{...newTask,id:list.length+1}]);
          
     }
     function deleteList(id)
     {
          console.log(id);
          setList(list.filter((auto)=>auto.id!==id));
     }

     function editTask(id)
     {
          setEditableItem(list.find((auto)=>auto.id===id));
     }


     function updatelist(newTask)
     {
          const index=list.findIndex(v=>v.id===editableItem.id);
          const newList=[...list];
          newList.splice(index,1,newTask);
          setList(newList);
          setEditableItem(null);
     }

     const [mode,setMode]=useState('light');
     function handleTheme()
     {
          if(mode==='light')
          {
               setMode('dark');
          }
          else
          {
               setMode('light');
          }
     }
return (

     <Theme.Provider value={mode}>
     <div className={`App ${mode}`}>
     <h1><u>TO DO APP</u></h1>
     <button className="theme-button" onClick={handleTheme}>Change Theme</button>
     <AddList addTask={addTask} editableItem={editableItem} updatelist={updatelist}></AddList>
     <TaskList list ={list} deleteList={deleteList} editTask={editTask}></TaskList>
     
     </div>
     </Theme.Provider>
)
     
   
}







export default App;