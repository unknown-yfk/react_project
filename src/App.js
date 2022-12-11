import { useState } from 'react'
import Header from './components/Header'
import Tasks  from './components/Tasks';
import AddTask from './components/AddTask';

function Apps() {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks,setTasks] = useState([
         {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
     {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 6th at 2:30pm',
        reminder: false
    },
    ])

    // Add Task

    const addTask = (task) => {

      // console.log(task)

      const id = Math.floor(Math.random() * 10000) + 1
      
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])


    }

    // Delete Task
    const deleteTask = (id) => {


      // console.log('delete',id)
      setTasks(tasks.filter((task) => task.id !== id))

    }

    // Toggle Reminder
    const toggleReminder = (id) => {

      // console.log('hello',id)
      setTasks (
        tasks.map((task) => 
        task.id == id ? { ...task, reminder: !task.reminder} : task
        
        )
      )

    }

  // const name = "Fike"
  // const x = false
  return (
    <div className = "container">
    
        {/* <h1 >hello {name}</h1> */}
        {/* <h2>hello from {x ? 'yes' : 'no'}</h2> */}
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
        {showAddTask && <AddTask onAdd = {addTask}  />}
        {tasks.length > 0 ? (
          <Tasks tasks = {tasks} onDelete = {deleteTask} 
          onToggle = {toggleReminder}/>
        ) : ( 'No Tasks To Show' )}
    </div>
  );
}

export default Apps;
