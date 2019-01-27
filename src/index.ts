import { app } from 'electron'

import { addReactDevToolsExtension } from './utils'

if (app.isReady()) {
	addReactDevToolsExtension()
} else {
	app.once('ready', addReactDevToolsExtension)
}
