import './list.css'
function List({ task, id,deleteList ,editTask }) {

     return (
          <div className="list-item">
               <div className='content'>
                    {task}
               </div>

               <div className='edit'>
                    <button className='edit-button' onClick={()=>editTask(id)} >Edit</button>

               </div>

               <div className='del'>
               <button className='del-button' onClick={()=>deleteList(id)} >Del</button>
               </div>
               <hr></hr>
          </div>
     )
}

export default List;