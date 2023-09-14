import { Link } from "react-router-dom/dist"

const Header = () => {
	return (
		<header>
			<h1>My React App</h1>
			<h2>This is my first React App</h2>

			<nav className="navbar">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>

		</header>
	)
}

export default Header
