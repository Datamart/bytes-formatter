# Bytes Formatter [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Bytes%20formatter%20module%20from%20Glize%20library.&url=https://glize.js.org&via=GitHub&hashtags=Glize,JavaScript,ECMAScript,ES6)
[![Build Status](https://github.com/Datamart/bytes-formatter/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Datamart/bytes-formatter/actions/workflows/npm-publish.yml) [![License](https://img.shields.io/:license-apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![NPM version](https://img.shields.io/npm/v/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter) [![Website](https://img.shields.io/website-up-down-green-red/https/glize.js.org.svg?style=flat)](https://glize.js.org) [![NPM downloads](https://img.shields.io/npm/dm/bytes-formatter.svg?style=flat)](https://npmjs.org/package/bytes-formatter)

Bytes formatter module from Glize library.

## Usage

```bash
npm install bytes-formatter --save
```

```js
import { formatBytes } from 'bytes-formatter';

/**
 * Formats given <code>bytes</code> to human friendly format.
 * @param {number} bytes The bytes to be formatted.
 * @return {string} The formatted bytes as string.
 */
console.log(formatBytes(1024)); // 1.0 KB
```

For more information please visit [Glize project page](https://glize.js.org).
