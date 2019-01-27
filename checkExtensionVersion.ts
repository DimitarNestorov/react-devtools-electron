const manifest = require('./extension/manifest.json')
const package = require('./package.json')

if (manifest.version !== package.version) {
	throw new Error('manifest version doesn\'t match package version')
}
