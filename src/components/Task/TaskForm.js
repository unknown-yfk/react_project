import { useState } from "react"
import Button from "../Button"
import ButtonSm from "../ButtonSm"


const TaskForm = () => {

    const [hobby, setHobby] = useState([''])
    const [hobby2, setHobby2] = useState([''])
    
  return (
    <>
     
   
<div class="container"> {/* container begin */}
 
 <div class="panel panel-default">

   {/* breadcrumb */}
   <div class="panel-heading">

     <nav aria-label="breadcrumb">
         <ol class="breadcrumb">
           <li class="breadcrumb-item">Grupos</li>
           <li class="breadcrumb-item active" aria-current="page">Slots</li>
         </ol> 
     </nav>
   </div>

     {/* main-content  */}
   <div class="panel-body">
                
                {
                    hobby.map((item) => {

                        return (
                            <>
            <div class="row">
              
                <hr/>
                <div class="col-md-5">
                    <label>#  Grupo</label>

                </div>
        
                <div class="col-md-7">
                    <label>Slot</label>
                </div>
           </div>

           <div class="row">
           <div class="col-md-5 form-control-div">
              <Button/>
               <input type="text" class="form-control" placeholder="group1"/>
           </div>
         


           <div class="col-md-7">
             
             {/* <hr/> */}

            {
                hobby2.map(() => {
                    return(

          <div class="input-group-sm form-control-div1">
             <input type="text" class="form-control" placeholder="g1_slot1"/>
            <ButtonSm/>
         </div>
                    )
                })
            }


             <hr/>
           <button class="btn btn-info btn-sm mt-5" onClick={() => setHobby2([...hobby2,''])}><i class="fas fa-plus"></i>Add Slot</button>
         
       
           </div>
        </div>
    
                            </>
                        )
                    })
                }



       


   </div>




   {/* footer */}
   <div class="panel-footer">
      <button class="btn btn-primary btn-sm mt-5" onClick={() => 
    setHobby([...hobby,''])}><i class="fas fa-plus"></i>Add Group</button>
         
       
   </div>

 </div>
</div> {/* container end */}

    </>
  )

}

export default TaskForm
