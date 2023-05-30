<h1 align="center">@zeyrbot/mdn</h1>
<p>
  <a href="https://www.npmjs.com/package/@zeyrbot/mdn" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@zeyrbot/mdn.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/ruunao" target="_blank">
    <img alt="Twitter: ruunao" src="https://img.shields.io/twitter/follow/ruunao.svg?style=social" />
  </a>
</p>

> A wrapper made for the MDN api

### 🏠 [Homepage](https://github.com/zeyrbot/packages/tree/main/packages/mdn)

### ✨ [NPM](https://www.npmjs.com/package/@zeyrbot/mdn)

## Install

```sh
pnpm add @zeyrbot/mdn
```

## Usage
```ts
import { Client as MDNClient } from "@zeyrbot/mdn"

const mdn = new MDNClient()

/**
 * Only get 2 entries
 */
const foo = mdn.search("bar", 2)
```

## Author

👤 **@ruunao**

* Twitter: [@ruunao](https://twitter.com/ruunao)
* Github: [@ruunao](https://github.com/ruunao)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/zeyrbot/packages/issues). 

## Show your support

Give a ⭐️ if this project helped you!