# NSE-INDICES

Get NSE index data from NSE website

Get data of a particular index
```ts
import { getIndex } from 'nse-indices'

getIndex('NIFTY 50').then(console.log)

```

Get list of available indices
```ts
import { getIndexList } from 'nse-indices'

getIndexList().then(console.log)
```