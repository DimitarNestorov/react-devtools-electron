import { createElement } from 'react'
import { render } from 'react-dom'

render(
	<div>
		We are using Node.js {process.versions.node}, Chromium {process.versions.chrome}, and Electron {process.versions.electron}
	</div>,
	document.getElementById('root')
)
