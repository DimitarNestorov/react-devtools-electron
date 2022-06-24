import { createElement, Fragment, useState } from 'react';

import { createRoot } from 'react-dom/client';

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

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(<App />)
