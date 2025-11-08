## Bitcoin Cash (BCH)

When working with the BCH blockchain, you should use the minimal-slp-wallet and bch-js JavaScript libraries. minimal-slp-wallet hash high-level abstracted functions for common workflows. bch-js has much more low-level functions. minimal-slp-wallet is built on top of bch-js, and bch-js is embedded inside the minimal-slp-wallet library.

- A README for minimal-slp-wallet: [minimal-slp-wallet-readme.md](./minimal-slp-wallet-readme.md)
- An API document for bch-js: [bch-js-api.md](./bch-js-api.md)

Here is an example of how to extract bch-js from minimal-slp-wallet, after it has been instantiated:

```javascript
import BchWallet from 'minimal-slp-wallet'

const bchWallet = new BchWallet()
const bchjs = bchWallet.bchjs
```

Code examples for common blockchain workflows are available in the `examples/` directory.
