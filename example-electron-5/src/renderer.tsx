import { createElement, useState, Fragment } from 'react'
import { render } from 'react-dom'

function Counter() {
	const [current, setCurrent] = useState(0)
	return <button onClick={() => setCurrent(current + 1)}>{current}</button>
}

function App() {
	return <Fragment>
		<div>
			We are using Node.js {process.versions.node}, Chromium {process.versions.chrome}, and Electron {process.versions.electron}
		</div>
		<Counter />
	</Fragment>
}

render(
	<App />,
	document.getElementById('root'),
)
