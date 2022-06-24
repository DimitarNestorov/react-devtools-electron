import { app, BrowserWindow } from 'electron';
import * as path from 'path';

import { addReactDevToolsExtension } from '../../library';

let mainWindow: Electron.BrowserWindow | null = null

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1280,
		height: 768,
		webPreferences: {
			nodeIntegration: true
		}
	})

	mainWindow.loadURL('file://' + path.join(__dirname, '../index.html'))

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
		app.quit()
	})
}

app.on('ready', () => {
	addReactDevToolsExtension()
	createWindow()
})
