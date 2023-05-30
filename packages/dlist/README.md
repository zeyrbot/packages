# @zeyrbot/dlist
Zeyr's custom Discordlist.gg api wrapper, this wrapper DOES NOT include webhooks features, it just has the basic methods.

> Please note that this wrapper is work in progress and may not work as expected

# Usage
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
