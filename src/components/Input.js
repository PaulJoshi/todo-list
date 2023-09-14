import { useEffect, useState } from "react"

const Input = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(false)

  const handleChange = (event) => {
    setEnteredTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isValid) {
      props.onAddTask(enteredTask)
      setEnteredTask("")
    } else {
      alert("Input is not valid")
    }
  }

  useEffect(() => {
    if (enteredTask.length === 0) {
      console.log("Not enough length")
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [enteredTask])

  return (
    <form id="add-task" onSubmit={handleSubmit}>
      <input placeholder="Enter Task" className="task-input" id="task" type="text" value={enteredTask} onChange={handleChange} />
      <button className="add-task-button" type="submit">Add Task</button>
    </form>
  )
}

export default Input
