import { join } from 'path'

import { BrowserWindow, Session, session } from 'electron'

interface ChromeExtensionManifest {
	name: string
	version: string
}

const extensionPath = join(__dirname, '..', 'extension')
const extensionManifest: ChromeExtensionManifest = require(`${extensionPath}/manifest.json`)

export function addReactDevToolsExtension(targetSession?: Session): Promise<object> | void {
	if (parseInt(process.versions.electron, 10) >= 9) {
		targetSession = targetSession || session.defaultSession
		const extensions = targetSession.getAllExtensions()
		const installedExtension = extensions.filter(extension => extension.name === extensionManifest.name).length
		if (!installedExtension) {
			return targetSession.loadExtension(extensionPath)
		} else {
			targetSession.removeExtension(extensionPath)
			return Promise.resolve().then(() => targetSession!.loadExtension(extensionPath))
		}
	} else {
		const extensions = BrowserWindow.getDevToolsExtensions()
		const installedExtension = extensions[extensionManifest.name]
		if (!installedExtension) {
			BrowserWindow.addDevToolsExtension(extensionPath)
		} else if (installedExtension.version !== extensionManifest.version) {
			removeReactDevToolsExtension()
			BrowserWindow.addDevToolsExtension(extensionPath)
		}
	}
}

export function removeReactDevToolsExtension() {
	BrowserWindow.removeDevToolsExtension(extensionPath)
}
