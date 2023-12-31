import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTasks from "./components/AddTask"
import { useState } from "react"

function App() {
  
   const [showAddTask, setShowAddTask]=useState(false);

   const toggleBtn = () => {
    setShowAddTask(!showAddTask);
   }

  const [tasks,setTasks]=useState(
    [{
        id:1,
        text:"Doctors Appointment",
        day:"Feb 5th at 2:30pm",
        reminder:true,
    },
    {
        id:2,
        text:"Meeting at school",
        day:"Feb 6th at 1:30pm",
        reminder:true, 
    },
    {
        id:3,
        text:"Food Shopping ",
        day:"Feb 5th at 2:30pm",
        reminder:false,
    }
    ]
)
  //  Add Task

  const  addTask=(newTask)=>{
     const id=Math.floor(Math.random() * 10000) + 1
    //  const newTask= {id,...tasks}
     setTasks([...tasks,newTask])
  }


  // delete Tasks
  const deleteTask=(id)=>{
      setTasks(tasks.filter((
        task)=>task.id !== id
        ))
  }
  // Toggle Reminder

  const toggleReminder=(id)=>{
      setTasks(tasks.maps((
        task)=> task.id ===id ? {
          ...task, reminder: !task.reminder}: task))
  }
   


  return (
    <div className="container">
      <Header onAdd={toggleBtn} />
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show !'}
    </div>
  )
}

export default App
