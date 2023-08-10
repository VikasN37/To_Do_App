import List from "./list";

function TaskList({list,deleteList,editTask})
{
     return(
       <>
     {
          list.map(auto=><List task={auto.task} id={auto.id} key={auto.id} deleteList={deleteList} editTask={editTask}>
           

          </List> 
          )
     }

       </>
     )

}

export default TaskList;