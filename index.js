var path = require('path');
var fs = require('fs');
var pkg = require(path.join(process.cwd(), 'package.json'));

var finger = null;
var config = null;
var configPath = path.join(process.cwd(), 'device.json');
if (pkg.finger && pkg.finger.driver) {
    finger = require(pkg.finger.driver);
} else if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath));
    if (config.finger && config.finger.driver) {
        finger = require(config.finger.driver);
    }
} else {
    configPath = path.join(process.cwd(), 'config.json');
	if (fs.existsSync(configPath)) {
		config = JSON.parse(fs.readFileSync(configPath));
		if (config.finger && config.finger.driver) {
			finger = require(config.finger.driver);
		}
	}
}

module.exports = finger;