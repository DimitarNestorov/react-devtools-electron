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
		app.quit()
	})
}

app.on('ready', createWindow)
