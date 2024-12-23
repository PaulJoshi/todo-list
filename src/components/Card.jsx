
const Card = (props) => {
	return (
		<div className="card">
			<p>{props.task.text}</p>
			<button onClick={() => props.onDeleteTask(props.task.id)}>Complete</button>
		</div>
	)
}

export default Card