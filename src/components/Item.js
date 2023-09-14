
const Item = (props) => {

	const handleClick = () => {}

	return (
		<div>
			<p>Below is your item text</p>
			<p>{props.text}</p>

			<button onClick={handleClick}>
				Click here
			</button>
		</div>
	)
}

export default Item
