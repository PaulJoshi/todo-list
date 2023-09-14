import { useState } from "react"
import Input from "./Input"
import Card from "./Card"

const initialTasks = [
	{
	  id: 0,
	  text: "This is my first task",
	},
	{
	  id: 1,
	  text: "This is second task",
	},
	{
	  id: 2,
	  text: "Learn React",
	}
  ]

const Tasks = () => {

	const [tasks, setTasks] = useState(initialTasks)

	const addTaskHandler = (enteredTask) => {
		setTasks(previousTasks => [
			...previousTasks,
			{
				id: Math.random(),
				text: enteredTask,
			}
		])
	}

	const deleteTaskHandler = (taskId) => {
		setTasks(previousTasks => previousTasks.filter(item => item.id !== taskId))
	}

	return (
		<div className="tasks">

			<Input onAddTask={addTaskHandler} />
			{
				tasks.map(item => (
					<Card key={item.id} task={item} onDeleteTask={deleteTaskHandler} />
				))
			}

		</div>
	)
}

export default Tasks
