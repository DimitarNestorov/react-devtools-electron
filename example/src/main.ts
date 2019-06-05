import { join } from 'path'

import { app, BrowserWindow } from 'electron'

import('../../dist')


let mainWindow: Electron.BrowserWindow | null = null

function createWindow() {
	mainWindow = new BrowserWindow({
		height: 600,
		width: 800,
	})

	mainWindow.loadURL('file://' + join(__dirname, '../index.html'))

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)

if (process.platform !== 'darwin') {
	app.on('window-all-closed', () => {
		app.quit()
	})
}

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})
