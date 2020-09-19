'use strict'

const Provider = require('browser-provider')
const Browser = require('abstract-browser')

class ManualProvider extends Provider.promises {
  async _manifests () {
    return [{
      name: 'manual',
      title: 'Manual browser'
    }]
  }

  _browser (manifest, target) {
    return new ManualBrowser(manifest, target)
  }
}

class ManualBrowser extends Browser.promises {
  async _open () {
    console.error('Open the following url in a browser:')
    console.error(this.target.url)
  }
}

module.exports = ManualProvider
