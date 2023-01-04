import React, { useEffect, useState } from "react";
import './App.css';
import TaskForm from "./components/Task/TaskForm";


const App = () => {
  
  
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
{/* 
          <div class="row">

              <hr/>
                <div class="col-md-5">
                  <label>#  Grupo</label>

                </div>
      
                <div class="col-md-7">
                  <label>Slot</label>
                </div>
          </div>
              <hr/>


        <div class="row">
            <div class="col-md-5 form-control-div">
                <button class="btn btn-danger"><i class="fas fa-minus"></i></button>
                <input type="text" class="form-control" placeholder="group1"/>
            
            </div>
          


            <div class="col-md-7">
              
              
           <div class="input-group-sm form-control-div1">
              <input type="text" class="form-control" placeholder="g1_slot1"/>
               <button class="btn btn-danger btn-sm"><i class="fas fa-minus"></i></button>
          </div>

          


              <hr/>
            <button class="btn btn-info btn-sm mt-5"><i class="fas fa-plus"></i>Add Slot</button>
          
        
            </div>
        </div>


 */}
    
    </div>




    {/* footer */}
    <div class="panel-footer">
       <button class="btn btn-primary btn-sm mt-5"><i class="fas fa-plus"></i>Add Group</button>
          
        
    </div>

  </div>
</div> {/* container end */}

    </>
     
  )
}

export default App
