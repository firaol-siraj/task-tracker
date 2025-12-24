import { useState } from "react"
function TaskInput({addTask}){
    const [taskText, setTaskText] = useState("");
    const handleChange = (e) => {
        setTaskText(e.target.value)
    }
    const handleAdd = () =>{
        if(taskText.trim() === "") return
        addTask({
            id:Date.now(),
            text:taskText,
            completed:false
        })
        setTaskText("");
    }
    const handleKeyPress = (e) =>{
        if(e.key==="Enter"){
            handleAdd()
        }
    }
    return(
        <div class="task-input">
            <input 
                type="text"
                value={taskText} 
                placeholder="Enter task"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                 />
            <button onClick={handleAdd} class="task-btn">Add Task</button>
        </div>
    )
}
export default TaskInput