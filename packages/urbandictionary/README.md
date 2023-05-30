<h1 align="center">@zeyrbot/urbandictionary</h1>
<p>
  <a href="https://www.npmjs.com/package/@zeyrbot/urbandictionary" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@zeyrbot/urbandictionary.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/ruunao" target="_blank">
    <img alt="Twitter: ruunao" src="https://img.shields.io/twitter/follow/ruunao.svg?style=social" />
  </a>
</p>

> A wrapper made for urban dictionary api

### 🏠 [Homepage](https://github.com/zeyrbot/packages/tree/main/packages/urbandictionary)

### ✨ [NPM](https://www.npmjs.com/package/@zeyrbot/urbandictionary)

## Install

```sh
pnpm add @zeyrbot/urbandictionary
```

## Usage
```ts
import { Client as UDClient } from "@zeyrbot/urbandictionary"

const ud = new UDClient()

const woosh = ud.define("woosh")
/**
 {
  "list": [
    {
      "definition": "This, [along with] [the joke], had gone [over your head].",
      "permalink": "http://woosh.urbanup.com/6027307",
      "thumbs_up": 1033,
      "author": "Your real name (i rebel LOL)",
      "word": "woosh",
      "defid": 6027307,
      "current_vote": "",
      "written_on": "2011-08-18T18:14:19.000Z",
      "example": "You: It's [not funny] that's a serious issue!\n\n[Joker]: [WOOSH]!\n\nYou: *Looks up [woosh] on Urban Dictionary*",
      "thumbs_down": 116
    }
    ...
  ]
}
*/
```

## Author

👤 **@ruunao**

* Twitter: [@ruunao](https://twitter.com/ruunao)
* Github: [@ruunao](https://github.com/ruunao)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/zeyrbot/packages/issues). 

## Show your support

Give a ⭐️ if this project helped you!