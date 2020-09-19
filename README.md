# airtap-manual

**[Browser provider](https://github.com/airtap/browser-provider) for manually opened browser. Prints a URL to open by hand.**

[![npm status](http://img.shields.io/npm/v/airtap-manual.svg)](https://www.npmjs.org/package/airtap-manual)
[![node](https://img.shields.io/node/v/airtap-manual.svg)](https://www.npmjs.org/package/airtap-manual)
[![Travis build status](https://img.shields.io/travis/com/airtap/manual.svg?label=travis)](http://travis-ci.com/airtap/manual)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

## Usage

### Programmatic

```js
const Manual = require('airtap-manual')
const provider = new Manual()

// Get a list of desired browsers (there's just 1 here)
const wanted = [{ name: 'manual' }]
const manifests = await provider.manifests(wanted)

// Instantiate a browser
const target = { url: 'http://localhost:3000' }
const browser = provider.browser(manifests[0], target)

await browser.open()
```

### With [Airtap](https://github.com/airtap/airtap)

```yaml
providers:
  - airtap-manual

browsers:
  - name: manual
```

## API

### `Manual()`

Constructor. Returns an instance of [`browser-provider`](https://github.com/airtap/browser-provider).

## Install

With [npm](https://npmjs.org) do:

```
npm install airtap-manual
```

## License

[MIT](LICENSE) © 2020-present Airtap contributors
