import { app } from 'electron'

import { addReactDevToolsExtension, removeReactDevToolsExtension } from './utils'

if (app.isReady()) {
	addReactDevToolsExtension()
} else {
	app.once('ready', addReactDevToolsExtension)
}

export { addReactDevToolsExtension, removeReactDevToolsExtension }
