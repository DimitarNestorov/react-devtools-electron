import { session, Session } from 'electron';
import { join } from 'path';

interface ChromeExtensionManifest {
	name: string
	version: string
}

const extensionPath = join(__dirname, '..', 'extension')
const extensionManifest: ChromeExtensionManifest = require(`${extensionPath}/manifest.json`)

const majorElectronVersion = parseInt(process.versions.electron, 10)

export function addReactDevToolsExtension(targetSession?: Session): Promise<object> | void {
	if (majorElectronVersion >= 9) {
		targetSession = targetSession || session.defaultSession
		const extensions = targetSession.getAllExtensions()
		const installedExtension = extensions.filter(extension => extension.name === extensionManifest.name)[0]
		if (!installedExtension) {
			return targetSession.loadExtension(extensionPath, { allowFileAccess: true })
		} else {
			removeReactDevToolsExtension(targetSession, installedExtension.id)
			return Promise.resolve().then(() => targetSession!.loadExtension(extensionPath, { allowFileAccess: true }))
		}
	} else {
		console.error('Unsupported Electron version. Please upgrade to electron 9 or later.');
	}
}

export function removeReactDevToolsExtension(targetSession?: Session, id?: string) {
	if (majorElectronVersion >= 9) {
		targetSession = targetSession || session.defaultSession
		if (id) {
			targetSession.removeExtension(id)
		} else {
			const extensions = targetSession.getAllExtensions()
			const installedExtension = extensions.filter(extension => extension.name === extensionManifest.name)[0]
			targetSession.removeExtension(installedExtension.id)
		}
	}
}
