import { useState } from "react"
import TaskList from "./TaskList"


const TaskForm = () => {

    const [hobby, setHobby] = useState([{firstname:'sd', lastname:'sd'},
                                        {firstname:'sd', lastname:'ds'}])
  
    const handleAddFields = () => {
       setHobby([...hobby, {firstname:'',lastname:''}])
    }

    const handleRemoveFields = (index) => {

      const values = [...hobby];
      values.splice(index, 1);
      setHobby(values);


    }


    // Delete Task

  // const deleteTask = (id) => {

  //   console.log('delete',id);
        
  //     setHobby(hobby.filter((item)=> item.id !== id))

  // }
  
    
  return (
    <>
     
   
<div className="container"> {/* container begin */}
 
 <div className="panel panel-default">

   {/* breadcrumb */}
   <div className="panel-heading">

     <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
           <li className="breadcrumb-item">Grupos</li>
           <li className="breadcrumb-item active" aria-current="page">Slots</li>
         </ol> 
     </nav>
   </div>

     {/* main-content  */}
   <div className="panel-body">
                
                {
                    hobby.map((item,index) => {

                        return (
                            <>
            <div className="row row-names">
              
                <hr/>
                <div className="col-md-5">
                    <label>#  Grupo</label>

                </div>
        
                <div className="col-md-7">
                    <label>Slot</label>
                </div>
           </div>

           <div className="row">
           <div className="col-md-5 form-control-div">
               {/* <button  onClick={() => deleteTask(item.id)}   className="btn btn-danger"><i className="fas fa-minus"></i></button> */}


            

      <button    onClick={() =>  handleRemoveFields(index)} className="btn btn-danger"><i className="fas fa-minus"></i></button>
               <input type="text" className="form-control" placeholder={item.name}/>
           </div>


           <div className="col-md-7">
             

                   <TaskList/>
                   
       
       
           </div>
        </div>
    
                      </>


                        )
                    })
                }

   </div>




   {/* footer */}
   <div className="panel-footer">
      {/* <button className="btn btn-primary btn-sm mt-5" onClick={() => 
    setHobby([...hobby,''])}><i className="fas fa-plus"></i>Add Group</button>
          */}
           <button className="btn btn-primary btn-sm mt-5" onClick={() => 
    handleAddFields()}><i className="fas fa-plus"></i>Add Group</button>
         
       
   </div>

 </div>
</div> {/* container end */}

    </>
  )

}

export default TaskForm
