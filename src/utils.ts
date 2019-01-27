
import { join } from 'path'

import { BrowserWindow } from 'electron'

const extensionPath = join(__dirname, '..', 'extension')

export function addReactDevToolsExtension() {
	BrowserWindow.addDevToolsExtension(extensionPath)
}

export function removeReactDevToolsExtension() {
	BrowserWindow.addDevToolsExtension(extensionPath)
}
