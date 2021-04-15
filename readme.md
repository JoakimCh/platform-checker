# platform-checker

### Description
An [ES module](https://flaviocopes.com/es-modules) for checking which [computing platform](https://en.wikipedia.org/wiki/Computing_platform) the script is executed in. For now it can check if it's running in Node.js, Deno or the browser.

### Example

```js
import {platform, platformVersion} from 'platform-checker'

console.log(platform, platformVersion)
```
#### Example output:
| Platforn | Output |
| --- | --- |
| Browser | Browser Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 |
| Deno | Deno 1.8.3 |
| Node.js | Node.js v15.13.0 |

### How to use

#### Install using [NPM](https://www.npmjs.com/)

```shell
npm i platform-checker
```

#### Import the ES module into Node.js

```js
import {platform} from 'platform-checker'
```
Got problems using ES modules? [Click here](https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js/56350495#56350495) or [read this](https://nodejs.org/api/esm.html).

#### Import the ES module into the browser or Deno

```js
import {platform} from '/node_modules/platform-checker/source/platformChecker.js'
```

Cumbersome? Consider using [import maps](https://github.com/WICG/import-maps#readme) so you can import it just like in Node.js. Also see the [Deno specific documentation](https://deno.land/manual/linking_to_external_code/import_maps) for import maps if using Deno.

### Funding

If you find this useful then please consider helping me out (I'm jobless and sick). For more information visit my [GitHub sponsors page](https://github.com/sponsors/JoakimCh), my [profile](https://github.com/JoakimCh) or my [simple website](https://joakimch.github.io/funding.html).

### Source code
Here is the full source code just to demonstrate how this works:
```js
export const nodejs = (globalThis.Buffer && globalThis.process) ? process.version : undefined
export const deno = globalThis.Deno?.version?.deno
export const browser = globalThis.navigator?.userAgent

export const platform = (()=>{
  if (deno) return 'Deno'
  if (browser) return 'Browser'
  if (nodejs) return 'Node.js'
})()
export const platformVersion = deno || browser || nodejs
```

Have a happy day! ❤️