<h1 align="center">@zeyrbot/dlist</h1>
<p>
  <a href="https://www.npmjs.com/package/@zeyrbot/dlist" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@zeyrbot/dlist.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/ruunao" target="_blank">
    <img alt="Twitter: ruunao" src="https://img.shields.io/twitter/follow/ruunao.svg?style=social" />
  </a>
</p>

> A wrapper made for urban discordlist.gg api

> ⚠ This wrapper is not finished yet and the methods may be limited, whatever you still can use it :D

### 🏠 [Homepage](https://github.com/zeyrbot/packages/tree/main/packages/dlist)

### ✨ [NPM](https://www.npmjs.com/package/@zeyrbot/dlist)

## Install

```sh
pnpm add @zeyrbot/dlist
```

## Usage
```ts
import { Client as DlistClient } from "@zeyrbot/dlist"

const dlist = new DlistClient({
    token: "XXXXXXXXXXXXXXX",
    id: "XXXXXXXXXXXXXXXXXXX"
})

/**
 *  Replace the '1' with your actual guild count
 */
await dlist.postGuildCount(1) // true
```


## Author

👤 **@ruunao**

* Twitter: [@ruunao](https://twitter.com/ruunao)
* Github: [@ruunao](https://github.com/ruunao)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/zeyrbot/packages/issues). 

## Show your support

Give a ⭐️ if this project helped you!