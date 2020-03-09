import { join } from 'path'

import { BrowserWindow } from 'electron'

interface DevToolsExtensions {
	[ name: string ]: { name: string, version: string }
}

interface ChromeExtensionManifest {
	name: string
	version: string
}

const extensionPath = join(__dirname, '..', 'extension')
const extensionManifest: ChromeExtensionManifest = require(`${extensionPath}/manifest.json`)

export function addReactDevToolsExtension() {
	const extensions = BrowserWindow.getDevToolsExtensions() as DevToolsExtensions
	const installedExtension = extensions[extensionManifest.name]
	if (!installedExtension) {
		BrowserWindow.addDevToolsExtension(extensionPath)
	} else if (installedExtension.version !== extensionManifest.version) {
		removeReactDevToolsExtension()
		BrowserWindow.addDevToolsExtension(extensionPath)
	}
}

export function removeReactDevToolsExtension() {
	BrowserWindow.addDevToolsExtension(extensionPath)
}
