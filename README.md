# react-devtools-electron

[![npm version](https://img.shields.io/npm/v/react-devtools-electron.svg)](https://www.npmjs.com/package/react-devtools-electron)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

React Developer Tools for Electron

<p align="center"><img src="https://raw.githubusercontent.com/dimitarnestorov/react-devtools-electron/master/showcase.png" alt="Showcase" width="80%"></p>

## Installation

```sh
npm install --save-dev react-devtools-electron
```

## Usage

Inside the main process add the following line:

```javascript
const reactDevToolsElectron = require('react-devtools-electron');

app.on('ready', () => {
	if (isDev) {
		reactDevToolsElectron.addReactDevToolsExtension();
	}
	createWindow();
});
```

Or if you're using TypeScript:

```typescript
import { addReactDevToolsExtension } from 'react-devtools-electron';

app.on('ready', () => {
	if (isDev) {
		addReactDevToolsExtension();
	}
	createWindow();
});
```

`isDev` represents a boolean which is true when your app is running in development mode. If you haven't defined one yourself you can use [`electron-is-dev`](https://www.npmjs.com/package/electron-is-dev).
