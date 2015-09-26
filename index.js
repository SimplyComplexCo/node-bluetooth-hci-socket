var os = require('os');

var platform = os.platform();

if (process.env.BLUETOOTH_HCI_SOCKET_FORCE_USB || platform === 'win32' || platform === 'linux') {
  module.exports = require('./lib/native');
} else {
  throw new Error('Unsupported platform');
}
