const manifest = require('./extension/manifest.json')
const packageInfo = require('./package.json')

if (manifest.version !== packageInfo.version) {
	throw new Error('manifest version doesn\'t match package version')
}
