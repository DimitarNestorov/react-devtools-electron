import { join } from 'path'

import { BrowserWindow } from 'electron'

export default function addReactDevToolsExtension() {
	BrowserWindow.addDevToolsExtension(join(__dirname, '..', 'extension'))
}
