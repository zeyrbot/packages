# @zeyrbot/urbandictionary
Zeyr's custom urbandictionary api wrapper with basic methods

> Please note that this wrapper is work in progress and may not work as expected

# Usage
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
