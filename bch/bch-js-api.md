# bch-js

Source: [about:blank](about:blank)

## Address

## Address | detectAddressFormat()

Detect address format.

```
bchjs.Address.detectAddressFormat()
```

*   [Example usage:](#examples-Address-detectAddressFormat-0_0_0-0)

```
 // cashaddr
bchjs.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// cashaddr w/ no prefix
bchjs.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// legacy
bchjs.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// legacy

// cashaddr testnet
bchjs.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// legacy testnet
bchjs.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// legacy
```

## Address | detectAddressNetwork()

Detect address network.

```
bchjs.Address.detectAddressNetwork()
```

*   [Example usage:](#examples-Address-detectAddressNetwork-0_0_0-0)

```
 // cashaddr
bchjs.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// cashaddr w/ no prefix
bchjs.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// legacy
bchjs.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// mainnet

// cashaddr testnet
bchjs.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// legacy testnet
bchjs.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// testnet
```

## Address | detectAddressType()

Detect address type.

```
bchjs.Address.detectAddressType()
```

*   [Example usage:](#examples-Address-detectAddressType-0_0_0-0)

```
 // cashaddr
bchjs.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// cashaddr w/ no prefix
bchjs.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// legacy
bchjs.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
// p2pkh

// cashaddr testnet
bchjs.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// cashaddr testnet w/ no prefix
bchjs.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// legacy testnet
bchjs.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
// p2pkh
```

## Address | ecashtoCashAddress()

Convert legacy to cashAddress format

```
bchjs.Address.ecashtoCashAddress()
```

*   [Example usage:](#examples-Address-ecashtoCashAddress-0_0_0-0)

```
// mainnet
bchjs.Address.ecashtoCashAddress('ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da')
// bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2

// mainnet no prefix
bchjs.Address.ecashtoCashAddress('ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2
```

## Address | fromOutputScript()

Detect an addess from an OutputScript..

```
bchjs.Address.fromOutputScript()
```

*   [Example usage:](#examples-Address-fromOutputScript-0_0_0-0)

```
const scriptBuffer = bchjs.Script.encode([
  Buffer.from("BOX", "ascii"),
  bchjs.Script.opcodes.OP_CAT,
  Buffer.from("BITBOX", "ascii"),
  bchjs.Script.opcodes.OP_EQUAL
]);
const p2sh_hash160 = bchjs.Crypto.hash160(scriptBuffer);
const scriptPubKey = bchjs.Script.scriptHash.output.encode(p2sh_hash160);

// mainnet address from output script
bchjs.Address.fromOutputScript(scriptPubKey);
// bitcoincash:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqncnufkrl

// testnet address from output script
bchjs.Address.fromOutputScript(scriptPubKey, 'testnet');
// bchtest:pz0qcslrqn7hr44hsszwl4lw5r6udkg6zqh2hmtpyr
```

## Address | fromXPub()

Generates an address for an extended public key (xpub).

```
bchjs.Address.fromXPub()
```

*   [Example usage:](#examples-Address-fromXPub-0_0_0-0)

```
 // generate 5 mainnet external change addresses for xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA
let xpub = 'xpub6DTNmB7gWa8RtQAfmy8wSDikM5mky4fhsnqQd9AqoCaLcekqNgRZW5JCSXwXkLDkABHTD1qx7kqrbGzT6xBGfAvCJSj2rwvKWP8eZBR2EVA';
for(let i = 0; i <= 4; i++) {
  console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
}
// bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh
// bitcoincash:qrr2suh9yjsrkl2qp3p967uhfg6u0r6xxsn9h5vuvr
// bitcoincash:qpkfg4kck99wksyss6nvaqtafeahfnyrpsj0ed372t
// bitcoincash:qppgmuuwy07g0x39sx2z0x2u8e34tvfdxvy0c2jvx7
// bitcoincash:qryj8x4s7vfsc864jm0xaak9qfe8qgk245y9ska57l

// generate 5 testnet external change addresses for tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh
let xpub = 'tpubDCrnMSKwDMAbxg82yqDt97peMvftCXk3EfBb9WgZh27mPbHGkysU3TW7qX5AwydmnVQfaGeNhUR6okQ3dS5AJTP9gEP7jk2Wcj6Xntc6gNh';
for(let i = 0; i <= 4; i++) {
  console.log(bchjs.Address.fromXPub(xpub, "0/" + i))
}
// bchtest:qrth8470sc9scek9u0jj2d0349t62gxzdstw2jukl8
// bchtest:qpm56zc5re0nhms96r7p985aajthp0vxvg6e4ux3kc
// bchtest:qqtu3tf6yyd73ejhk3a2ylqynpl3mzzhwuzt299jfd
// bchtest:qzd7dvlnfukggjqsf5ju0qqwwltakfumjsck33js6m
// bchtest:qq322ataqeas4n0pdn4gz2sdereh5ae43ylk4qdvus
```

## Address | hash160ToCash()

Convert hash160 to cash address. Accepts either hexadecimal or buffer.

```
bchjs.Address.hash160ToCash()
```

*   [Example usage:](#examples-Address-hash160ToCash-0_0_0-0)

```
bchjs.Address.hash160ToCash("573d93b475be4f1925f3b74ed951201b0147eac1")
'bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh'
bchjs.Address.hash160ToCash("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
'bitcoincash:pp7ushdxf5we8mcpaa3wqgsuqt639cu59ur5xu5fug'
bchjs.Address.hash160ToCash("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
'bchtest:qq24rpar9qas3vc9r8d4p0prhwaf7jmx2u22nzt946'
```

## Address | hash160ToLegacy()

Convert hash160 to legacy address.

```
bchjs.Address.hash160ToLegacy()
```

*   [Example usage:](#examples-Address-hash160ToLegacy-0_0_0-0)

```
// legacy mainnet p2pkh
bchjs.Address.hash160ToLegacy("573d93b475be4f1925f3b74ed951201b0147eac1")
// 18xHZ8g2feo4ceejGpvzHkvXT79fi2ZdTG

// legacy mainnet p2sh
bchjs.Address.hash160ToLegacy("7dc85da64d1d93ef01ef62e0221c02f512e3942f", 0x05)
// 3DA6RBcFgLwLTpnF6BRAee8w6a9H6JQLCm

// legacy testnet p2pkh
bchjs.Address.hash160ToLegacy("155187a3283b08b30519db50bc23bbba9f4b6657", 0x6f)
// mhTg9sgNgvAGfmJs192oUzQWqAXHH5nqLE
```

## Address | isCashAddress()

Detect if cashAddr encoded address.

```
bchjs.Address.isCashAddress()
```

*   [Example usage:](#examples-Address-isCashAddress-0_0_0-0)

```
// mainnet cashaddr
bchjs.Address.isCashAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet w/ no cashaddr prefix
bchjs.Address.isCashAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet legacy
bchjs.Address.isCashAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
// false

// testnet w/ cashaddr prefix
bchjs.Address.isCashAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isCashAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet legacy
bchjs.Address.isCashAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## Address | isHash160()

Detect if an addess is a hash160.

```
bchjs.Address.isHash160()
```

*   [Example usage:](#examples-Address-isHash160-0_0_0-0)

```
let hash160Address = '428df38e23fc879a25819427995c3e6355b12d33';
bchjs.Address.isHash160(hash160Address);
// true

let notHash160Address = 'bitcoincash:pz8a837lttkvjksg0jjmmulqvfkgpqrcdgufy8ns5s';
bchjs.Address.isHash160(notHash160Address);
// false
```

## Address | isLegacyAddress()

Detect if legacy base58check encoded address.

```
bchjs.Address.isLegacyAddress()
```

*   [Example usage:](#examples-Address-isLegacyAddress-0_0_0-0)

```
 // cashaddr
bchjs.Address.isLegacyAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// w/ no cashaddr prefix
bchjs.Address.isLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// false

// legacy
bchjs.Address.isLegacyAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// true

// testnet w/ cashaddr prefix
bchjs.Address.isLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// legacy testnet
bchjs.Address.isLegacyAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true
```

## Address | isMainnetAddress()

Detect if mainnet address .

```
bchjs.Address.isMainnetAddress()
```

*   [Example usage:](#examples-Address-isMainnetAddress-0_0_0-0)

```
 // mainnet cashaddr
bchjs.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet cashaddr w/ no prefix
bchjs.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet legacy
bchjs.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// testnet cashaddr
bchjs.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet legacy
bchjs.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## Address | isP2PKHAddress()

Detect if p2pkh address.

```
bchjs.Address.isP2PKHAddress()
```

*   [Example usage:](#examples-Address-isP2PKHAddress-0_0_0-0)

```
 // cashaddr
bchjs.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// w/ no cashaddr prefix
bchjs.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// legacy
bchjs.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// legacy testnet
bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// legacy testnet
bchjs.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true
```

## Address | isP2SHAddress()

Detect if p2sh address.

```
bchjs.Address.isP2SHAddress()
```

*   [Example usage:](#examples-Address-isP2SHAddress-0_0_0-0)

```
 // cashaddr
bchjs.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// cashaddr w/ no prefix
bchjs.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy
bchjs.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// false

// cashaddr testnet
bchjs.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// cashaddr testnet w/ no prefix
bchjs.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// legacy testnet
bchjs.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## Address | isRegTestAddress()

Detect if regtest address.

```
bchjs.Address.isRegTestAddress()
```

*   [Example usage:](#examples-Address-isRegTestAddress-0_0_0-0)

```
  // regtest
bchjs.Address.isRegTestAddress('bchreg:qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
// true

// regtest w/ no prefix
bchjs.Address.isRegTestAddress('qzq9je6pntpva3wf6scr7mlnycr54sjgequ54zx9lh')
// true

// cashaddr mainnet
bchjs.Address.isRegTestAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.Address.isRegTestAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy mainnet
bchjs.Address.isRegTestAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.Address.isRegTestAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.Address.isRegTestAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false
```

## Address | isTestnetAddress()

Detect if testnet address.

```
bchjs.Address.isTestnetAddress()
```

*   [Example usage:](#examples-Address-isTestnetAddress-0_0_0-0)

```
  // cashaddr mainnet
bchjs.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// legacy mainnet
bchjs.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet legacy
bchjs.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true
```

## Address | toCashAddress()

Convert legacy to cashAddress format

```
bchjs.Address.toCashAddress()
```

*   [Example usage:](#examples-Address-toCashAddress-0_0_0-0)

```
// mainnet
bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet no prefix
bchjs.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// tesnet
bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet no prefix
bchjs.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
```

## Address | toEcashAddress()

Convert legacy to eCash (XEC) format

```
bchjs.Address.toEcashAddress()
```

*   [Example usage:](#examples-Address-toEcashAddress-0_0_0-0)

```
// mainnet
bchjs.Address.toEcashAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2')
// ecash:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da

// mainnet no prefix
bchjs.Address.toEcashAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da
```

## Address | toEtokenAddress()

Convert legacy to eToken (XEC) format

```
bchjs.Address.toEtokenAddress()
```

*   [Example usage:](#examples-Address-toEtokenAddress-0_0_0-0)

```
// mainnet
bchjs.Address.toEtokenAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2')
// etoken:qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da

// mainnet no prefix
bchjs.Address.toEtokenAddress('bitcoincash:qq50d800hgunr8u4trz3uuppspk3mds0dy9978plt2', false)
// qq50d800hgunr8u4trz3uuppspk3mds0dyug2v69da
```

## Address | toHash160()

Converts any address format to hash160

```
bchjs.Address.toHash160()
```

*   [Example usage:](#examples-Address-toHash160-0_0_0-0)

```
// cash address mainnet p2pkh
bchjs.Address.toHash160("bitcoincash:qptnmya5wkly7xf97wm5ak23yqdsz3l2cyj7k9vyyh")
// 573d93b475be4f1925f3b74ed951201b0147eac1

// cash address mainnet p2sh
bchjs.Address.toHash160("bitcoincash:pp7ushdxf5we8mcpaa3wqgsuqt639cu59ur5xu5fug")
// 7dc85da64d1d93ef01ef62e0221c02f512e3942f
```

## Address | toLegacyAddress()

Convert cashaddr to legacy address format

```
bchjs.Address.toLegacyAddress()
```

*   [Example usage:](#examples-Address-toLegacyAddress-0_0_0-0)

```
// mainnet w/ prefix
bchjs.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet w/ no prefix
bchjs.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// testnet w/ prefix
bchjs.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet w/ no prefix
bchjs.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi
```

## BitcoinCash

## BitcoinCash | decodeBase58Check()

Decodes base58Check encoded string to hex.

```
bchjs.BitcoinCash.decodeBase58Check()
```

*   [Example usage:](#examples-BitcoinCash-decodeBase58Check-0_0_0-0)

```
// decode 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar to hex
let base58check = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 0079bd35d306f648350818470c9f18903df6e06902a026f2a7

// decode 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK to hex
let base58check = '1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 006da742680accf2282df5fade8e9b7a01a517e779289b52cc

// decode 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs to hex
let base58check = '1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672

// decode 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6 to hex
let base58check = '1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5

// decode 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg to hex
let base58check = '1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg'
bchjs.BitcoinCash.decodeBase58Check(base58check)
// 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b
```

## BitcoinCash | decodeBIP21()

Decodes BIP21 uri.

```
bchjs.BitcoinCash.decodeBIP21()
```

*   [Example usage:](#examples-BitcoinCash-decodeBIP21-0_0_0-0)

```
let bip21 =
'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s', options: { amount: 1, label: '#BCHForEveryone' } }

let bip21 =
'bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny',
//   options:
//    { amount: 12.5,
//      label: 'coinbase donation',
//      message: 'and ya don\'t stop'
//    }
// }

let bip21 =
'bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix'
bchjs.BitcoinCash.decodeBIP21(bip21)
// { address: 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03', options: { amount: 42, label: 'no prefix' } }
```

## BitcoinCash | decryptBIP38()

BIP38 encrypt privkey WIFs.

```
bchjs.BitcoinCash.decryptBIP38()
```

*   [Example usage:](#examples-BitcoinCash-decryptBIP38-0_0_0-0)

```
// mainnet
bchjs.BitcoinCash.decryptBIP38(
'6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G',
'9GKVkabAHBMyAf',
'mainnet'
)
// L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu

// testnet
bchjs.BitcoinCash.decryptBIP38(
'6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735',
'1EBPIyj55eR8bVUov9',
'testnet'
)
// cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm
```

## BitcoinCash | encodeBase58Check()

Encodes hex string as base58Check.

```
bchjs.BitcoinCash.encodeBase58Check()
```

*   [Example usage:](#examples-BitcoinCash-encodeBase58Check-0_0_0-0)

```
// encode 0079bd35d306f648350818470c9f18903df6e06902a026f2a7 as base58check
let hex = '0079bd35d306f648350818470c9f18903df6e06902a026f2a7'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar

// encode 006da742680accf2282df5fade8e9b7a01a517e779289b52cc as base58check
let hex = '006da742680accf2282df5fade8e9b7a01a517e779289b52cc'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1Azo2JBz2JswboeY9xSMcp14BAfhjnD9SK

// encode 00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672 as base58check
let hex = '00c68a6a07ccdaf1669cfd8d244d80ff36b713551c6208f672'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1K6ncAmMEyQrKUYosZRD9swyZNXECu2aKs

// encode 00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5 as base58check
let hex = '00d0a6b5e3dd43d0fb895b3b3df565bb8266c5ab00a25dbeb5'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1L2FG9hH3bwchhxHaCs5cg1QNbhmbaeAs6

// encode 00db04c2e6f104997cb04c956bf25da6078e559d303127f08b as base58check
let hex = '00db04c2e6f104997cb04c956bf25da6078e559d303127f08b'
bchjs.BitcoinCash.encodeBase58Check(hex)
// 1Ly4gqPddveYHMNkfjoXHanVszXpD3duKg
```

## BitcoinCash | encodeBIP21()

Encodes address and options as BIP21 uri.

```
bchjs.BitcoinCash.encodeBIP21()
```

*   [Example usage:](#examples-BitcoinCash-encodeBIP21-0_0_0-0)

```
let address = 'bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s'
let options = {
amount: 1,
label: '#BCHForEveryone',
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qrdsfshx7yzfjl9sfj2khuja5crcu4vaxqrt2qkz5s?amount=1&label=%23BCHForEveryone

let address = '1C6hRmfzvWst5WA7bFRCVAqHt5gE2g7Qar'
let options = {
amount: 12.5,
label: 'coinbase donation',
message: "and ya don't stop",
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qpum6dwnqmmysdggrprse8ccjq7ldcrfqgmmtgcmny?amount=12.5&label=coinbase%20donation&message=and%20ya%20don%27t%20stop

let address = 'qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03'
let options = {
 amount: 42,
 label: 'no prefix',
}
bchjs.BitcoinCash.encodeBIP21(address, options)
// bitcoincash:qzw6tfrh8p0jh834uf9rhg77pjg5rgnt3qw0e54u03?amount=42&label=no%20prefix
```

## BitcoinCash | encryptBIP38()

BIP38 encrypt privkey WIFs.

```
bchjs.BitcoinCash.encryptBIP38()
```

*   [Example usage:](#examples-BitcoinCash-encryptBIP38-0_0_0-0)

```
// mainnet
bchjs.BitcoinCash.encryptBIP38(
 'L1phBREbhL4vb1uHHHCAse8bdGE5c7ic2PFjRxMawLzQCsiFVbvu',
'9GKVkabAHBMyAf'
)
// 6PYU2fDHRVF2194gKDGkbFbeu4mFgkWtVvg2RPd2Sp6KmZx3RCHFpgBB2G

// testnet
bchjs.BitcoinCash.encryptBIP38(
 'cSx7KzdH9EcvDEireu2WYpGnXdFYpta7sJUNt5kVCJgA7kcAU8Gm',
'1EBPIyj55eR8bVUov9'
)
// 6PYUAPLwLSEjWSAfoe9NTSPkMZXnJA8j8EFJtKaeSnP18RCouutBrS2735
```

## BitcoinCash | getByteCount()

Get byte count of transaction.

```
bchjs.BitcoinCash.getByteCount()
```

*   [Example usage:](#examples-BitcoinCash-getByteCount-0_0_0-0)

```
// 1 P2PKH input
let inputs = {
P2PKH: 1,
}
// 1 P2SH output
let outputs = {
 P2SH: 1,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 190

// 4 MULTISIG-P2SH 2-of-4 and 10 P2PKH inputs
let inputs = {
'MULTISIG-P2SH:2-4': 4,
P2PKH: 10,
}
// 23 P2PKH outputs
let outputs = {
P2PKH: 23,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 2750

// 2 MULTISIG-P2SH 3-of-5 inputs
let inputs = {
'MULTISIG-P2SH:3-5': 2,
}
// 2 P2PKH outputs
let outputs = {
P2PKH: 2,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 565

// 111 P2PKH inputs
let inputs = {
P2PKH: 111,
}
// 2 P2PKH outputs
let outputs = {
P2PKH: 2,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 16506

// 10 P2PKH and 1 MULTISIG-P2SH 1-of-2 input
let inputs = {
P2PKH: 10,
'MULTISIG-P2SH:1-2': 1,
}
// 2 P2PKH and 1 P2SH outputs
let outputs = {
P2PKH: 2,
P2SH: 1,
}
bchjs.BitcoinCash.getByteCount(inputs, outputs)
// 1780
```

## BitcoinCash | signMessageWithPrivKey()

Sign message with private key.

```
bchjs.BitcoinCash.signMessageWithPrivKey()
```

*   [Example usage:](#examples-BitcoinCash-signMessageWithPrivKey-0_0_0-0)

```
bchjs.BitcoinCash.signMessageWithPrivKey(
'KxtpRDUJDiutLaTV8Vuavhb6h7zq9YV9ZKA3dU79PCgYmNVmkkvS',
'EARTH'
)
// IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=
```

## BitcoinCash | toBitcoinCash()

Converting satoshi units to Bitcoin Cash units.

```
bchjs.BitcoinCash.toBitcoinCash()
```

*   [Example usage:](#examples-BitcoinCash-toBitcoinCash-0_0_0-0)

```
// convert 900000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(900000000)
// 9

// convert 100000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(100000000)
// 1

// convert 10000000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(10000000000)
// 100

// convert 4200000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(4200000000)
// 42

// convert 50700000000 satoshis to $BCH
bchjs.BitcoinCash.toBitcoinCash(50700000000)
// 507
```

## BitcoinCash | toBits()

Converting satoshi units to Bits denomination.

```
bchjs.BitcoinCash.toBits()
```

*   [Example usage:](#examples-BitcoinCash-toBits-0_0_0-0)

```
// convert 4242323400 satoshis to 42423.234 bits
bchjs.BitcoinCash.toBits(4242323400)
// 42423.234
// convert 100000000 satoshis to 1000 bits
bchjs.BitcoinCash.toBits(100000000)
// 1000
// convert 314000000 satoshis to 3140 bits
bchjs.BitcoinCash.toBits(314000000)
// 3140
// convert 987600000000 satoshis to 9876000 bits
bchjs.BitcoinCash.toBits(987600000000)
// 9876000
// convert 12300 satoshis to 0.123 bits
bchjs.BitcoinCash.toBits(12300)
// 0.123
```

## BitcoinCash | toSatoshi()

Converting Bitcoin Cash units to satoshi units.

```
bchjs.BitcoinCash.toSatoshi()
```

*   [Example usage:](#examples-BitcoinCash-toSatoshi-0_0_0-0)

```
// convert 9 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(9)
// 900000000

// convert 1 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(1)
// 100000000

// convert 100 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(100)
// 10000000000

// convert 42 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(42)
// 4200000000

// convert 507 $BCH to satoshis
bchjs.BitcoinCash.toSatoshi(507)
// 50700000000
```

## BitcoinCash | verifyMessage()

Verify message.

```
bchjs.BitcoinCash.verifyMessage()
```

*   [Example usage:](#examples-BitcoinCash-verifyMessage-0_0_0-0)

```
bchjs.BitcoinCash.verifyMessage(
'bitcoincash:qp2zvw3zpk5xx43w4tve7mtekd9kaxwj4uenq9eupv',
'IIYVhlo2Z6TWFjYX1+YM+7vQKz0m+zYdSe4eYpFLuAQDEZXqll7lZC8Au22VI2LLP5x+IerZckVk3QQPsA3e8/8=',
'EARTH'
)
// true
```

## Blockchain

## Blockchain | getBestBlockHash()

Returns the hash of the best (tip) block in the longest blockchain.

```
bchjs.Blockchain.getBestBlockHash()
```

*   [Example usage:](#examples-Blockchain-getBestBlockHash-0_0_0-0)

```
(async () => {
try {
let getBestBlockHash = await bchjs.Blockchain.getBestBlockHash();
console.log(getBestBlockHash);
} catch(error) {
console.error(error)
}
})()
// 241decef88889efac8e6ce428a8ac696fdde5972eceed97e1fb58d6106af31d5
```

## Blockchain | getBlock()

If verbose is 0, returns a string that is serialized, hex-encoded data for block 'hash'. If verbose is 1, returns an Object with information about block hash. If verbose is 2, returns an Object with information about block hash and information about tx.

```
bchjs.Blockchain.getBlock()
```

*   [Example usage:](#examples-Blockchain-getBlock-0_0_0-0)

```
(async () => {
try {
let getBlock = await bchjs.Blockchain.getBlock("00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09");
console.log(getBlock);
} catch(error) {
console.error(error)
}
})()

// {
//  hash: '00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09',
//  confirmations: 528236,
//  size: 216,
//  height: 1000,
//  version: 1,
//  versionHex: '00000001',
//  merkleroot: 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33',
//  tx:
//   [ 'fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33' ],
//  time: 1232346882,
//  mediantime: 1232344831,
//  nonce: 2595206198,
//  bits: '1d00ffff',
//  difficulty: 1,
//  chainwork: '000000000000000000000000000000000000000000000000000003e903e903e9',
//  previousblockhash: '0000000008e647742775a230787d66fdf92c46a48c896bfbc85cdc8acc67e87d',
//  nextblockhash: '00000000a2887344f8db859e372e7e4bc26b23b9de340f725afbf2edb265b4c6'
// }
```

## Blockchain | getBlockchainInfo()

Returns an object containing various state info regarding blockchain processing.

```
bchjs.Blockchain.getBlockchainInfo()
```

*   [Example usage:](#examples-Blockchain-getBlockchainInfo-0_0_0-0)

```
(async () => {
try {
let getBlockchainInfo = await bchjs.Blockchain.getBlockchainInfo();
console.log(getBlockchainInfo);
} catch(error) {
console.error(error)
}
})()

// { chain: 'main',
// blocks: 529235,
// headers: 529235,
// bestblockhash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
// difficulty: 702784497476.8376,
// mediantime: 1525727823,
// verificationprogress: 0.9999892037620548,
// chainwork: '00000000000000000000000000000000000000000099f5e1cf7d4e462a493a51',
// pruned: false,
// softforks:
//  [ { id: 'bip34', version: 2, reject: [Object] },
//    { id: 'bip66', version: 3, reject: [Object] },
//    { id: 'bip65', version: 4, reject: [Object] } ],
// bip9_softforks:
//  { csv:
//     { status: 'active',
//       startTime: 1462060800,
//       timeout: 1493596800,
//       since: 419328 } } }
```

## Blockchain | getBlockCount()

Returns the number of blocks in the longest blockchain.

```
bchjs.Blockchain.getBlockCount()
```

*   [Example usage:](#examples-Blockchain-getBlockCount-0_0_0-0)

```
(async () => {
try {
let getBlockCount = await bchjs.Blockchain.getBlockCount();
console.log(getBlockCount);
} catch(error) {
console.error(error)
}
})()
// 529235
```

## Blockchain | getBlockHash()

Returns hash of block in best-block-chain at height provided.

```
bchjs.Blockchain.getBlockHash()
```

*   [Example usage:](#examples-Blockchain-getBlockHash-0_0_0-0)

```
(async () => {
try {
let getBlockHash = await bchjs.Blockchain.getBlockHash([0]);
console.log(getBlockHash);
} catch(error) {
console.error(error)
}
})()
// [ '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' ]
```

## Blockchain | getChainTips()

Return information about all known tips in the block tree, including the main chain as well as orphaned branches.

```
bchjs.Blockchain.getChainTips()
```

*   [Example usage:](#examples-Blockchain-getChainTips-0_0_0-0)

```
(async () => {
try {
let getChainTips = await bchjs.Blockchain.getChainTips();
console.log(getChainTips);
} catch(error) {
console.error(error)
}
})()

// [ { height: 529235,
//   hash: '00000000000000000108641af52e01a447b1f9d801571f93a0f20a8cbf80c236',
//   branchlen: 0,
//   status: 'active' },
// { height: 527442,
//   hash: '0000000000000000014cbf7b7aa12e52dd97db4b1ba5f39dccae37773af9272e',
//   branchlen: 1,
//   status: 'invalid' },
// { height: 526861,
//   hash: '00000000000000000225b070818bbafd95842ecbd25edf39bff54a7aa5c8fd10',
//   branchlen: 1,
//   status: 'valid-headers' } ]
```

## Blockchain | getDifficulty()

Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

```
bchjs.Blockchain.getDifficulty()
```

*   [Example usage:](#examples-Blockchain-getDifficulty-0_0_0-0)

```
(async () => {
try {
let getDifficulty = await bchjs.Blockchain.getDifficulty();
console.log(getDifficulty);
} catch(error) {
console.error(error)
}
})()

// 702784497476.8376
```

## Blockchain | getMempoolEntry()

Returns mempool data for given transaction.

```
bchjs.Blockchain.getMempoolEntry()
```

*   [Example usage:](#examples-Blockchain-getMempoolEntry-0_0_0-0)

```
(async () => {
try {
let getMempoolEntry = await bchjs.Blockchain.getMempoolEntry("fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33");
console.log(getMempoolEntry);
} catch(error) {
console.error(error)
}
})()

// {
//   "size": 372,
//   "fee": 0.00000374,
//   "modifiedfee": 0.00000374,
//   "time": 1547738850,
//   "height": 565716,
//   "startingpriority": 26524545.3974359,
//   "currentpriority": 26524545.3974359,
//   "descendantcount": 1,
//   "descendantsize": 372,
//   "descendantfees": 374,
//   "ancestorcount": 1,
//   "ancestorsize": 372,
//   "ancestorfees": 374,
//   "depends": []
// }

(async () => {
try {
let getMempoolEntry = await bchjs.Blockchain.getMempoolEntry([
  "fe28050b93faea61fa88c4c630f0e1f0a1c24d0082dd0e10d369e13212128f33",
  "defea04c38ee00cf73ad402984714ed22dc0dd99b2ae5cb50d791d94343ba79b"
  ]);
console.log(getMempoolEntry);
} catch(error) {
console.error(error)
}
})()

// [
//   {
//     "size": 372,
//     "fee": 0.00000374,
//     "modifiedfee": 0.00000374,
//     "time": 1547738850,
//     "height": 565716,
//     "startingpriority": 26524545.3974359,
//     "currentpriority": 26524545.3974359,
//     "descendantcount": 1,
//     "descendantsize": 372,
//     "descendantfees": 374,
//     "ancestorcount": 1,
//     "ancestorsize": 372,
//     "ancestorfees": 374,
//     "depends": []
//   },
//   {
//     "size": 372,
//     "fee": 0.00000374,
//     "modifiedfee": 0.00000374,
//     "time": 1547738850,
//     "height": 565716,
//     "startingpriority": 26524545.3974359,
//     "currentpriority": 26524545.3974359,
//     "descendantcount": 1,
//     "descendantsize": 372,
//     "descendantfees": 374,
//     "ancestorcount": 1,
//     "ancestorsize": 372,
//     "ancestorfees": 374,
//     "depends": []
//   }
// ]
```

## Blockchain | getMempoolInfo()

Returns details on the active state of the TX memory pool.

```
bchjs.Blockchain.getMempoolInfo()
```

*   [Example usage:](#examples-Blockchain-getMempoolInfo-0_0_0-0)

```
(async () => {
try {
let getMempoolInfo = await bchjs.Blockchain.getMempoolInfo();
console.log(getMempoolInfo);
} catch(error) {
console.error(error)
}
})()

// { size: 257,
// bytes: 98257,
// usage: 365840,
// maxmempool: 300000000,
// mempoolminfee: 0 }
```

## Blockchain | getRawMempool()

Returns all transaction ids in memory pool as a json array of string transaction ids.

```
bchjs.Blockchain.getRawMempool()
```

*   [Example usage:](#examples-Blockchain-getRawMempool-0_0_0-0)

```
(async () => {
try {
let getRawMempool = await bchjs.Blockchain.getRawMempool(true);
console.log(getRawMempool);
} catch(error) {
console.error(error)
}
})()

// [  {'2ae541af20db6f2b50410f418af56e349d08877d685f6cf54df54658e892db7a':
//  { size: 237,
//    fee: 0.00000238,
//    modifiedfee: 0.00000238,
//    time: 1525732015,
//    height: 529235,
//    startingpriority: 0,
//    currentpriority: 0,
//    descendantcount: 10,
//    descendantsize: 2376,
//    descendantfees: 2380,
//    ancestorcount: 3,
//    ancestorsize: 712,
//    ancestorfees: 714,
//    depends:
//     [ 'e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e' ] },]
```

## Blockchain | getTxOut()

Returns details about an unspent transaction output.

```
bchjs.Blockchain.getTxOut()
```

*   [Example usage:](#examples-Blockchain-getTxOut-0_0_0-0)

```
(async () => {
try {
let getTxOut = await bchjs.Blockchain.getTxOut("e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e", 1);
console.log(getTxOut);
} catch(error) {
console.error(error)
}
})()

// null
```

## Blockchain | getTxOutProof()

Returns a hex-encoded proof that "txid" was included in a block.

```
bchjs.Blockchain.getTxOutProof()
```

*   [Example usage:](#examples-Blockchain-getTxOutProof-0_0_0-0)

```
(async () => {
try {
let getTxOutProof = await bchjs.Blockchain.getTxOutProof("e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e");
console.log(getTxOutProof);
} catch(error) {
console.error(error)
}
})()

// "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"

(async () => {
try {
let getTxOutProof = await bchjs.Blockchain.getTxOutProof([
  "e25682caafc7000645d59f4c11d8d594b2943979b9d8fafb9f946e2b35c21b7e",
  "d16662463fd98eb96c8f6898d58a4461ac3d0120f4d0aea601d72b37759f261c"
]);
console.log(getTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101",
//   "010000007de867cc8adc5cc8fb6b898ca4462cf9fd667d7830a275277447e60800000000338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe021f7449ffff001d36b4af9a0100000001338f121232e169d3100edd82004dc2a1f0e1f030c6c488fa61eafa930b0528fe0101"
// ]
```

## Blockchain | verifyTxOutProof()

Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain.

```
bchjs.Blockchain.verifyTxOutProof()
```

*   [Example usage:](#examples-Blockchain-verifyTxOutProof-0_0_0-0)

```
(async () => {
try {
const proof = "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"
let verifyTxOutProof = await bchjs.Blockchain.verifyTxOutProof(proof);
console.log(verifyTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7"
// ]

(async () => {
try {
const proof = "0000002086a4a3161f9ba2174883ec0b93acceac3b2f37b36ed1f90000000000000000009cb02406d1094ecf3e0b4c0ca7c585125e721147c39daf6b48c90b512741e13a12333e5cb38705180f441d8c7100000008fee9b60f1edb57e5712839186277ed39e0a004a32be9096ee47472efde8eae62f789f9d7a9f59d0ea7093dea1e0c65ff0b953f1d8cf3d47f92e732ca0295f603c272d5f4a63509f7a887f2549d78af7444aa0ecbb4f66d9cbe13bc6a89f59e05a199df8325d490818ffefe6b6321d32d7496a68580459836c0183f89082fc1b491cc91b23ecdcaa4c347bf599a62904d61f1c15b400ebbd5c90149010c139d9c1e31b774b796977393a238080ab477e1d240d0c4f155d36f519668f49bae6bd8cd5b8e40522edf76faa09cca6188d83ff13af6967cc6a569d1a5e9aeb1fdb7f531ddd2d0cbb81879741d5f38166ac1932136264366a4065cc96a42e41f96294f02df01"
let verifyTxOutProof = await bchjs.Blockchain.verifyTxOutProof([proof, proof]);
console.log(verifyTxOutProof);
} catch(error) {
console.error(error)
}
})()

// [
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7",
//   "03f69502ca32e7927fd4f38c1d3f950bff650c1eea3d09a70e9df5a9d7f989f7"
// ]
```

## Control

## Control | getNetworkInfo()

Returns an object containing various network info.

```
bchjs.Control.getNetworkInfo()
```

*   [Example usage:](#examples-Control-getNetworkInfo-0_0_0-0)

```
(async () => {
  try {
    let getInfo = await bchjs.Control.getNetworkInfo();
    console.log(getInfo);
  } catch(error) {
   console.error(error)
  }
})()

// returns
{ version: 190500,
  subversion: '/Bitcoin ABC:0.19.5(EB32.0)/',
  protocolversion: 70015,
  localservices: '0000000000000425',
  localrelay: true,
  timeoffset: 0,
  networkactive: true,
  connections: 17,
  networks:
  [ { name: 'ipv4',
      limited: false,
      reachable: true,
      proxy: '',
      proxy_randomize_credentials: false },
    { name: 'ipv6',
      limited: false,
      reachable: true,
      proxy: '',
      proxy_randomize_credentials: false },
    { name: 'onion',
      limited: true,
      reachable: false,
      proxy: '',
      proxy_randomize_credentials: false } ],
  relayfee: 0.00001,
  excessutxocharge: 0,
  warnings:
  'Warning: Unknown block versions being mined! It\'s possible unknown rules are in effect' }}
```

## Crypto

## Crypto | hash160()

Utility for creating ripemd160(sha256()) hash digests of buffer encoded data.

```
bchjs.Crypto.hash160()
```

*   [Example usage:](#examples-Crypto-hash160-0_0_0-0)

```
// buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.hash160(buffer)
// <Buffer ab af 11 19 f8 3e 38 42 10 fe 8e 22 2e ac 76 e2 f0 da 39 dc>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.hash160(buffer)
// <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.hash160(buffer)
```

## Crypto | hash256()

Utility for creating double sha256 hash digests of buffer encoded data.

```
bchjs.Crypto.hash256()
```

*   [Example usage:](#examples-Crypto-hash256-0_0_0-0)

```
 // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 72 83 38 d9 9f 35 61 75 c4 94 5e f5 cc cf a6 1b 7b 56 14 3c bb f4 26 dd d0 e0 fc 7c fe 8c 3c 23>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 7a d2 a7 4b d5 96 98 71 4a 29 91 a8 2b 71 73 6f 35 42 b2 82 8b 6a c2 4d e4 27 c4 40 da 89 d0 1a>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.hash256(buffer)
// <Buffer 68 8f 1d 02 9e d5 4c 34 d0 32 0b 83 8b f6 fc 64 f6 2f 38 a6 e9 30 a0 af 5b db 4e 27 d1 a6 84 cd>
```

## Crypto | randomBytes()

Generates cryptographically strong pseudo-random data. The size argument is a number indicating the number of bytes to generate.

```
bchjs.Crypto.randomBytes()
```

*   [Example usage:](#examples-Crypto-randomBytes-0_0_0-0)

```
bchjs.Crypto.randomBytes(16)
// <Buffer 0e 87 d2 7b c4 c3 d0 06 ef bb f3 a4 e5 ea 87 02>

bchjs.Crypto.randomBytes(20)
// <Buffer 8b 42 7d ca 52 c0 77 69 a3 f2 32 90 6b a5 a8 50 56 e2 47 0f>

bchjs.Crypto.randomBytes(24)
// <Buffer 28 69 fc 81 f7 a8 dd 5e 25 92 c4 7b 87 31 02 e8 b3 4c 92 fa c4 c9 1a e2>

bchjs.Crypto.randomBytes(28)
// <Buffer 80 53 dd 21 b6 02 a9 c7 8f 1c 1d 64 1b 6e 21 3e 3f 01 e1 0f aa 6c 59 50 3a b3 41 a6>

bchjs.Crypto.randomBytes(32)
// <Buffer ec 44 73 72 ea 48 3e 08 a5 0a 62 b8 40 0f 69 64 a7 75 35 af 20 3d e1 6d ce 3b f9 37 11 19 2b c6>
```

## Crypto | ripemd160()

Utility for creating ripemd160 hash digests of data

```
bchjs.Crypto.ripemd160()
```

*   [Example usage:](#examples-Crypto-ripemd160-0_0_0-0)

```
  // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 58 25 70 1b 4b 97 67 fd 35 06 3b 28 6d ca 35 82 85 3e 06 30>

// buffer from hex
let buffer = Buffer.from('75618d82d1f6251f2ef1f42f5f0d5040330948a707ff6d69720dbdcb00b48aab', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 88 74 ef 88 8a 9b cb d8 3b 87 d0 6f f7 bc 21 3c 51 49 73 62>

// buffer from hex
let buffer = Buffer.from('978c09dd46091d1922fa01e9f4a975b91a371f26ba8399de27d53801152121de', 'hex')
bchjs.Crypto.ripemd160(buffer)
// <Buffer 5f 95 6a 88 86 30 51 ea 52 15 d8 97 0c ed 8e 21 8e b6 15 cf>
```

## Crypto | sha256()

Utility for creating sha256 hash digests of data

```
bchjs.Crypto.sha256()
```

*   [Example usage:](#examples-Crypto-sha256-0_0_0-0)

```
 // buffer from hex
let buffer = Buffer.from('0101010101010101', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer c0 35 7a 32 ed 1f 6a 03 be 92 dd 09 44 76 f7 f1 a2 e2 14 ec>

// buffer from hex
let buffer = Buffer.from('031ad329b3117e1d1e2974406868e575d48cff88e8128ba0eedb10da053785033b', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer 98 ee ed 79 8e e9 58 d1 65 3e df 2d 85 7d 4a ea ba 97 19 32>

// buffer from hex
let buffer = Buffer.from('03123464075c7a5fa6b8680afa2c962a02e7bf071c6b2395b0ac711d462cac9354', 'hex')
bchjs.Crypto.sha256(buffer)
// <Buffer 97 8c 09 dd 46 09 1d 19 22 fa 01 e9 f4 a9 75 b9 1a 37 1f 26 ba 83 99 de 27 d5 38 01 15 21 21 de>
```

## DSProof

## DSProof | getDSProof()

Checks if a transaction generated a double-spend proof.

If a double-spend is attempted, one of the transactions will generate a 'double spend proof'. This call can be used to check if a transaction generated such a proof.

Merchants should wait 3-5 seconds after receiving notification of a transaction before calling this endpoint, to see if the TXID generated a proof. If this method returns no data, then the TX can be considered 'safe' and not a double spend. If proof data is returned by this method, then the transaction generated a proof and can be considered a 'double spend'.

```
bchjs.DSProof.getDSProof()
```

*   [Example usage:](#examples-DSProof-getDSProof-0_0_0-0)

```
(async () => {
  try {
    const txid = 'ee0df780b58f6f24467605b2589c44c3a50fc849fb8f91b89669a4ae0d86bc7e'
    const result = await bchjs.DSProof.getDSProof(txid)
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

// returns
null
```

## ECPair

## ECPair | fromPublicKey()

Generates an ECPair from a public key buffer.

```
bchjs.Ecpair.fromPublicKey()
```

*   [Example usage:](#examples-ECPair-fromPublicKey-0_0_0-0)

```
// create ECPair from mainnet pubkeyBuffer
let pubkeyBuffer = Buffer.from("02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
bchjs.ECPair.fromPublicKey(pubkeyBuffer);

// create ECPair from testnet pubkeyBuffer
let pubkeyBuffer = Buffer.from("024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6", 'hex');
bchjs.ECPair.fromPublicKey(pubkeyBuffer);
```

## ECPair | fromWIF()

Generates an ECPair from a private key in wallet import format (WIF). Follow these steps to go from a private key to a WIF. This method only works with a compressed private key.

```
bchjs.Ecpair.fromWIF()
```

*   [Example usage:](#examples-ECPair-fromWIF-0_0_0-0)

```
// mainnet WIF
let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
bchjs.ECPair.fromWIF(wif);

// testnet WIF
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW'
bchjs.ECPair.fromWIF(wif)
```

## ECPair | toCashAddress()

Get cash address of ECPair.

```
bchjs.Ecpair.toCashAddress()
```

*   [Example usage:](#examples-ECPair-toCashAddress-0_0_0-0)

```
// mainnet wif
let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toCashAddress(ecpair);
// bitcoincash:qz9nq206kteyv2t7trhdr4vzzkej60kqtytn7sxkxm

// testnet wif
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toCashAddress(ecpair);
// bchtest:qqzly4vrcxcjw62u4yq4nv86ltk2mc9v0yvq8mvj6m
```

## ECPair | toLegacyAddress()

Get legacy address of ECPair.

```
bchjs.Ecpair.toLegacyAddress()
```

*   [Example usage:](#examples-ECPair-toLegacyAddress-0_0_0-0)

```
// mainnet wif
let wif = 'L5GPEGxCmojgzFoBLUUqT2GegLGqobiYhTZzfLtpkLTfTb9E9NRn';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toLegacyAddress(ecpair);
// 1DgxdA5bbMcCNWg3yB2MgKqFazV92BXgxK

// testnet wif
let wif = 'cSNLj6xeg3Yg2rfcgKoWNx4MiAgn9ugCUUro37UDEhn6CzeYqjWW';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// to legacy address
bchjs.ECPair.toLegacyAddress(ecpair);
// mg4PygFcXoyNJGJkM2Dcpe25av9wXzz1My
```

## ECPair | toPublicKey()

Get the public key of an ECPair as a buffer.

```
bchjs.Ecpair.toPublicKey()
```

*   [Example usage:](#examples-ECPair-toPublicKey-0_0_0-0)

```
// create ecpair from mainnet public key buffer
let ecpair = bchjs.ECPair.fromPublicKey(Buffer.from('02d305772e0873fba6c1c7ff353ce374233316eb5820acd7ff3d7d9b82d514126b', 'hex'));
// create public key buffer
bchjs.ECPair.toPublicKey(ecpair);
//

// create ecpair from testnet public key buffer
let ecpair = bchjs.ECPair.fromPublicKey(Buffer.from('024a6d0737a23c472d078d78c1cbc3c2bbf8767b48e72684ff03a911b463da7fa6', 'hex'));
// create public key buffer
bchjs.ECPair.toPublicKey(ecpair);
//
```

## ECPair | toWIF()

Gets a private key in wallet import format from an ECPair.

```
bchjs.Ecpair.toWIF()
```

*   [Example usage:](#examples-ECPair-toWIF-0_0_0-0)

```
// mainnet wif
let wif = 'L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// wif from ecpair
bchjs.ECPair.toWIF(ecpair);
// L4vmKsStbQaCvaKPnCzdRArZgdAxTqVx8vjMGLW5nHtWdRguiRi1

// testnet wif
let wif = 'cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA';
// ecpair from wif
let ecpair = bchjs.ECPair.fromWIF(wif);
// wif from ecpair
bchjs.ECPair.toWIF(ecpair);
// cT3tJP7BnjFJSAHbooMXrY8E9t2AFj37amSBAYFMeHfqPqPgD4ZA
```

## ElectrumX

## ElectrumX | balance()

Return a list of balances for an address.

```
bchjs.Electrumx.balance()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_Balance-0_0_0-0)

```
(async () => {
  try {
    let balance = await bchjs.Electrumx.balance('bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf');
    console.log(balance);
  } catch(error) {
   console.error(error)
  }
})()

  balance = {
    "success": true,
    "balance": {
      "confirmed": 1000,
      "unconfirmed": 0
    }
  }

(async () => {
  try {
    let balance = await bchjs.Electrumx.balance(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(balance);
  } catch(error) {
   console.error(error)
  }
})()

  balance = {
    "success": true,
    "balances": [
      {
        "balance": {
          "confirmed": 7000,
          "unconfirmed": 0
        },
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "balance": {
          "confirmed": 0,
          "unconfirmed": 0
        },
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }
```

## ElectrumX | broadcast()

Broadcast a raw transaction and return the transaction ID on success or error on failure.

(async () => { try { const txHex = "020000000265d13ef402840c8a51f39779afb7ae4d49e4b0a3c24a3d0e7742038f2c679667010000006441dd1dd72770cadede1a7fd0363574846c48468a398ddfa41a9677c74cac8d2652b682743725a3b08c6c2021a629011e11a264d9036e9d5311e35b5f4937ca7b4e4121020797d8fd4d2fa6fd7cdeabe2526bfea2b90525d6e8ad506ec4ee3c53885aa309ffffffff65d13ef402840c8a51f39779afb7ae4d49e4b0a3c24a3d0e7742038f2c679667000000006441347d7f218c11c04487c1ad8baac28928fb10e5054cd4494b94d078cfa04ccf68e064fb188127ff656c0b98e9ce87f036d183925d0d0860605877d61e90375f774121028a53f95eb631b460854fc836b2e5d31cad16364b4dc3d970babfbdcc3f2e4954ffffffff035ac355000000000017a914189ce02e332548f4804bac65cba68202c9dbf822878dfd0800000000001976a914285bb350881b21ac89724c6fb6dc914d096cd53b88acf9ef3100000000001976a91445f1f1c4a9b9419a5088a3e9c24a293d7a150e6488ac00000000" let result = await bchjs.Electrumx.broadcast(txHex) console.log(result); } catch(error) { console.error(error) } })()

result = { "success": true, "txid": "..." }

```
bchjs.Electrumx.broadcast()
```

## ElectrumX | sortAllTxs()

Sort the output of Electrum.transactions() by block height.

A simple sort function for the output of Electrum.transactions(). Assumes that unconfirmed transactions will make it into the next block. Any unconfirmed transactions have their block height with the height of the next block. Returns a Promise.

Sorts in 'ASCENDING' order by default, or 'DESCENDING' can be specified.

```
bchjs.Electrumx.sortAllTxs()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_sortAllTxs-0_0_0-0)

```
   (async () => {
     const txs = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v')
     const sortedTxs = await bchjs.Electrumx.sortAllTxs(txs.transactions, 'ASCENDING')
     console.log(sortedTxs)
   })()

//   [
//     {
//       "height": 560430,
//       "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
//     },
//     {
//       "height": 560534,
//       "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
//     }
//   ]
```

## ElectrumX | sortConfTxs()

Sort the output of Electrum.transactions() by block height.

A simple sort function for the output of Electrum.transactions(). Ignores unconfirmed transactions.

Sorts in 'DESCENDING' order by default, or 'ASCENDING' can be specified. Descending makes the first element the newest (largest block height).

```
bchjs.Electrumx.sortConfTxs()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_sortConfTxs-0_0_0-0)

```
   (async () => {
     const txs = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v')
     const sortedTxs = bchjs.Electrumx.sortConfTxs(txs.transactions, 'ASCENDING')
     console.log(sortedTxs)
   })()

//   [
//     {
//       "height": 560430,
//       "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
//     },
//     {
//       "height": 560534,
//       "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
//     }
//   ]
```

## ElectrumX | transactions()

Return a transaction history for an address.

```
bchjs.Electrumx.transactions()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_Transactions-0_0_0-0)

```
(async () => {
  try {
    let transactions = await bchjs.Electrumx.transactions('bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v');
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  {
    "success": true,
    "transactions": [
      {
        "height": 560430,
        "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
      },
      {
        "height": 560534,
        "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
      }
    ]
  }

(async () => {
  try {
    let transactions = await bchjs.Electrumx.transactions(['bitcoincash:qrl2nlsaayk6ekxn80pq0ks32dya8xfclyktem2mqj', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  transactions = {
    "success": true,
    "transactions": [
      {
        "transactions": [
          {
            "height": 631219,
            "tx_hash": "ae2daa01c8172545b5edd205ea438706bcb74e63d4084a26b9ff2a46d46dc97f"
          }
        ],
        "address": "bitcoincash:qrl2nlsaayk6ekxn80pq0ks32dya8xfclyktem2mqj"
      },
      {
        "transactions": [
          {
            "height": 560430,
            "tx_hash": "3e1f3e882be9c03897eeb197224bf87f312be556a89f4308fabeeeabcf9bc851"
          },
          {
            "height": 560534,
            "tx_hash": "4ebbeaac51ce141e262964e3a0ce11b96ca72c0dffe9b4127ce80135f503a280"
          }
        ],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }
```

## ElectrumX | txData()

Returns an object with transaction details of the TXID

```
bchjs.Electrumx.txData()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_txData-0_0_0-0)

```
   (async () => {
  try {
    let result = await bchjs.Electrumx.txData('4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251')
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

result = {
  "success": true,
  "details": {
     "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
     "blocktime": 1578327094,
     "confirmations": 31861,
     "hash": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
     ...
     "vin": [
       {
         "scriptSig": {
         ...
     "vout": [
       {
         "n": 0,
         "scriptPubKey": {
         "addresses": [
            "bitcoincash: pqvfecpwxvj53ayqfwkxtjaxsgpvnklcyg8xewk9hl"
         ],
       }
     ...
}

   (async () => {
  try {
    let result = await bchjs.Electrumx.txData(['4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251', '4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251'])
    console.log(result);
  } catch(error) {
   console.error(error)
  }
})()

result = {
  "transactions": [
    {
       "txid": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
       "details": {
          "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
          "blocktime": 1578327094,
          "confirmations": 31861,
          "hash": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
          ...
       }
    },
    {
       "txid": "4db095f34d632a4daf942142c291f1f2abb5ba2e1ccac919d85bdc2f671fb251",
       "details": {
          "blockhash": "0000000000000000002aaf94953da3b487317508ebd1003a1d75d6d6ec2e75cc",
          "blocktime": 1578327094,
       ...
    }
  ]
}
```

## ElectrumX | unconfirmed()

Return a list of unconfirmed uxtos (mempool) for an address.

```
bchjs.Electrumx.unconfirmed()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_Unconfirmed-0_0_0-0)

```
   (async () => {
  try {
    let mempool = await bchjs.Electrumx.unconfirmed('bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9');
    console.log(mempool);
  } catch(error) {
   console.error(error)
  }
})()

mempool = {
 "success": true,
 "utxos": [
   {
     "height": 602405,
     "tx_hash": "2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7",
     "fee": 24310
   }
 ]
}

(async () => {
  try {
    let mempool = await bchjs.Electrumx.unconfirmed(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(mempool);
  } catch(error) {
   console.error(error)
  }
})()

  mempool = {
    "success": true,
    "utxos": [
      {
        "utxos": [
          {
            "height": 604392,
            "tx_hash": "7774e449c5a3065144cefbc4c0c21e6b69c987f095856778ef9f45ddd8ae1a41",
            "fee": 24310
          },
          {
            "height": 630834,
            "tx_hash": "4fe60a51e0d8f5134bfd8e5f872d6e502d7f01b28a6afebb27f4438a4f638d53",
            "fee": 3000
          }
        ],
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "utxos": [],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }
```

## ElectrumX | utxo()

Return a list of uxtos for an address.

```
bchjs.Electrumx.utxo()
```

*   [Example usage:](#examples-ElectrumX-ElectrumX_Utxo-0_0_0-0)

```
(async () => {
  try {
    let utxo = await bchjs.Electrumx.utxo('bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9');
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

utxo = {
 "success": true,
 "utxos": [
   {
     "height": 602405,
    "tx_hash": "2b37bdb3b63dd0bca720437754a36671431a950e684b64c44ea910ea9d5297c7",
     "tx_pos": 0,
     "value": 1000
   }
 ]
}

(async () => {
  try {
    let utxo = await bchjs.Electrumx.utxo(['bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf', 'bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v']);
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

  utxos = {
    "success": true,
    "utxos": [
      {
        "utxos": [
          {
            "height": 604392,
            "tx_hash": "7774e449c5a3065144cefbc4c0c21e6b69c987f095856778ef9f45ddd8ae1a41",
            "tx_pos": 0,
            "value": 1000
          },
          {
            "height": 630834,
            "tx_hash": "4fe60a51e0d8f5134bfd8e5f872d6e502d7f01b28a6afebb27f4438a4f638d53",
            "tx_pos": 0,
            "value": 6000
          }
        ],
        "address": "bitcoincash:qrdka2205f4hyukutc2g0s6lykperc8nsu5u2ddpqf"
      },
      {
        "utxos": [],
        "address": "bitcoincash:qpdh9s677ya8tnx7zdhfrn8qfyvy22wj4qa7nwqa5v"
      }
    ]
  }
```

## Encryption

## Encryption | getPubKey()

Get the public key for an address Given an address, the command will search the blockchain for a public key associated with that address. The address needs to have made at least one spend transaction, in order for its public key to be retrievable.

```
bchjs.encryption.getPubKey()
```

*   [Example usage:](#examples-Encryption-Encryption_getPubKey\(\)-0_0_0-0)

```
(async () => {
 try {
   const addr = 'bitcoincash:qqlrzp23w08434twmvr4fxw672whkjy0py26r63g3d'
   const pubkey = await bchjs.encryption.getPubKey(addr);
   console.log(pubkey);
 } catch(err) {
  console.error(err)
 }
})()
```

## HDNode

## HDNode | createAccount()

Has getChainAddress and nextChainAddress helper methods.

```
bchjs.HDNode.createAccount()
```

*   [Example usage:](#examples-HDNode-createAccount-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer
let rootSeedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create master hd node
let masterHDNode = bchjs.HDNode.fromSeed(rootSeedBuffer);
// derive child node
let childNode = masterHDNode.derivePath("m/44'/145'/0'/0");
// create account
let account = bchjs.HDNode.createAccount([childNode]);
```

## HDNode | derive()

Derive non hardened child HDNode

```
bchjs.HDNode.derive()
```

*   [Example usage:](#examples-HDNode-derive-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive unhardened child HDNode
bchjs.HDNode.derive(hdNode, 0);
```

## HDNode | deriveHardened()

Derive hardened child HDNode

```
bchjs.HDNode.deriveHardened()
```

*   [Example usage:](#examples-HDNode-deriveHardened-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive hardened child HDNode
bchjs.HDNode.deriveHardened(hdNode, 0);
```

## HDNode | derivePath()

Derive child HDNode from path

```
bchjs.HDNode.derivePath()
```

*   [Example usage:](#examples-HDNode-derivePath-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// derive hardened child HDNode
bchjs.HDNode.derivePath(hdNode, "m/44'/145'/0'");
```

## HDNode | fromSeed()

HDNode stands for Hierarchically Deterministic node which can be used to create a HD wallet.

```
bchjs.HDNode.fromSeed()
```

*   [Example usage:](#examples-HDNode-fromSeed-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
bchjs.HDNode.fromSeed(seedBuffer);

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
bchjs.HDNode.fromSeed(seedBuffer);
```

## HDNode | fromXPriv()

Generate HDNode from extended private key.

```
bchjs.HDNode.fromXPriv()
```

*   [Example usage:](#examples-HDNode-fromXPriv-0_0_0-0)

```
// mainnet xpriv
bchjs.HDNode.fromXPriv('xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v');

// testnet xpriv
bchjs.HDNode.fromXPriv('tprv8gQ3zr1F5pRHMebqqhorrorYNvUG3XkcZjSWVs2cEtRwwJy1TRhgRx4XcF8dYHM2eyTbTCcdKYNhqgyBQphxwRoVyVKr9zuyoA8WxNDRvom');
```

## HDNode | fromXPub()

Generate HDNode from extended public key.

```
bchjs.HDNode.fromXPub()
```

*   [Example usage:](#examples-HDNode-fromXPub-0_0_0-0)

```
// mainnet xpub
bchjs.HDNode.fromXPub('xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ');

// testnet xpub
bchjs.HDNode.fromXPub('tpubDD669G3VEC6xF7ddjMUTGDWewwzCCrwX933HnP4ufAELmoDn5pXGcSgPnLodjFvWQwRXkG94f77BatEDA8dfQ99yy97kRYynUpNLENEqTBo');
```

## HDNode | isPrivate()

Check if an HDNode can derive both public and private keys and children

```
bchjs.HDNode.isPrivate()
```

*   [Example usage:](#examples-HDNode-isPrivate-0_0_0-0)

```
// mainnet xpub
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPrivate(node);
// false

// mainnet xpriv
let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPrivate(node);
// true

// testnet xpub
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPrivate(node);
// false

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPrivate(node);
// true
```

## HDNode | isPublic()

Check if an HDNode can only derive public keys and children

```
bchjs.HDNode.isPublic()
```

*   [Example usage:](#examples-HDNode-isPublic-0_0_0-0)

```
// mainnet xpub
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPublic(node);
// true

// mainnet xpriv
let xpriv = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPublic(node);
// false

// testnet xpub
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.isPublic(node);
// true

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let node = bchjs.HDNode.fromXPriv(xpriv);
bchjs.HDNode.isPublic(node);
// false
```

## HDNode | sign()

Sign 32 byte hash encoded as a buffer.

```
bchjs.HDNode.sign()
```

*   [Example usage:](#examples-HDNode-sign-0_0_0-0)

```
// mainnet xpriv
let xpriv = 'xprv9z2uWrGjbYPxc728rvtMi4jt4SudRiSfYn6Tdif5XN17pJ1NTbHoHK6JePkPLY1NHXLaQcA6sWudpZDm7DwKhbsGQieAp9wx46Wbio4iXg9';
// hdnode from xpriv
let hdnode = bchjs.HDNode.fromXPriv(xpriv);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
bchjs.HDNode.sign(hdnode, buf);

// testnet xpriv
let xpriv = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
// hdnode from xpriv
let hdnode = bchjs.HDNode.fromXPriv(xpriv);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
bchjs.HDNode.sign(hdnode, buf);
```

## HDNode | toCashAddress()

Get cash address of HDNode.

```
bchjs.HDNode.toCashAddress()
```

*   [Example usage:](#examples-HDNode-toCashAddress-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toCashAddress(hdNode);
// bitcoincash:qqrz6kqw6nvhwgwrt4g7fggepvewtkr7nukkeqf4rw

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toCashAddress(hdNode);
// bitcoincash:qq549jxsjv66kw0smdju4es2axnk7hhe9cquhjg4gt
```

## HDNode | toIdentifier()

hash160 of Node’s public key. The same value you would see in a scriptPubKey.

```
bchjs.HDNode.toIdentifier()
```

*   [Example usage:](#examples-HDNode-toIdentifier-0_0_0-0)

```
// mainnet
let xpub = 'xpub6DWfGUo4cjC8oWmgZdpyFMH6v3oeyADfdUPhsehzn5jX44zpazivha3JxUtkcCvBEB1c6DGaiUmpyz2m1DRfGDEVZ5VxLLW2UNEbZ5iTRvi';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.toIdentifier(node);
// <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>
// the same as if we hash160ed it's publicKey
let publicKeyBuffer = bchjs.HDNode.toPublicKey(node);
bchjs.Crypto.hash160(publicKeyBuffer);
// <Buffer cd d4 84 1d 2e 96 bf bf f7 9c d1 f4 a6 75 22 1c 7f 67 88 9c>

// testnet
let xpub = 'tpubDCxmZ3qLVVphg6NpsnAjQFqDPwr9HYqSgoAcUYAfqSgo32dL6NA8QXqWsS6XTjoGggohZKvujsAv2F2ugej9qfUYau2jSUB4JaYnfMsx3MJ';
let node = bchjs.HDNode.fromXPub(xpub);
bchjs.HDNode.toIdentifier(node);
// <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>
// the same as if we hash160ed it's publicKey
let publicKeyBuffer = bchjs.HDNode.toPublicKey(node);
bchjs.Crypto.hash160(publicKeyBuffer);
// <Buffer e1 8e 20 e3 f8 f1 c0 53 e6 1f 9e 3a 58 8e 71 f5 0b 8d 2d c4>
```

## HDNode | toKeyPair()

Get the ECPair of an HDNode.

```
bchjs.HDNode.toKeyPair()
```

*   [Example usage:](#examples-HDNode-toKeyPair-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer from mnemonic
let rootSeed= await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from root seed
let hdNode = bchjs.HDNode.fromSeed(rootSeed);
// create public key buffer from HDNode
bchjs.HDNode.toKeyPair(hdNode);

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// create public key buffer from HDNode
bchjs.HDNode.toKeyPair(hdNode);
```

## HDNode | toLegacyAddress()

Get legacy address of HDNode

```
bchjs.HDNode.toLegacyAddress()
```

*   [Example usage:](#examples-HDNode-toLegacyAddress-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to legacy address
bchjs.HDNode.toLegacyAddress(hdNode);
// 14apxtw2LDQmXWsS5k4JEhG93Jzjswhvma

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.HDNode.toLegacyAddress(hdNode);
// 14mVsq3H5Ep2Jb6AqoKsmY1BFHKCBGPDLi
```

## HDNode | toPublicKey()

Get the public key of an HDNode as a buffer.

```
bchjs.HDNode.toPublicKey()
```

*   [Example usage:](#examples-HDNode-toPublicKey-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create root seed buffer from mnemonic
let rootSeed= await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from root seed
let hdNode = bchjs.HDNode.fromSeed(rootSeed);
// create public key buffer from HDNode
bchjs.HDNode.toPublicKey(hdNode);
// <Buffer 03 86 d6 d3 db ec 1a 93 8c 2c a2 63 c9 79 8f eb e9 16 09 c5 a2 9b 07 65 c4 79 1f d9 0f fa 4d 27 20>

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// create public key buffer from HDNode
bchjs.HDNode.toPublicKey(hdNode);
// <Buffer 02 d2 26 74 6e 78 03 ac 11 e0 96 c6 24 de e8 dd 62 52 e7 8e 51 56 8a c1 18 62 aa 2a 72 50 1d ea 7d>
```

## HDNode | toSLPAddress()

Get slp address of HDNode.

```
bchjs.SLP.HDNode.toSLPAddress()
```

*   [Example usage:](#examples-HDNode-toSLPAddress-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.SLP.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.SLP.HDNode.toSLPAddress(hdNode);
// simpleledger:qpst7ganm0ucmj3yl7jxvdqrm7tg3zhveg89xjh25d

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.SLP.HDNode.fromSeed(seedBuffer);
// to cash address
bchjs.SLP.HDNode.toSLPAddress(hdNode);
// simpleledger:qqxh2z2z397m4c6u9s5x6wjtku742q8rpvm6al2nrf
```

## HDNode | toWIF()

Get private key in wallet import format (WIF) of HDNode.

```
bchjs.HDNode.toWIF()
```

*   [Example usage:](#examples-HDNode-toWIF-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to WIF
bchjs.HDNode.toWIF(hdNode);
// L5E8QjFnLukp8BuF4uu9gmvvSrbafioURGdBve5tA3Eq5ptzbMCJ

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to WIF
bchjs.HDNode.toWIF(hdNode);
// KwobPFhv3AuXc3ps6YtWfMVRpLBDBA7jnJddurfELTyTNcFhZYpJ
```

## HDNode | toXPriv()

Get extended private key of HDNode.

```
bchjs.HDNode.toXPriv()
```

*   [Example usage:](#examples-HDNode-toXPriv-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended private key
bchjs.HDNode.toXPriv(hdNode);
// xprv9s21ZrQH143K2eMCcbT4qwwRhw6qZaPaEDWB792bnrxQZPoP2JUk4kfEx9eeV1uGTAWAfCqYr4wDWo52qALiukizKwQzvEyNR1fWZJi97Kv

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended private key
bchjs.HDNode.toXPriv(hdNode);
// xprv9s21ZrQH143K2b5GPP6zHz22E6LeCgQXJtwNbC3MA3Kz7Se7tveKo96EhqwFtSkYWkyenVcMqM7uq35PcUNG8cUdpsJEgwKG3dvfP7TmL3v
```

## HDNode | toXPub()

Get extended public key of HDNode.

```
bchjs.HDNode.toXPub()
```

*   [Example usage:](#examples-HDNode-toXPub-0_0_0-0)

```
// create mnemonic
let mnemonic = bchjs.Mnemonic.generate(128);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended public key
bchjs.HDNode.toXPub(hdNode);
// xpub661MyMwAqRbcG4CnhNYoK1r1TKLwQQ1UdC3LHoWFK61rsnzh7Hx35qQ9Z53ucYcE5WvA7GEDXhqqKjSY2e6Y8n7WNVLYHpXCuuX945VPuYn

// generate entropy
let entropy = bchjs.Crypto.randomBytes(32);
// create mnemonic from entropy
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// create seed buffer from mnemonic
let seedBuffer = await bchjs.Mnemonic.toSeed(mnemonic);
// create HDNode from seed buffer
let hdNode = bchjs.HDNode.fromSeed(seedBuffer);
// to extended public key
bchjs.HDNode.toXPub(hdNode);
// xpub661MyMwAqRbcFuMLeHkSbTNwNHG9MQyrAZqV1Q4MEAsmj9MYa5sxg8WC2LKqW6EHviHVucBjWi1n38juZpDDeX3U6YrsMeACdcNSTHkM8BQ
```

## HDNode | verify()

Verify signed 32 byte hash encoded as a buffer.

```
bchjs.HDNode.verify()
```

*   [Example usage:](#examples-HDNode-verify-0_0_0-0)

```
// mainnet xprivs
let xpriv1 = 'xprv9ys4cvcoU8RoqvzxGj886r4Ey3w1WfVNYH8sMnVPVzyQtaPPM6Q8pHm3D9WPWvEupGEgcJ1xLaGaZDcvKfoAurE2AzHRRRup5FuHzDr8n15';
let xpriv2 = 'xprv9ys4cvcoU8RoxqkZ7Fgt33te4LPHgcsKwyoZYVorkzp9uonWxWgP9wiSQhPeBUqVHbdAyov4Yi55RywBkDfZKdJFRqA51Anz6v72zGaMGZp';
// hdnodes from xprivs
let hdnode1 = bchjs.HDNode.fromXPriv(xpriv1);
let hdnode2 = bchjs.HDNode.fromXPriv(xpriv2);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
let signature = bchjs.HDNode.sign(hdnode1, buf);
// verify
bchjs.HDNode.verify(hdnode1, buf, signature);
// true
bchjs.HDNode.verify(hdnode2, buf, signature);
// false

// testnet xprivs
let xpriv1 = 'tprv8ggxJ8SG5EdqakzVUeLa9Gr7sqCdEcJPUNDmtdJscNxfmxoXvU36ZguiUWukJVEWEixAUr8pJabJkCt33wzxFQA587gqN51Lxdxx97zAzuG';
let xpriv2 = 'tprv8ggxJ8SG5EdqiM6Dn63QwHScQ7HS5hXqUMxSD1NEbDyPw6VtoUMFZBAohpTMsPz9cYbpHELmA4Zm79NKRvEvFdhWRX2bSmu7V7PiNb364nv';
// hdnodes from xprivs
let hdnode1 = bchjs.HDNode.fromXPriv(xpriv1);
let hdnode2 = bchjs.HDNode.fromXPriv(xpriv2);
// 32 byte buffer
let buf = Buffer.from(bchjs.Crypto.sha256('EARTH'), 'hex');
// sign
let signature = bchjs.ECPair.sign(hdnode1, buf);
// verify
bchjs.HDNode.verify(hdnode1, buf, signature);
// true
bchjs.HDNode.verify(hdnode2, buf, signature);
// false
```

## Mnemonic

## Mnemonic | findNearestWord()

Returns nearest matching word from provided word list.

```
bchjs.Mnemonic.findNearestWord()
```

*   [Example usage:](#examples-Mnemonic-findNearestWord-0_0_0-0)

```
// english
let word = 'ab';
let wordlist = bchjs.Mnemonic.wordLists().english;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// abandon

// french
let word = 'octu';
let wordlist = bchjs.Mnemonic.wordLists().french;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// octupler

// spanish
let word = 'foobaro';
let wordlist = bchjs.Mnemonic.wordLists().spanish;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// forro

// italian
let word = 'nv';
let wordlist = bchjs.Mnemonic.wordLists().italian;
bchjs.Mnemonic.findNearestWord(word, wordlist);
// neve
```

## Mnemonic | fromEntropy()

Create mnemonic from entropy.

```
bchjs.Mnemonic.fromEntropy()
```

*   [Example usage:](#examples-Mnemonic-fromEntropy-0_0_0-0)

```
// generate 16 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(16);
//
// turn entropy to 12 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// security question relief cruel nephew jump chest copper axis assist gift correct

// generate 20 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(20);
//
// turn entropy to 15 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt

// generate 24 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(24);
//
// turn entropy to 18 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real

// generate 28 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(28);
//
// turn entropy to 21 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel

// generate 32 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(32);
//
// turn entropy to 24 word mnemonic
bchjs.Mnemonic.fromEntropy(entropy)
// vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property

// generate 16 bytes of entropy
let entropy = bchjs.Crypto.randomBytes(16);
//
```

## Mnemonic | generate()

Generate BIP39 mnemonic from entropy.

```
bchjs.Mnemonic.generate()
```

*   [Example usage:](#examples-Mnemonic-generate-0_0_0-0)

```
// generate 12 word mnemonic
bchjs.Mnemonic.generate(128);
// boil lonely casino manage habit where total glory muffin name limit mansion

// generate 15 word mnemonic
bchjs.Mnemonic.generate(160);
// steak prevent estate save dance design close noise cheap season among train sleep ketchup gas

// generate 18 word mnemonic
bchjs.Mnemonic.generate(192);
// fever endorse purpose normal fashion desert blood robust prevent clean guard display raise virtual again unit banana rich

// generate 21 word mnemonic
bchjs.Mnemonic.generate(224);
// scan pink shock describe chicken edit budget exit camera morning awesome silk inner pair sea few flock walnut write mountain surface

// generate 24 word mnemonic
bchjs.Mnemonic.generate(256);
// disagree tide elbow citizen jazz cinnamon bridge certain april settle pact film always inmate border inform solution that submit produce cloth balcony upper maid

// generate 12 french word mnemonic
bchjs.Mnemonic.generate(128, bitbox.Mnemonic.wordLists().french);
// annonce ampleur sanglier peser acheter cultiver abroger embellir résoudre dialogue grappin lanterne

// generate 256 bit korean word mnemonic
bchjs.Mnemonic.generate(256, bitbox.Mnemonic.wordLists().korean)
// 기능 단추 교육 비난 시집 근육 운동 코미디 숟가락 과목 한동안 유적 시리즈 삼월 앞날 유난히 흰색 사실 논문 장사 어른 논문 의논 장차
```

## Mnemonic | toEntropy()

Turn mnemonic to entropy.

```
bchjs.Mnemonic.toEntropy()
```

*   [Example usage:](#examples-Mnemonic-toEntropy-0_0_0-0)

```
// turn 12 word mnemonic to entropy
let mnemonic = 'security question relief cruel nephew jump chest copper axis assist gift correct';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer c2 d5 f2 d5 1a 49 44 f1 c9 e1 7f 10 e1 b9 87 18>

// turn 15 word mnemonic to entropy
let mnemonic = 'impact hub pattern turkey cruel adult short moment make toe one actress roast yellow hurt';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 71 cd d2 85 75 53 48 07 b1 b4 77 86 9c 72 6a 81 6b b1 fe 1b>

// turn 18 word mnemonic to entropy
let mnemonic = 'bid quantum chronic marriage swing affair record amateur enhance heart object mind spoon speak toast piece chef real';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 16 15 e8 a1 c4 2d c0 08 ac f0 3d 4a 8d 4a 60 46 7d 29 a1 b8 c5 23 27 56>

// turn 21 word mnemonic to entropy
let mnemonic = 'orchard rural giant okay tape pipe luggage clap bring wear ticket slot fiscal seminar crazy robot distance current dizzy swarm barrel';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer 9c 17 b1 86 cc fd dd 4a a1 31 4e 1c 3f 0f 86 e6 05 79 87 0c b5 d9 3f a6 c1 00 ed b1>

// turn 24 word mnemonic to entropy
let mnemonic = 'vibrant solution level obtain cheap damage october giant chalk cushion assist fossil spawn artist rice edit proof hotel process survey gas sausage mouse property';
bchjs.Mnemonic.toEntropy(mnemonic)
// <Buffer f3 79 da 02 cc 42 6e 6e 26 43 0d 25 e6 cc 37 2d fd 0a 1a 2e 4a 33 ac 4d c6 ae 6d 56 01 7f 64 2d>
```

## Mnemonic | toKeypairs()

Returns an array of privateKeyWIF/publicAddress pairs. It generates the addresses as the nth external change address of the first account from that mnemonic w/ this derivation path: m/44’/145’/0’/0/n

```
bchjs.Mnemonic.toKeypairs()
```

*   [Example usage:](#examples-Mnemonic-toKeypairs-0_0_0-0)

```
// First create a mnemonic from 32 bytes of random entropy
let entropy = bchjs.Crypto.randomBytes(32);
// <Buffer bd 94 ad 86 be 19 5e 6c 51 b1 aa 52 b3 61 0b f8 9a 5d db 43 ac ee 8a ea 3a 38 6c ac 75 9e b5 42>
let mnemonic = bchjs.Mnemonic.fromEntropy(entropy);
// rural pistol giant label nominee curtain egg crystal famous only drill van place unit attitude oven memory fade mix sun shrug soon steak easily

// Then call toKeypairs and pass in your mnemonic and how many keypairs you'd like
bchjs.Mnemonic.toKeypairs(mnemonic, 5)
// [ { privateKeyWIF: 'KwuSgSuV6m3U1oahRQEhSQ6e4gRE6LZXNGDTETGPGotKQJdH7ADd',
//     address: 'bitcoincash:qqvk7aculs8r6t29pj23de35t43tupks2ua6wmc2hy' },
//   { privateKeyWIF: 'L34pfoBm2swLBX5vAx1ReeYbSnpsvu7DRVaiLW8e9wNEJw5p3mV5',
//     address: 'bitcoincash:qzt8ju6au2075cpzrhzwe5n96ycqnurarur5k92nd5' },
//   { privateKeyWIF: 'L2nCRgDzmTRrQzSssFvVA7xiYHBJyfj62jdDwu1bTjHKVoLGxsqs',
//     address: 'bitcoincash:qpdjwtyvqqaapykxr3pr6cty4gpww30aucam9l0qzn' },
//   { privateKeyWIF: 'KyDLLa4RZKhnBP78Ue6557B55Jmffu1y8mH8p8WKA12knJUjiq4u',
//     address: 'bitcoincash:qq8kee4k4h9fn22xya9p5u203vg69aat3usqdvkdkn' },
//   { privateKeyWIF: 'L5gB66JqhfouEtZG5aRMQ9JaVS2ggkK3YozGfzZegBupaPXqdfaz',
//     address: 'bitcoincash:qphwlpu2wzjxrjts94pn4wh778fwsu2afg2aj5her9' } ]
```

## Mnemonic | toSeed()

Create root seed from mnemonic. Returns a Promise.

```
bchjs.Mnemonic.toSeed()
```

*   [Example usage:](#examples-Mnemonic-toSeed-0_0_0-0)

```
await bchjs.Mnemonic.toSeed('enable stem left method one submit coach bid inspire cluster armed bracket')
// <Buffer 0a fa b7 46 8f 0c df 79 0f 0e 44 37 45 0c 33 c3 c8 27 17 42 75 d6 13 02 c3 55 de ef 2e 69 57 e4 f5 dd 55 b6 a8 73 78 6d b8 09 36 75 af 4f 6b 2c 52 63 ... >

await bchjs.Mnemonic.toSeed('vendor talk alone sick balance tissue number armor frequent plug transfer chest', 'password');
// <Buffer 2d a5 46 52 36 a4 1c 90 bf c5 38 c9 78 16 03 26 1f 70 7c 67 44 aa e0 97 fa 96 1b a1 23 16 a0 e2 0c f6 ac b6 09 cc 2f af 9a 99 50 b3 f9 a9 be c9 f4 19 ... >

await bchjs.Mnemonic.toSeed('idea relax weird defense body bronze champion ancient vocal peanut similar dose grit company peasant gate sunset deal library act include penalty annual main', '');
// <Buffer c1 56 36 5b 0f 2a 16 04 dd 6f 53 ad 7d 0a 4c 14 ba 38 f9 81 fb 18 0f df c3 14 6e 6a fc d8 af 2f 1f c4 2c b2 d3 65 8a 31 2e a8 48 59 12 bd f0 f1 8d e4 ... >

await bchjs.Mnemonic.toSeed('bus aware census desk orphan zebra fashion host try muscle pig close jealous slice elegant prison reject ship great program trumpet syrup tray remove', '');
// <Buffer f4 2c e8 e1 88 d1 5a 66 5c 18 c0 cf ae df 09 3c 75 d2 4c 47 9d 52 87 f4 be c0 6b 13 e7 da 04 01 a3 50 36 87 22 1f ee cf c8 57 e8 6e ae bb 17 4b 83 60 ... >

await bchjs.Mnemonic.toSeed('frost deliver coin clutch upon round scene wonder various wise luggage country', 'yayayayay');
// <Buffer 1d 00 9f a3 a8 86 51 a4 04 d5 03 3d eb 6d b1 01 e2 f1 3b c3 c8 6d 1f b9 93 b4 d1 33 dc 84 21 12 2c 9b 52 10 ba d8 96 15 e0 b0 9a 34 33 52 f8 07 c8 c4 ... >
```

## Mnemonic | validate()

Validate mnemonic.

```
bchjs.Mnemonic.validate()
```

*   [Example usage:](#examples-Mnemonic-validate-0_0_0-0)

```
bchjs.Mnemonic.validate('ca', bchjs.Mnemonic.wordLists().english)
// ca is not in wordlist, did you mean cabbage?

bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
// Valid mnemonic

bchjs.Mnemonic.validate('boil lonely casino manage habit where total glory muffin name limit mansion boil lonely casino manage habit where total glory muffin name limit mansion', bitbox.Mnemonic.wordLists().english)
// Invalid mnemonic
```

## Mnemonic | wordLists()

Return mnemonic word lists.

```
bchjs.Mnemonic.wordLists()
```

*   [Example usage:](#examples-Mnemonic-wordLists-0_0_0-0)

```
bchjs.Mnemonic.wordLists();
// {
//   EN: [],
//   JA: [],
//   chinese_simplified: [],
//   chinese_traditional: [],
//   english: [],
//   french: [],
//   italian: [],
//   japanese: [],
//   korean: [],
//   spanish: []
// }
```

## PSF SLP

## PSF SLP | balance()

Return slp balance for a single address.

```
bchjs.PsfSlpIndexer.balance()
```

*   [Example usage:](#examples-PSF_SLP-SLP_Balance-0_0_0-0)

```
(async () => {
  try {
    let balance = await bchjs.PsfSlpIndexer.balance('bitcoincash:qzmd5vxgh9m22m6fgvm57yd6kjnjl9qnwywsf3583n')
    console.log(balance)
  } catch(error) {
   console.error(error)
  }
})()

 {
   balance: {
     utxos: [
       {
         txid: 'a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9',
         vout: 1,
         type: 'token',
         qty: '1800',
         tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
         address: 'bitcoincash:qrqy3kj7r822ps6628vwqq5k8hyjl6ey3y4eea2m4s'
       }
     ],
     txs: [
       {
         txid: '078b2c48ed1db0d5d5996f2889b8d847a49200d0a781f6aa6752f740f312688f',
         height: 717796
       },
       {
         txid: 'a24a6a4abf06fabd799ecea4f8fac6a9ff21e6a8dd6169a3c2ebc03665329db9',
         height: 717832
       }
     ],
     balances: [
       {
         tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
         qty: '1800'
       }
     ]
   }
 }
```

## PSF SLP | getTokenData()

Get mutable and immutable data if the token contains them.

```
bchjs.PsfSlpIndexer.getTokenData()
```

*   [Example usage:](#examples-PSF_SLP-Token_Data-0_0_0-0)

```
(async () => {
  try {
    let tokenData = await bchjs.PsfSlpIndexer.getTokenData('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(tokenData)
  } catch(error) {
   console.error(error)
  }
})()

{
  genesisData: {
    type: 1,
    ticker: 'TROUT',
    name: "Trout's test token",
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    documentUri: 'troutsblog.com',
    documentHash: '',
    decimals: 2,
    mintBatonIsActive: true,
    tokensInCirculationBN: '100098953386',
    tokensInCirculationStr: '100098953386',
    blockCreated: 622414,
    totalBurned: '1046614',
    totalMinted: '100100000000'
    ]
  },
 immutableData :{
    issuer:"FullStack.cash.",
    website:"https://fullstack.cash/",
    dateCreated:"2022-01-11"
  },
 mutableData :{
   "tokenIcon":"https://gateway.ipfs.io/ipfs/bafybeiehitanirn5gmhqjg44xrmdtomn4n5lu5yjoepsvgpswk5mggaw6i/LP_logo-1.png",
   "about":"Mutable data managed with npm package: https://www.npmjs.com/package/slp-mutable-data"
  }
}
```

## PSF SLP | getTokenData2()

Get token icon and other media associated with a token.

Get the icon for a token, given it's token ID. This function expects a string input of a token ID property. This function returns an object with a tokenIcon property that contains the URL to the icon.

The output object always have these properties:

*   tokenIcon: A url to the token icon, if it exists.
*   tokenStats: Data about the token from psf-slp-indexer.
*   optimizedTokenIcon: An alternative, potentially more optimal, url to the token icon, if it exists.
*   iconRepoCompatible: true if the token icon is available via token.bch.sx
*   ps002Compatible: true if the token icon is compatible with PS007 specification.

```
bchjs.PsfSlpIndexer.getTokenData2()
```

*   [Example usage:](#examples-PSF_SLP-Token_Data-0_0_0-0)

```
(async () => {
  try {
    let tokenData = await bchjs.PsfSlpIndexer.getTokenData2('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(tokenData)
  } catch(error) {
   console.error(error)
  }
})()

{
  tokenStats: {
    type: 1,
    ticker: 'CTAIA006',
    name: 'CTAIA006 - AI Art by Chris Troutner',
    tokenId: '0e4543f820699294ab57e02ee2b1815a8bbc7b17a4333e4a138034e4b2324a61',
    documentUri: 'ipfs://bafybeia5yuq7rg6jmwquako7t277cwrobcunz7cumqrv4wn6bgfvthemku',
    documentHash: '78a00e9db312b8fff4e5c37cf592be83e6bab7f3bd5a54c9545bad5d4f3ee0f5',
    decimals: 0,
    mintBatonIsActive: false,
    tokensInCirculationBN: '1',
    tokensInCirculationStr: '1',
    blockCreated: 757507,
    totalBurned: '0',
    totalMinted: '1'
  },
  mutableData: {
    tokenIcon: 'https://bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm.ipfs.w3s.link/whale-night-sky-01.png',
    fullSizedUrl: '',
    about: 'This NFT was created using the PSF Token Studio at https://nft-creator.fullstack.cash',
    userData: ''
  },
  immutableData: {
    issuer: 'http://psfoundation.cash',
    website: 'https://nft-creator.fullstack.cash',
    dateCreated: '9/12/2022, 5:17:38 PM',
    userData: '{\n' +
      '  "title": "CTAIA006 - AI Art by Chris Troutner",\n' +
      '  "about": "AI generated art. Generated from DALL-E at https://labs.openai.com",\n' +
      '  "prompt": "whale swimming through a sky full of stars",\n' +
      '  "algorithm": "DALL-E (stable diffusion)",\n' +
      '  "set": "1-of-2"\n' +
      '}'
  },
  tokenIcon: 'https://bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm.ipfs.w3s.link/whale-night-sky-01.png',
  fullSizedUrl: '',
  optimizedTokenIcon: 'https://p2wdb-gateway-678.fullstack.cash/ipfs/bafybeihiv5jvlhoymmbous3h2akotogj6b7hruhjcj3zq7dsfteimuuttm/whale-night-sky-01.png',
  optimizedFullSizedUrl: '',
  iconRepoCompatible: false,
  ps002Compatible: true
}
```

## PSF SLP | status()

Return status from psf slp indexer.

```
bchjs.PsfSlpIndexer.status()
```

*   [Example usage:](#examples-PSF_SLP-Status-0_0_0-0)

```
(async () => {
  try {
    let status = await bchjs.PsfSlpIndexer.status()
    console.log(status)
  } catch(error) {
   console.error(error)
  }
})()

 {
   "status": {
     "startBlockHeight": 543376,
     "syncedBlockHeight": 723249,
     "chainBlockHeight": 722679
    }
 }
```

## PSF SLP | tokenStats()

Return list stats for a single slp token. The second input is a Boolean, which determins the the transaction history of the token is included in the returned data. The default is false.

```
bchjs.PsfSlpIndexer.tokenStats()
```

*   [Example usage:](#examples-PSF_SLP-Token_Stats-0_0_0-0)

```
(async () => {
  try {
    let tokenStats = await bchjs.PsfSlpIndexer.tokenStats('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2', true)
    console.log(tokenStats)
  } catch(error) {
   console.error(error)
  }
})()

{
  tokenData: {
    type: 1,
    ticker: 'TROUT',
    name: "Trout's test token",
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    documentUri: 'troutsblog.com',
    documentHash: '',
    decimals: 2,
    mintBatonIsActive: true,
    tokensInCirculationBN: '100098953386',
    tokensInCirculationStr: '100098953386',
    blockCreated: 622414,
    totalBurned: '1046614',
    totalMinted: '100100000000'
    txs: [
      {
        txid: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
        height: 622414,
        type: 'GENESIS',
        qty: '100000000000'
      }
    ]
  }
}
```

## PSF SLP | tx()

Return slp transaction data.

```
bchjs.PsfSlpIndexer.tx()
```

*   [Example usage:](#examples-PSF_SLP-SLP_Transaction_Data-0_0_0-0)

```
(async () => {
  try {
    let txData = await bchjs.PsfSlpIndexer.tx('a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2')
    console.log(txData)
  } catch(error) {
   console.error(error)
  }
})()

{
  txData: {
    txid: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    hash: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    version: 2,
    size: 339,
    locktime: 0,
    vin: [
      {
        txid: '8370db30d94761ab9a11b71ecd22541151bf6125c8c613f0f6fab8ab794565a7',
        vout: 0,
        scriptSig: {
          asm: '304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4[ALL|FORKID] 02791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851',
          hex: '47304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4412102791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851'
        },
        sequence: 4294967295,
        address: 'bitcoincash:qpvsg9vl9a5mlf37a7n3yce6pktdctn73qwgaqm3wq',
        value: 0.00051303,
        tokenQty: 0,
        tokenQtyStr: '0',
        tokenId: null
      }
    ],
    vout: [
      {
        value: 0,
        n: 0,
        scriptPubKey: {
          asm: 'OP_RETURN 5262419 1 47454e45534953 54524f5554 54726f75742773207465737420746f6b656e 74726f757473626c6f672e636f6d 0 2 2 000000174876e800',
          hex: '6a04534c500001010747454e455349530554524f55541254726f75742773207465737420746f6b656e0e74726f757473626c6f672e636f6d4c000102010208000000174876e800',
          type: 'nulldata'
        },
        tokenQtyStr: '0',
        tokenQty: 0
      }
    ],
    hex: '0200000001a7654579abb8faf6f013c6c82561bf51115422cd1eb7119aab6147d930db7083000000006a47304402207e9631c53dfc8a9a793d1916469628c6b7c5780c01c2f676d51ef21b0ba4926f022069feb471ec869a49f8d108d0aaba04e7cd36e60a7500109d86537f55698930d4412102791b19a39165dbd83403d6df268d44fd621da30581b0b6e5cb15a7101ed58851ffffffff040000000000000000476a04534c500001010747454e455349530554524f55541254726f75742773207465737420746f6b656e0e74726f757473626c6f672e636f6d4c000102010208000000174876e80022020000000000001976a914db4d39ceb7794ffe5d06855f249e1d3a7f1b024088ac22020000000000001976a914db4d39ceb7794ffe5d06855f249e1d3a7f1b024088accec20000000000001976a9145904159f2f69bfa63eefa712633a0d96dc2e7e8888ac00000000',
    blockhash: '0000000000000000009f65225a3e12e23a7ea057c869047e0f36563a1f410267',
    confirmations: 97398,
    time: 1581773131,
    blocktime: 1581773131,
    blockheight: 622414,
    isSlpTx: true,
    tokenTxType: 'GENESIS',
    tokenId: 'a4fb5c2da1aa064e25018a43f9165040071d9e984ba190c222a7f59053af84b2',
    tokenType: 1,
    tokenTicker: 'TROUT',
    tokenName: "Trout's test token",
    tokenDecimals: 2,
    tokenUri: 'troutsblog.com',
    tokenDocHash: '',
    isValidSlp: true
  }
}
```

## Price

## Price | getBchaUsd()

Return current price of BCHA in USD. This endpoint gets the USD price of XEC from the Coinex API. The price denominated in BCHA comes from bch-api, so it has a better chance of working in Tor.

```
bchjs.price.getBchaUsd()
```

*   [Example usage:](#examples-Price-Price_getBchaUsd\(\)-0_0_0-0)

```
(async () => {
 try {
   let current = await bchjs.Price.getBchaUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 212.34
```

## Price | getBchUsd()

Return current price of BCH in USD. This endpoint gets the USD price of BCH from the Coinex API. The price comes from bch-api, so it has a better chance of working in Tor.

```
bchjs.price.getBchUsd()
```

*   [Example usage:](#examples-Price-Price_getBchUsd\(\)-0_0_0-0)

```
(async () => {
 try {
   let current = await bchjs.Price.getBchUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 512.81
```

## Price | getUsd()

Return current price of BCH in USD. This endpoint gets the USD price of BCH from the Coinbase API. The price comes from bch-api, so it has a better chance of working in Tor.

```
bchjs.price.getUsd()
```

*   [Example usage:](#examples-Price-Price_getUsd\(\)-0_0_0-0)

```
(async () => {
 try {
   let current = await bchjs.Price.getUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 266.81
```

## Price | getXecUsd()

Return current price of XEC in USD. This endpoint gets the USD price of XEC from the Coinex API. The price comes from bch-api, so it has a better chance of working in Tor.

```
bchjs.price.getXecUsd()
```

*   [Example usage:](#examples-Price-Price_getXecUsd\(\)-0_0_0-0)

```
(async () => {
 try {
   let current = await bchjs.Price.getXecUsd();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

// 0.00021234
```

## Price | rates()

Return current price of BCH in several different currencies. This endpoint gets the price of BCH from the Coinbase API in many different currencies. The price comes from bch-api, so it has a better chance of working in Tor.

```
bchjs.price.rates()
```

*   [Example usage:](#examples-Price-Price_rates\(\)-0_0_0-0)

```
(async () => {
 try {
   let current = await bchjs.Price.rates();
   console.log(current);
 } catch(err) {
  console.error(err)
 }
})()

{
  AED: "915.049218",
  AFN: "19144.48874646",
  ALGO: "826.6633482661356600405",
  ...
  ZRX: "644.844402797695193656",
  ZWL: "80215.03"
}
```

## RawTransactions

## RawTransactions | decodeRawTransaction()

Return an Array of JSON objects representing the serialized, hex-encoded transactions.

```
bchjs.RawTransactions.decodeRawTransaction()
```

*   [Example usage:](#examples-RawTransactions-decodeRawTransaction-0_0_0-0)

```
(async () => {
try {
let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction('01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000');
console.log(decodeRawTransaction);
} catch(error) {
console.error(error)
}
})()

// { txid: 'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin:
//    [ { txid:
//         '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
//        vout: 0,
//        scriptSig: [Object],
//        sequence: 4294967295 } ],
//   vout: [ { value: 12.5, n: 0, scriptPubKey: [Object] } ] }

(async () => {
 try {
   let decodeRawTransaction = await bchjs.RawTransactions.decodeRawTransaction([
     '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000',
     '01000000013ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a000000006a4730440220540986d1c58d6e76f8f05501c520c38ce55393d0ed7ed3c3a82c69af04221232022058ea43ed6c05fec0eccce749a63332ed4525460105346f11108b9c26df93cd72012103083dfc5a0254613941ddc91af39ff90cd711cdcde03a87b144b883b524660c39ffffffff01807c814a000000001976a914d7e7c4e0b70eaa67ceff9d2823d1bbb9f6df9a5188ac00000000'
   ]);
   console.log(decodeRawTransaction);
 } catch(error) {
  console.error(error)
 }
})()

// [ { txid:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ] },
// { txid:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   hash:
//    'd86c34adaeae19171fd98fe0ffd89bfb92a1e6f0339f5e4f18d837715fd25758',
//   size: 191,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ] } ]
```

## RawTransactions | decodeScript()

Decode hex-encoded scripts.

```
bchjs.RawTransactions.decodeScript()
```

*   [Example usage:](#examples-RawTransactions-decodeScript-0_0_0-0)

```
(async () => {
try {
 let decodeScript = await bchjs.RawTransactions.decodeScript('4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16');
 console.log(decodeScript);
} catch(error) {
 console.error(error)
}
})()

// { asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16', type: 'nonstandard', p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }


(async () => {
try {
 let decodeScript = await bchjs.RawTransactions.decodeScript(['4830450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed592012102e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16']);
 console.log(decodeScript);
} catch(error) {
console.error(error)
}
})()

// [{ asm: '30450221009a51e00ec3524a7389592bc27bea4af5104a59510f5f0cfafa64bbd5c164ca2e02206c2a8bbb47eabdeed52f17d7df668d521600286406930426e3a9415fe10ed59201 02e6e1423f7abde8b70bca3e78a7d030e5efabd3eb35c19302542b5fe7879c1a16',
// type: 'nonstandard',
// p2sh: 'bitcoincash:pqwndulzwft8dlmqrteqyc9hf823xr3lcc7ypt74ts' }]
```

## RawTransactions | getRawTransaction()

Return the raw transaction data. If verbose is 'true', returns an Object with information about 'txid'. If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'.

```
bchjs.RawTransactions.getRawTransaction()
```

*   [Example usage:](#examples-RawTransactions-getRawTransaction-0_0_0-0)

```
(async () => {
try {
 let getRawTransaction = await bchjs.RawTransactions.getRawTransaction("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(getRawTransaction);
} catch(error) {
console.error(error)
}
})()

//  01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000

(async () => {
try {
 let getRawTransaction = await bchjs.RawTransactions.getRawTransaction([
   "0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098",
   "b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f"
 ], true);
 console.log(getRawTransaction);
} catch(error) {
console.error(error)
}
})()

// [ { hex:
//  '01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000',
//   txid:
//    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
//   hash:
//    '0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098',
//   size: 134,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object] ],
//   blockhash:
//    '00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048',
//   confirmations: 581882,
//   time: 1231469665,
//   blocktime: 1231469665 },
// { hex:
//    '01000000010f3cb469bc82f931ee77d80b3dd495d02f9ed7cdc455cea3e7baa4bdeea6a78d000000006a47304402205ce3e1dfe4b5207818ce27035bc7cc03a5631f806d351535b32ce77c8d136aed02204e66e1fa4c2e12feab0d41a5593aff9629cdbc6ccb6126bc3d1a20404be7760c412103d44946d17e00179bbfc3b723aedc1831d8604e6a04bbd91170f1d894d04657bbffffffff02e6ec8500000000001976a914b5befddad83d9180fd4082c5528cf5a779b0fa6688acdf220000000000001976a9142c21a1be4239eeed678a456627a08d5f813d5c9288ac00000000',
//   txid:
//    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
//   hash:
//    'b25d24fbb42d84812ed2cb55797f10fdec41afc7906ab563d1ec8c8676a2037f',
//   size: 225,
//   version: 1,
//   locktime: 0,
//   vin: [ [Object] ],
//   vout: [ [Object], [Object] ],
//   blockhash:
//    '000000000000000003a09a7d68a0d62fd0ab51c368372e46bac84277e2df47e2',
//   confirmations: 16151,
//   time: 1547752564,
//   blocktime: 1547752564 } ]
```

## RawTransactions | getTxData()

Returns an object of transaction data, including addresses for input UTXOs.

This function is equivalent to running `getRawTransaction (txid, true)`, execept the `vin` array will be populated with an `address` property that contains the `bitcoincash:` address of the sender for each input.

This function will only work with a single txid. It does not yet support an array of TXIDs.

```
bchjs.RawTransactions.getTxData()
```

*   [Example usage:](#examples-RawTransactions-getTxData-0_0_0-0)

```
(async () => {
try {
 let txData = await bchjs.RawTransactions.getTxData("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()
```

## RawTransactions | sendRawTransaction()

Submits raw transaction (serialized, hex-encoded) to local node and network. Also see createrawtransaction and signrawtransaction calls.

For bulk uploads, transactions must use different UTXOs.

```
bchjs.RawTransactions.sendRawTransaction()
```

*   [Example usage:](#examples-RawTransactions-sendRawTransaction-0_0_0-0)

```
// single tx
(async () => {
try {
 let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction("01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000");
 console.log(sendRawTransaction);
} catch(error) {
 console.error(error)
}
})()
// 0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098

// single tx as array
(async () => {
try {
 let sendRawTransaction = await bchjs.RawTransactions.sendRawTransaction(["01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0704ffff001d0104ffffffff0100f2052a0100000043410496b538e853519c726a2c91e61ec11600ae1390813a627c66fb8be7947be63c52da7589379515d4e0a604f8141781e62294721166bf621e73a82cbf2342c858eeac00000000"]);
 console.log(sendRawTransaction);
} catch(error) {
 console.error(error)
}
})()
// ['0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098']
```

## SLP

## SLP | detectAddressFormat()

Detect address format.

```
bchjs.SLP.Address.detectAddressFormat()
```

*   [Example usage:](#examples-SLP-detectAddressFormat-0_0_0-0)

```
// mainnet cashaddr
bchjs.SLP.Address.detectAddressFormat('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// cashaddr

// mainnet slpaddr
bchjs.SLP.Address.detectAddressFormat('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// slpaddr

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// slpaddr

// mainnet legacy
bchjs.SLP.Address.detectAddressFormat('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// legacy

// cashaddr testnet
bchjs.SLP.Address.detectAddressFormat('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// cashaddr

// slpaddr testnet
bchjs.SLP.Address.detectAddressFormat('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// slpaddr

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressFormat('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// slpaddr

// legacy testnet
bchjs.SLP.Address.detectAddressFormat('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// legacy
```

## SLP | detectAddressNetwork()

Detect address network.

```
bchjs.SLP.Address.detectAddressNetwork()
```

*   [Example usage:](#examples-SLP-detectAddressNetwork-0_0_0-0)

```
// mainnet cashaddr
bchjs.SLP.Address.detectAddressNetwork('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// mainnet

// mainnet slpaddr
bchjs.SLP.Address.detectAddressNetwork('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// mainnet

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// mainnet

// mainnet legacy
bchjs.SLP.Address.detectAddressNetwork('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// mainnet

// cashaddr testnet
bchjs.SLP.Address.detectAddressNetwork('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// testnet

// slpaddr testnet
bchjs.SLP.Address.detectAddressNetwork('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// testnet

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressNetwork('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// testnet

// legacy testnet
bchjs.SLP.Address.detectAddressNetwork('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// testnet
```

## SLP | detectAddressType()

Detect address type.

```
bchjs.SLP.Address.detectAddressType()
```

*   [Example usage:](#examples-SLP-detectAddressType-0_0_0-0)

```
// mainet cashaddr
bchjs.SLP.Address.detectAddressType('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// mainet cashaddr w/ no prefix
bchjs.SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s');
// p2pkh

// mainet slpaddr
bchjs.SLP.Address.detectAddressType('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
// p2pkh

// mainet slpaddr w/ no prefix
bchjs.SLP.Address.detectAddressType('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w');
// p2pkh

// mainet legacy
bchjs.SLP.Address.detectAddressType('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74');
// p2pkh

// cashaddr testnet
bchjs.SLP.Address.detectAddressType('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy');
// p2pkh

// slpaddr testnet
bchjs.SLP.Address.detectAddressType('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
// p2pkh

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.detectAddressType('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse');
// p2pkh

// legacy testnet
bchjs.SLP.Address.detectAddressType('mqc1tmwY2368LLGktnePzEyPAsgADxbksi');
// p2pkh
```

## SLP | isMainnetAddress()

Detect if mainnet address.

```
bchjs.SLP.Address.isMainnetAddress()
```

*   [Example usage:](#examples-SLP-isMainnetAddress-0_0_0-0)

```

// mainnet cashaddr
bchjs.SLP.Address.isMainnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet slpaddr
bchjs.SLP.Address.isMainnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.isMainnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet legacy
bchjs.SLP.Address.isMainnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// testnet cashaddr
bchjs.SLP.Address.isMainnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// testnet slpaddr
bchjs.SLP.Address.isMainnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isMainnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// testnet legacy
bchjs.SLP.Address.isMainnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## SLP | isP2PKHAddress()

Detect if p2pkh address.

```
bchjs.SLP.Address.isP2PKHAddress()
```

*   [Example usage:](#examples-SLP-isP2PKHAddress-0_0_0-0)

```
// mainnet cashaddr
bchjs.SLP.Address.isP2PKHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet w/ no cashaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// true

// mainnet slpaddr
bchjs.SLP.Address.isP2PKHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet w/ no slpaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// legacy
bchjs.SLP.Address.isP2PKHAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// true

// cashaddr testnet
bchjs.SLP.Address.isP2PKHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// slpaddr testnet
bchjs.SLP.Address.isP2PKHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isP2PKHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// legacy testnet
bchjs.SLP.Address.isP2PKHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true
```

## SLP | isP2SHAddress()

Detect if p2sh address.

```
bchjs.SLP.Address.isP2SHAddress()
```

*   [Example usage:](#examples-SLP-isP2SHAddress-0_0_0-0)

```
// mainnet cashaddr
bchjs.SLP.Address.isP2SHAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// mainnet slpaddr
bchjs.SLP.Address.isP2SHAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// mainnet legacy
bchjs.SLP.Address.isP2SHAddress('1NoYQso5UF6XqC4NbjKAp2EnjJ59yLNn74')
// false

// cashaddr testnet
bchjs.SLP.Address.isP2SHAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// cashaddr testnet w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// false

// slpaddr testnet
bchjs.SLP.Address.isP2SHAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// slpaddr testnet w/ no prefix
bchjs.SLP.Address.isP2SHAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// false

// legacy testnet
bchjs.SLP.Address.isP2SHAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## SLP | isSLPAddress()

Detect if slpAddr encoded address.

```
bchjs.SLP.Address.isSLPAddress()
```

*   [Example usage:](#examples-SLP-isSLPAddress-0_0_0-0)

```

// mainnet slpaddr
bchjs.SLP.Address.isSLPAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet w/ no slpaddr prefix
bchjs.SLP.Address.isSLPAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// true

// mainnet legacy
bchjs.SLP.Address.isSLPAddress('18HEMuar5ZhXDFep1gEiY1eoPPcBLxfDxj')
// false

// testnet w/ slpaddr prefix
bchjs.SLP.Address.isSLPAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isSLPAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet legacy
bchjs.SLP.Address.isSLPAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// false
```

## SLP | isTestnetAddress()

Detect if testnet address.

```
bchjs.SLP.Address.isTestnetAddress()
```

*   [Example usage:](#examples-SLP-isTestnetAddress-0_0_0-0)

```
// cashaddr mainnet
bchjs.SLP.Address.isTestnetAddress('bitcoincash:qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
//false

// w/ no cashaddr prefix
bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2qrcyj5x0s')
// false

// slpaddr mainnet
bchjs.SLP.Address.isTestnetAddress('simpleledger:qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
//false

// w/ no slpaddr prefix
bchjs.SLP.Address.isTestnetAddress('qqfx3wcg8ts09mt5l3zey06wenapyfqq2q0r0fpx3w')
// false

// legacy mainnet
bchjs.SLP.Address.isTestnetAddress('14krEkSaKoTkbFT9iUCfUYARo4EXA8co6M')
// false

// cashaddr testnet
bchjs.SLP.Address.isTestnetAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// testnet w/ no cashaddr prefix
bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// true

// slpaddr testnet
bchjs.SLP.Address.isTestnetAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet w/ no slpaddr prefix
bchjs.SLP.Address.isTestnetAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// true

// testnet legacy
bchjs.SLP.Address.isTestnetAddress('mqc1tmwY2368LLGktnePzEyPAsgADxbksi')
// true
```

## SLP | toCashAddress()

Converting legacy or slpaddr to cashAddress format.

```
bchjs.SLP.Address.toCashAddress()
```

*   [Example usage:](#examples-SLP-toCashAddress-0_0_0-0)

```
// mainnet legacy
bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet legacy return no prefix
bchjs.SLP.Address.toCashAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet slpaddr
bchjs.SLP.Address.toCashAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet slpaddr no prefix
bchjs.SLP.Address.toCashAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// tesnet legacy
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet legacy return no prefix
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// tesnet cashaddr
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// bchtest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3

// testnet cashaddr no prefix
bchjs.SLP.Address.toCashAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqxgrr9ku3
```

## SLP | toLegacyAddress()

Converting cashaddr or slpaddr to legacy address format.

```
bchjs.SLP.Address.toLegacyAddress()
```

*   [Example usage:](#examples-SLP-toLegacyAddress-0_0_0-0)

```

// mainnet cashaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet cashaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet slpaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// mainnet slpaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp')
// 1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN

// testnet cashaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('bchtest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet cashaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggt9t0a6zy')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet slpaddr w/ prefix
bchjs.SLP.Address.toLegacyAddress('slptest:qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi

// testnet slpaddr w/ no prefix
bchjs.SLP.Address.toLegacyAddress('qph2v4mkxjgdqgmlyjx6njmey0ftrxlnggs3v58dse')
// mqc1tmwY2368LLGktnePzEyPAsgADxbksi
```

## SLP | toSLPAddress()

Converting legacy or cashaddr to slpAddress format.

```
bchjs.SLP.Address.toSLPAddress()
```

*   [Example usage:](#examples-SLP-toSLPAddress-0_0_0-0)

```
// mainnet legacy
bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzd

// mainnet legacy return no prefix
bchjs.SLP.Address.toSLPAddress('1HiaTupadqQN66Tvgt7QSE5Wg13BUy25eN', false)
// qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl

// mainnet cashaddr
bchjs.SLP.Address.toSLPAddress('bitcoincash:qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

// mainnet slpaddr no prefix
bchjs.SLP.Address.toSLPAddress('qzm47qz5ue99y9yl4aca7jnz7dwgdenl85jkfx3znl')
// simpleledger:qzm47qz5ue99y9yl4aca7jnz7dwgdenl857dzayzdp

// testnet legacy
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// testnet legacy return no prefix
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// tesnet cashaddr
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx')
// slptest:qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv

// testnet cashaddr no prefix
bchjs.SLP.Address.toSLPAddress('msDbtTj7kWXPpYaR7PQmMK84i66fJqQMLx', false)
// qzq9je6pntpva3wf6scr7mlnycr54sjgeqauyclpwv
```

## SLP | toSLPAddress()

Get slp address of ECPair.

```
bchjs.SLP.ECPair.toSLPAddress()
```

*   [Example usage:](#examples-SLP-toSLPAddress-0_0_0-0)

```
// create ecpair from wif
let ecpair = bchjs.SLP.ECPair.fromWIF('cUCSrdhu7mCzx4sWqL6irqzprkofxPmLHYgkSnG2WaWVqJDXtWRS')
// to slp address
bchjs.SLP.ECPair.toSLPAddress(ecpair);
// slptest:qq835u5srlcqwrtwt6xm4efwan30fxg9hcqag6fk03
```

## SLP NFT1

## SLP NFT1 | generateNFTChildGenesisOpReturn()

Generate the OP\_RETURN value needed to create an SLP NFT Child token. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.NFT1.generateNFTChildGenesisOpReturn()
```

*   [Example usage:](#examples-SLP_NFT1-generateNFTChildGenesisOpReturn-0_0_0-0)

```

 const configObj = {
   name: "NFT Child",
   ticker: "NFTC",
   documentUrl: "https://FullStack.cash",
 }

 const result = await bchjs.SLP.NFT1.generateNFTChildGenesisOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
```

## SLP NFT1 | generateNFTChildSendOpReturn()

Generate the OP\_RETURN value needed to send an SLP NFT Child token to another address. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.NFT1.generateNFTChildSendOpReturn()
```

*   [Example usage:](#examples-SLP_NFT1-generateNFTChildSendOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" && // UTXO is not a minting baton.
    utxo.tokenType === 65 // UTXO is for an NFT Child
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.NFT1.generateNFTChildSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
```

## SLP NFT1 | generateNFTGroupSendOpReturn()

Generate the OP\_RETURN value needed to send an SLP NFT Group token to another address. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.NFT1.generateNFTGroupSendOpReturn()
```

*   [Example usage:](#examples-SLP_NFT1-generateNFTGroupSendOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" && // UTXO is not a minting baton.
    utxo.tokenType === 129 // UTXO is for an NFT Group
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.NFT1.generateNFTGroupSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
```

## SLP NFT1 | mintNFTGroupOpReturn()

Generate the OP\_RETURN value needed to create an SLP Mint transaction for an NFT Group token. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.NFT1.mintNFTGroupOpReturn()
```

*   [Example usage:](#examples-SLP_NFT1-mintNFTGroupOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the minting baton.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.utxoType === "minting-baton" && // UTXO is not a minting baton.
    utxo.tokenType === 129 // UTXO is for NFT Group
  )
  return true;
});

// Generate the SLP OP_RETURN
const slpData = bchjs.SLP.NFT1.mintNFTGroupOpReturn(
  tokenUtxos,
  1 // Mint 1 new token.
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
```

## SLP NFT1 | newNFTGroupOpReturn()

Generate the OP\_RETURN value needed to create an SLP NFT Group token. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.NFT1.newNFTGroupOpReturn()
```

*   [Example usage:](#examples-SLP_NFT1-newNFTGroupOpReturn-0_0_0-0)

```

 const configObj = {
   name: "SLP Test Token",
   ticker: "SLPTEST",
   documentUrl: "https://FullStack.cash",
   initialQty: 1
 }

 const result = await bchjs.SLP.NFT1.newNFTGroupOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/tree/master/applications/slp/nft
```

## SLP TokenType1

## SLP TokenType1 | generateBurnOpReturn()

Generate the OP\_RETURN value needed to create a SLP Send transaction that burns tokens. This is a slight variation of generateSendOpReturn(). It generates a SLP SEND transaction designed to burn a select quantity of tokens.

It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.TokenType1.generateBurnOpReturn()
```

*   [Example usage:](#examples-SLP_TokenType1-generateBurnOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateBurnOpReturn(
  tokenUtxos,
  10 // Burn 10 tokens
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/burn-tokens/burn-tokens.js
```

## SLP TokenType1 | generateGenesisOpReturn()

Generate the OP\_RETURN value needed to create a new SLP token class.

Expects a config object as input, see the example for properties.:

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.TokenType1.generateGenesisOpReturn()
```

*   [Example usage:](#examples-SLP_TokenType1-generateGenesisOpReturn-0_0_0-0)

```

 const configObj = {
   name: "SLP Test Token",
   ticker: "SLPTEST",
   documentUrl: "https://FullStack.cash",
   documentHash: "",
   decimals: 8,
   initialQty: 10
 }

 const result = await bchjs.SLP.TokenType1.generateGenesisOpReturn(
   configObj
 )

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/create-token/create-token.js
```

## SLP TokenType1 | generateMintOpReturn()

Generate the OP\_RETURN value needed to create an SLP Mint transaction. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.TokenType1.generateMintOpReturn()
```

*   [Example usage:](#examples-SLP_TokenType1-generateMintOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the minting baton.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.utxoType === "minting-baton" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SLP OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateMintOpReturn(
  tokenUtxos,
  100 // Mint 100 new tokens.
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/mint-token/mint-token.js
```

## SLP TokenType1 | generateSendOpReturn()

Generate the OP\_RETURN value needed to create an SLP Send transaction. It's assumed all elements in the tokenUtxos array belong to the same token.

Returns a Buffer representing a transaction output, ready to be added to the Transaction Builder.

```
bchjs.SLP.TokenType1.generateSendOpReturn()
```

*   [Example usage:](#examples-SLP_TokenType1-generateSendOpReturn-0_0_0-0)

```

const addr = "bitcoincash:qq6xz6wwcy78uh79vgjvfyahj4arq269w5an8pcjak"
const utxos = await bchjs.Blockbook.utxos(addr)

// Identify the SLP token UTXOs.
let tokenUtxos = await bchjs.SLP.Utils.tokenUtxoDetails(utxos);

// Filter out the token UTXOs that match the user-provided token ID.
tokenUtxos = tokenUtxos.filter((utxo, index) => {
  if (
    utxo && // UTXO is associated with a token.
    utxo.tokenId === TOKENID && // UTXO matches the token ID.
    utxo.tokenType === "token" // UTXO is not a minting baton.
  )
  return true;
});

// Generate the SEND OP_RETURN
const slpData = bchjs.SLP.TokenType1.generateSendOpReturn(
  tokenUtxos,
  TOKENQTY
);

...
// Add OP_RETURN as first output.
transactionBuilder.addOutput(slpData, 0);

// See additional code here:
// https://github.com/Permissionless-Software-Foundation/bch-js-examples/blob/master/applications/slp/send-token/send-token.js
```

## SLP TokenType1 | getHexOpReturn()

Get hex representation of an SLP OP\_RETURN This command returns a hex encoded OP\_RETURN for SLP Send (Token Type 1) transactions. Rather than computing it directly, it calls bch-api to do the heavy lifting. This is easier and lighter weight for web apps.

```
bchjs.SLP.TokenType1.getHexOpReturn()
```

*   [Example usage:](#examples-SLP_TokenType1-getHexOpReturn-0_0_0-0)

```

const tokenUtxos = [{
 tokenId: "0a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1",
 decimals: 0,
 tokenQty: 2
}]

const sendQty = 1.5

const result = await bchjs.SLP.TokenType1.getHexOpReturn(tokenUtxos, sendQty)

// result:
{
  "script": "6a04534c500001010453454e44200a321bff9761f28e06a268b14711274bb77617410a16807bd0437ef234a072b1080000000000000001080000000000000000",
  "outputs": 2
}
```

## SLP Utils

## SLP Utils | decodeOpReturn()

Retrieves transactions data from a txid and decodes the SLP OP\_RETURN data.

Throws an error if given a non-SLP txid.

If optional associative array parameter cache is used, will cache and reuse responses for the same input.

A third optional input, `usrObj`, is used by bch-api for managing rate limits. It can be safely ignored when writing apps using this call.

```
bchjs.SLP.Utils.decodeOpReturn()
```

*   [Example usage:](#examples-SLP_Utils-decodeOpReturn-0_0_0-0)

```

(async () => {
try {
 const txid =
  "266844d53e46bbd7dd37134688dffea6e54d944edff27a0add63dd0908839bc1"

 const data = await bchjs.SLP.Utils.decodeOpReturn(txid)

 console.log(`Decoded OP_RETURN data: ${JSON.stringify(data,null,2)}`)
} catch (error) {
 console.error(error)
}
})()

// returns
{
 "tokenType": 1,
 "txType": "SEND",
 "tokenId": "497291b8a1dfe69c8daea50677a3d31a5ef0e9484d8bebb610dac64bbc202fb7"
 "amounts": [
   "100000000",
   "99883300000000"
 ]
}
```

## Schnorr

## Schnorr | batchVerify()

Verify a list of 64-byte signatures as a batch operation. Throws an Error if verification fails.

```
bchjs.Schnorr.batchVerify()
```

*   [Example usage:](#examples-Schnorr-batchVerify-0_0_0-0)

```
const Buffer = require("safe-buffer").Buffer
const publicKeys = [
Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
),
Buffer.from(
"03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
"hex"
),
Buffer.from(
"026D7F1D87AB3BBC8BC01F95D9AECE1E659D6E33C880F8EFA65FACF83E698BBBF7",
"hex"
)
]
const messages = [
Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
),
Buffer.from(
"5E2D58D8B3BCDF1ABADEC7829054F90DDA9805AAB56C77333024B9D0A508B75C",
"hex"
),
Buffer.from(
"B2F0CD8ECB23C1710903F872C31B0FD37E15224AF457722A87C5E0C7F50FFFB3",
"hex"
)
]
const signatures = [
Buffer.from(
"2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
"hex"
),
Buffer.from(
"00DA9B08172A9B6F0466A2DEFD817F2D7AB437E0D253CB5395A963866B3574BE00880371D01766935B92D2AB4CD5C8A2A5837EC57FED7660773A05F0DE142380",
"hex"
),
Buffer.from(
"68CA1CC46F291A385E7C255562068357F964532300BEADFFB72DD93668C0C1CAC8D26132EB3200B86D66DE9C661A464C6B2293BB9A9F5B966E53CA736C7E504F",
"hex"
)
]
try {
bchjs.Schnorr.batchVerify(publicKeys, messages, signatures)
console.log("The signatures are valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}
```

## Schnorr | computeEll()

Generate ell which is the hash over all public keys participating in a session.

```
bchjs.Schnorr.computeEll()
```

*   [Example usage:](#examples-Schnorr-computeEll-0_0_0-0)

```
const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

const publicData = {
pubKeys: [
Buffer.from(
  "03846f34fdb2345f4bf932cb4b7d278fb3af24f44224fb52ae551781c3a3cad68a",
  "hex"
),
Buffer.from(
  "02cd836b1d42c51d80cef695a14502c21d2c3c644bc82f6a7052eb29247cf61f4f",
  "hex"
),
Buffer.from(
  "03b8c1765111002f09ba35c468fab273798a9058d1f8a4e276f45a1f1481dd0bdb",
  "hex"
)
],
message: bchjs.Schnorr.hash(Buffer.from("muSig is awesome!", "utf8")),
pubKeyHash: null,
pubKeyCombined: null,
commitments: [],
nonces: [],
nonceCombined: null,
partialSignatures: [],
signature: null
}

// data only known by the individual party, these values are never shared
// between the signers!
const signerPrivateData = [
// signer 1
{
privateKey: BigInteger.fromHex(
  "add2b25e2d356bec3770305391cbc80cab3a40057ad836bcb49ef3eed74a3fee"
),
session: null
},
// signer 2
{
privateKey: BigInteger.fromHex(
  "0a1645eef5a10e1f5011269abba9fd85c4f0cc70820d6f102fb7137f2988ad78"
),
session: null
},
// signer 3
{
privateKey: BigInteger.fromHex(
  "2031e7fed15c770519707bb092a6337215530e921ccea42030c15d86e8eaf0b8"
),
session: null
}
]

// -----------------------------------------------------------------------
// Step 1: Combine the public keys
// The public keys P_i are combined into the combined public key P.
// This can be done by every signer individually or by the initializing
// party and then be distributed to every participant.
// -----------------------------------------------------------------------
publicData.pubKeyHash = bchjs.Schnorr.computeEll(publicData.pubKeys)
```

## Schnorr | nonInteractive()

Aggregates multiple signatures of different private keys over the same message into a single 64-byte signature using a scheme that is safe from rogue-key attacks.

This non-interactive scheme requires the knowledge of all private keys that are participating in the multi-signature creation.

```
bchjs.Schnorr.nonInteractive()
```

*   [Example usage:](#examples-Schnorr-nonInteractive-0_0_0-0)

```
const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

const privateKey1 = BigInteger.fromHex(
"B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
)
const privateKey2 = BigInteger.fromHex(
"C90FDAA22168C234C4C6628B80DC1CD129024E088A67CC74020BBEA63B14E5C7"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const aggregatedSignature = bchjs.Schnorr.nonInteractive(
[privateKey1, privateKey2],
message
)

// verifying an aggregated signature
const publicKey1 = Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
)
const publicKey2 = Buffer.from(
"03FAC2114C2FBB091527EB7C64ECB11F8021CB45E8E7809D3C0938E4B8C0E5F84B",
"hex"
)
const X = bchjs.Schnorr.publicKeyCombine([publicKey1, publicKey2])
try {
bchjs.Schnorr.verify(X, message, aggregatedSignature)
console.log("The signature is valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}
```

## Schnorr | partialSign()

Creates a partial signature s\_i for a participant.

```
bchjs.Schnorr.partialSign()
```

*   [Example usage:](#examples-Schnorr-partialSign-0_0_0-0)

```
// continued from above
// -----------------------------------------------------------------------
// Step 6: Generate partial signatures
// Every participant can now create their partial signature s_i over the
// given message.
// -----------------------------------------------------------------------
signerPrivateData.forEach(data => {
data.session.partialSignature = bchjs.Schnorr.partialSign(
data.session,
publicData.message,
publicData.nonceCombined,
publicData.pubKeyCombined
)
})
```

## Schnorr | partialSignaturesCombine()

Combines multiple partial signatures into a Schnorr signature (s, R) that can be verified against the combined public key P.

```
bchjs.Schnorr.partialSignaturesCombine()
```

*   [Example usage:](#examples-Schnorr-partialSignaturesCombine-0_0_0-0)

```
// continued from above
// -----------------------------------------------------------------------
// Step 9: Combine partial signatures
// Finally, the partial signatures can be combined into the full signature
// (s, R) that can be verified against combined public key P.
// -----------------------------------------------------------------------
publicData.signature = bchjs.Schnorr.partialSignaturesCombine(
publicData.nonceCombined,
publicData.partialSignatures
)

// -----------------------------------------------------------------------
// Step 10: Verify signature
// The resulting signature can now be verified as a normal Schnorr
// signature (s, R) over the message m and public key P.
// -----------------------------------------------------------------------
bchjs.Schnorr.verify(
publicData.pubKeyCombined,
publicData.message,
publicData.signature
)
```

## Schnorr | partialSignatureVerify()

Verifies a partial signature s\_i against the participant's public key P\_i. Throws an Error if verification fails.

```
bchjs.Schnorr.partialSignatureVerify()
```

*   [Example usage:](#examples-Schnorr-partialSignatureVerify-0_0_0-0)

```
// continued from above
// -----------------------------------------------------------------------
// Step 7: Exchange partial signatures (communication round 3)
// The partial signature of each signer is exchanged with the other
// participants. Simulated here by copying.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.partialSignatures[i] =
signerPrivateData[i].session.partialSignature
}

// -----------------------------------------------------------------------
// Step 8: Verify individual partial signatures
// Every participant should verify the partial signatures received by the
// other participants.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
bchjs.Schnorr.partialSignatureVerify(
signerSession,
publicData.partialSignatures[i],
publicData.nonceCombined,
i,
publicData.pubKeys[i],
publicData.nonces[i]
)
}
```

## Schnorr | publicKeyCombine()

Creates the special rogue-key-resistant combined public key P by applying the MuSig coefficient to each public key P\_i before adding them together.

```
bchjs.Schnorr.publicKeyCombine()
```

*   [Example usage:](#examples-Schnorr-publicKeyCombine-0_0_0-0)

```
// continued from above
publicData.pubKeyCombined = bchjs.Schnorr.publicKeyCombine(
publicData.pubKeys,
publicData.pubKeyHash
)
```

## Schnorr | sessionInitialize()

Creates a signing session. Each participant must create a session and must not share the content of the session apart from the commitment and later the nonce.

```
bchjs.Schnorr.sessionInitialize()
```

*   [Example usage:](#examples-Schnorr-sessionInitialize-0_0_0-0)

```
// continued from above
// -----------------------------------------------------------------------
// Step 2: Create the private signing session
// Each signing party does this in private. The session ID *must* be
// unique for every call to sessionInitialize, otherwise it's trivial for
// an attacker to extract the secret key!
// -----------------------------------------------------------------------
signerPrivateData.forEach((data, idx) => {
const sessionId = bchjs.Crypto.randomBytes(32) // must never be reused between sessions!
data.session = bchjs.Schnorr.sessionInitialize(
sessionId,
data.privateKey,
publicData.message,
publicData.pubKeyCombined,
publicData.pubKeyHash,
idx
)
})
const signerSession = signerPrivateData[0].session
```

## Schnorr | sessionNonceCombine()

Combines multiple nonces R\_i into the combined nonce R.

```
bchjs.Schnorr.sessionNonceCombine()
```

*   [Example usage:](#examples-Schnorr-sessionNonceCombine-0_0_0-0)

```
// continued from above
// -----------------------------------------------------------------------
// Step 3: Exchange commitments (communication round 1)
// The signers now exchange the commitments H(R_i). This is simulated here
// by copying the values from the private data to public data array.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.commitments[i] = signerPrivateData[i].session.commitment
}

// -----------------------------------------------------------------------
// Step 4: Get nonces (communication round 2)
// Now that everybody has commited to the session, the nonces (R_i) can be
// exchanged. Again, this is simulated by copying.
// -----------------------------------------------------------------------
for (let i = 0; i < publicData.pubKeys.length; i++) {
publicData.nonces[i] = signerPrivateData[i].session.nonce
}

// -----------------------------------------------------------------------
// Step 5: Combine nonces
// The nonces can now be combined into R. Each participant should do this
// and keep track of whether the nonce was negated or not. This is needed
// for the later steps.
// -----------------------------------------------------------------------
publicData.nonceCombined = bchjs.Schnorr.sessionNonceCombine(
signerSession,
publicData.nonces
)
signerPrivateData.forEach(
data => (data.session.nonceIsNegated = signerSession.nonceIsNegated)
)
```

## Schnorr | sign()

Sign a 32-byte message with the private key, returning a 64-byte signature.

```
bchjs.Schnorr.sign()
```

*   [Example usage:](#examples-Schnorr-sign-0_0_0-0)

```
const Buffer = require("safe-buffer").Buffer
const BigInteger = require("bigi")

// signing
const privateKey = BigInteger.fromHex(
"B7E151628AED2A6ABF7158809CF4F3C762E7160F38B4DA56A784D9045190CFEF"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const createdSignature = bchjs.Schnorr.sign(privateKey, message)
console.log("The signature is: " + createdSignature.toString("hex"))
// The signature is: 2a298dacae57395a15d0795ddbfd1dcb564da82b0f269bc70a74f8220429ba1d1e51a22ccec35599b8f266912281f8365ffc2d035a230434a1a64dc59f7013fd
```

## Schnorr | verify()

Verify a 64-byte signature of a 32-byte message against the public key. Throws an Error if verification fails.

```
bchjs.Schnorr.verify()
```

*   [Example usage:](#examples-Schnorr-verify-0_0_0-0)

```
const Buffer = require("safe-buffer").Buffer
const publicKey = Buffer.from(
"02DFF1D77F2A671C5F36183726DB2341BE58FEAE1DA2DECED843240F7B502BA659",
"hex"
)
const message = Buffer.from(
"243F6A8885A308D313198A2E03707344A4093822299F31D0082EFA98EC4E6C89",
"hex"
)
const signatureToVerify = Buffer.from(
"2A298DACAE57395A15D0795DDBFD1DCB564DA82B0F269BC70A74F8220429BA1D1E51A22CCEC35599B8F266912281F8365FFC2D035A230434A1A64DC59F7013FD",
"hex"
)
try {
bchjs.Schnorr.verify(publicKey, message, signatureToVerify)
console.log("The signature is valid.")
} catch (e) {
console.error("The signature verification failed: " + e)
}
```

## Script

## Script | classifyInput()

Classify transaction input.

```
bchjs.Script.classifyInput()
```

*   [Example usage:](#examples-Script-classifyInput-0_0_0-0)

```
let pubkeyInput = "3045022100ba2c3b717e023966cb16df65ca83f77029e2a5b80c47c47b6956474ac9ff281302201d48ee3292439e284a6654a0e79ac2b8f7fff5c6b0d715260aa296501a239c6441";
bchjs.Script.classifyInput(bchjs.Script.fromASM(pubkeyInput));
// pubkey

let pubkeyhashInput = "30440220280d4a9954c5afe24089bdd545466bd7a8caad8b295e30de9d3cb5e56fccf64e022036663b2c53b5fac674b4b935b53e2a4ea88dfc71c9b879870976d82887542ab441 02969479fa9bea3082697dce683ac05b13ae63016b41d5ca1a450ad40f6c543751";
bchjs.Script.classifyInput(bchjs.Script.fromASM(pubkeyhashInput));
// pubkeyhash

let multisigInput = "OP_0 3045022100fe324541215798b2df68cbd44039615e23c506d4ec1a05572064392a98196b82022068c849fa6699206da2fc6d7848efc1d3804a5816d6293615fe34c1a7f34e1c2f01 3044022001ab168e80b863fdec694350b587339bb72a37108ac3c989849251444d13ebba02201811272023e3c1038478eb972a82d3ad431bfc2408e88e4da990f1a7ecbb263901 3045022100aaeb7204c17eee2f2c4ff1c9f8b39b79e75e7fbf33e92cc67ac51be8f15b75f90220659eee314a4943a6384d2b154fa5821ef7a084814d7ee2c6f9f7f0ffb53be34b01";
bchjs.Script.classifyInput(bchjs.Script.fromASM(multisigInput));
// multisig

let scripthashInput = "OP_0 304402207515cf147d201f411092e6be5a64a6006f9308fad7b2a8fdaab22cd86ce764c202200974b8aca7bf51dbf54150d3884e1ae04f675637b926ec33bf75939446f6ca2801 3045022100ef253c1faa39e65115872519e5f0a33bbecf430c0f35cf562beabbad4da24d8d02201742be8ee49812a73adea3007c9641ce6725c32cd44ddb8e3a3af460015d140501 522102359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1210395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a52ae";
bchjs.Script.classifyInput(bchjs.Script.fromASM(scripthashInput));
// scripthash
```

## Script | classifyOutput()

Classify transaction output.

```
bchjs.Script.classifyOutput()
```

*   [Example usage:](#examples-Script-classifyOutput-0_0_0-0)

```
let nullDataOutput = "OP_RETURN 424348466f7245766572796f6e65";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(nullDataOutput));
// nulldata

let pubkeyOutput = "02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 OP_CHECKSIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(pubkeyOutput));
// pubkey

let pubkeyhashOutput = "OP_DUP OP_HASH160 aa4d7985c57e011a8b3dd8e0e5a73aaef41629c5 OP_EQUALVERIFY OP_CHECKSIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(pubkeyhashOutput));
// pubkeyhash

let multisigOutput = "OP_2 02359c6e3f04cefbf089cf1d6670dc47c3fb4df68e2bad1fa5a369f9ce4b42bbd1 0395a9d84d47d524548f79f435758c01faec5da2b7e551d3b8c995b7e06326ae4a OP_2 OP_CHECKMULTISIG";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(multisigOutput));
// multisig

let scripthashOutput = "OP_HASH160 722ff0bc2c3f47b35c20df646c395594da24e90e OP_EQUAL";
bchjs.Script.classifyOutput(bchjs.Script.fromASM(scripthashOutput));
// scripthash
```

## Script | decode()

Decode a Script buffer.

```
bchjs.Script.decode()
```

*   [Example usage:](#examples-Script-decode-0_0_0-0)

```
// decode P2PKH scriptSig buffer
let scriptSigBuffer = Buffer.from("483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb", 'hex');
bchjs.Script.decode(scriptSigBuffer);
// [ <Buffer 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 2b ... >, <Buffer 02 fb 72 1b 92 02 5e 77 5b 1b 84 77 4e 65 d5 68 d2 46 45 cb 63 32 75 f5 c2 6f 5c 31 01 b2 14 a8 fb> ]

// decode P2PKH scriptPubKey buffer
let scriptPubKeyBuffer = Buffer.from("76a91424e9c07804d0ee7e5bda934e0a3ae8710fc007dd88ac", 'hex');
bchjs.Script.decode(scriptPubKeyBuffer);
// [ 118,
// 169,
// <Buffer 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd>,
// 136,
// 172 ]
```

## Script | encode()

Encode a Script buffer with minimal push data. This function is used for Script files like CashScript. However, it will mangle the OP\_RETURN of an SLP token transaction and will burn the tokens as a result. Use encode2() instead for that.

```
bchjs.Script.encode()
```

*   [Example usage:](#examples-Script-encode-0_0_0-0)

```
// encode P2PKH scriptSig to buffer
let scriptSig = [
Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
]
bchjs.Script.encode(scriptSig);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// encode P2PKH scriptPubKey to buffer
let scriptPubKey = [
118,
169,
Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
136,
172
];
bchjs.Script.encode(scriptPubKey);
// <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>
```

## Script | encode2()

Encode a Script buffer without minimal push data. This should be used if encode() does not produce the desired results. This should be used for compiling SLP OP\_RETURNs.

```
bchjs.Script.encode2()
```

*   [Example usage:](#examples-Script-encode2-0_0_0-0)

```
// encode P2PKH scriptSig to buffer
let scriptSig = [
Buffer.from('3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601', 'hex'),
Buffer.from('02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex')
]
bchjs.Script.encode2(scriptSig);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// encode P2PKH scriptPubKey to buffer
let scriptPubKey = [
118,
169,
Buffer.from('24e9c07804d0ee7e5bda934e0a3ae8710fc007dd', 'hex'),
136,
172
];
bchjs.Script.encode2(scriptPubKey);
// <Buffer 76 a9 14 24 e9 c0 78 04 d0 ee 7e 5b da 93 4e 0a 3a e8 71 0f c0 07 dd 88 ac>
```

## Script | fromASM()

Script ASM to buffer.

```
bchjs.Script.fromASM()
```

*   [Example usage:](#examples-Script-fromASM-0_0_0-0)

```
// P2PKH scriptSig
let scriptSigASM = "3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb";
bchjs.Script.fromASM(scriptSigASM);
// <Buffer 48 30 45 02 21 00 87 7e 2f 9c 28 42 1f 0a 85 0c c8 ff 66 ba 1d 0f 6c 8d be 9e 63 e1 99 c2 c2 60 0c 9c 15 bf 9d 44 02 20 4d 35 b1 3d 3c c2 02 aa 25 72 ... >

// P2PKH scriptPubKey
let scriptPubKeyASM = "OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG";
bchjs.Script.fromASM(scriptPubKeyASM);
// <Buffer 76 a9 14 be e4 18 2d 9f bc 89 31 a7 28 41 0a 0c d3 e0 f3 40 f2 99 5a 88 ac>
```

## Script | toASM()

Script buffer to ASM.

```
bchjs.Script.toASM()
```

*   [Example usage:](#examples-Script-toASM-0_0_0-0)

```
// P2PKH scriptSig
let scriptSigBuffer = Buffer.from('483045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a6012102fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb', 'hex');
bchjs.Script.toASM(scriptSigBuffer);
// 3045022100877e2f9c28421f0a850cc8ff66ba1d0f6c8dbe9e63e199c2c2600c9c15bf9d4402204d35b13d3cc202aa25722b2b1791442ebc5c39d898b609515260ad08f0e766a601 02fb721b92025e775b1b84774e65d568d24645cb633275f5c26f5c3101b214a8fb

// P2PKH scriptPubKey
let scriptBuffer = Buffer.from("76a914bee4182d9fbc8931a728410a0cd3e0f340f2995a88ac", 'hex');
bchjs.Script.toASM(scriptBuffer);
// OP_DUP OP_HASH160 bee4182d9fbc8931a728410a0cd3e0f340f2995a OP_EQUALVERIFY OP_CHECKSIG
```

## Transaction

## Transaction | get()

Returns an object of transaction data, including addresses for input UTXOs. If it is a SLP token transaction, the token information for inputs and outputs will also be included.

```
bchjs.Transaction.get()
```

*   [Example usage:](#examples-Transaction-get-0_0_0-0)

```
(async () => {
try {
 let txData = await bchjs.Transaction.get("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()
```

## Transaction | getTokenInfo()

Given the TXID of a token transaction, it will return data about that token by retrieving the data from the Genesis transaction and docoding the OP\_RETURN.

```
bchjs.Transaction.getTokenInfo()
```

*   [Example usage:](#examples-Transaction-getTokenInfo-0_0_0-0)

```
(async () => {
try {
 let txData = await bchjs.Transaction.getTokenInfo("0e3e2357e806b6cdb1f70b54c3a3a17b6714ee1f0e68bebb44a74b1efd512098");
 console.log(txData);
} catch(error) {
console.error(error)
}
})()
```

## TransactionBuilder

## TransactionBuilder | addInput()

Add input to transaction.

```
bchjs.Transaction-Builder.addInput()
```

*   [Example usage:](#examples-TransactionBuilder-AddInput-0_0_0-0)

```
// txid of vout
let txid = 'f7890915febe580920df2681d2bac0909ae89bd0cc1d3ed763e5eeba7f337f0e';
// add input with txid and index of vout
transactionBuilder.addInput(txid, 0);
```

## TransactionBuilder | addOutput()

Add output to transaction.

```
bchjs.Transaction-Builder.addOutput()
```

*   [Example usage:](#examples-TransactionBuilder-AddOutput-0_0_0-0)

```
let originalAmount = 100000;
let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
// amount to send to receiver. It's the original amount - 1 sat/byte for tx size
let sendAmount = originalAmount - byteCount;
// add output w/ address and amount to send
transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
```

## TransactionBuilder | build()

Build transaction.

```
bchjs.Transaction-Builder.build()
```

*   [Example usage:](#examples-TransactionBuilder-Build_-0_0_0-0)

```
// build tx
let tx = bchjs.transactionBuilder.build();
```

## TransactionBuilder | setLockTime()

Set locktime.

```
bchjs.Transaction-Builder.setLockTime()
```

*   [Example usage:](#examples-TransactionBuilder-SetLockTime-0_0_0-0)

```
let originalAmount = 100000;
let byteCount = bchjs.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
// amount to send to receiver. It's the original amount - 1 sat/byte for tx size
let sendAmount = originalAmount - byteCount;
// add output w/ address and amount to send
transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);
transactionBuilder.setLockTime(50000)
```

## TransactionBuilder | sign()

Sign transaction. It creates the unlocking script needed to spend an input. Each input has its own script and thus 'sign' must be called for each input even if the keyPair is the same..

```
bchjs.Transaction-Builder.sign()
```

*   [Example usage:](#examples-TransactionBuilder-Sign_-0_0_0-0)

```
let originalAmount = 100000;
// node of address which is going to spend utxo
let hdnode = bchjs.HDNode.fromXPriv("xprvA3eaDg64MwDr72PVGJ7CkvshNAzCDRz7rn98sYrZVAtDSWCAmNGQhEQeCLDcnmcpSkfjhHevXmu4ZL8ZcT9D4vEbG8LpiToZETrHZttw9Yw");
// keypair
let keyPair = bchjs.HDNode.toKeyPair(hdnode);
// empty redeemScript variable
let redeemScript;
// sign w/ keyPair
transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount, transactionBuilder.signatureAlgorithms.SCHNORR);
```

## UTXO

## UTXO | findBiggestUtxo()

Get the biggest UTXO in an array.

Given an array of BCH UTXOs, this method will return the biggest UTXO. This is often the simplest way to pick a UTXO for generating a transaction.

```
bchjs.Utxo.findBiggestUtxo()
```

*   [Example usage:](#examples-UTXO-findBiggestUtxo-0_0_0-0)

```
(async () => {
  try {
    const utxos = await bchjs.Utxo.get('bitcoincash:qq54fgjn3hz0357n8a6guy4demw9xfkjk5jcj0xr0z');
    const utxo = bchjs.Utxo.findBiggestUtxo(utxos[0].bchUtxos)
    console.log(utxo);
  } catch(error) {
   console.error(error)
  }
})()

// returns
 {
  "height": 655431,
  "tx_hash": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
  "tx_pos": 0,
  "value": 800,
  "txid": "7a091716f8137e94f87e7760648cd34a17e32754ef95f7c7bda38a635c9b2b1b",
  "vout": 0,
  "isValid": false,
  "satoshis": 800
 }
```

## UTXO | get()

Get UTXOs for an address (from psf-slp-indexer)

Given an address, this function will return an object with thre following properties:

*   address: "" - the address these UTXOs are associated with

*   bchUtxos: \[] - UTXOs confirmed to be spendable as normal BCH

*   infoUtxos: \[] - UTXOs under of 1000 sats or less that can not be categorized as another type of UTXO (like a token).

*   nullUtxo: \[] - UTXOs that did not pass SLP validation. Should be ignored and not spent, to be safe.

*   slpUtxos: {} - UTXOs confirmed to be colored as valid SLP tokens

    *   type1: {}

        *   tokens: \[] - SLP token Type 1 tokens.
        *   mintBatons: \[] - SLP token Type 1 mint batons.

    *   nft: {}

        *   tokens: \[] - NFT tokens
        *   groupTokens: \[] - NFT Group tokens, used to create NFT tokens.
        *   groupMintBatons: \[] - Minting baton to create more NFT Group tokens.

```
bchjs.Utxo.get()
```

*   [Example usage:](#examples-UTXO-get-0_0_0-0)

```
(async () => {
  try {
    let utxos = await bchjs.Utxo.get('simpleledger:qrm0c67wwqh0w7wjxua2gdt2xggnm90xwsr5k22euj');
    console.log(utxos);
  } catch(error) {
   console.error(error)
  }
})()

// returns
[
 {
  "address": "bitcoincash:qrm0c67wwqh0w7wjxua2gdt2xggnm90xws00a3lezv",
  "bchUtxos": [
   {
     "height": 674513,
     "tx_hash": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     "tx_pos": 3,
     "value": 38134,
     "txid": "705bcc442e5a2770e560b528f52a47b1dcc9ce9ab6a8de9dfdefa55177f00d04",
     "vout": 3,
     "isValid": false
   }
  ],
```

## UTXO | isValid()

Validate that UTXO exists and is still spendable.

Given a UTXO, this method will return true if the UTXO is still in the mempool and still valid for spending. It will return false if the UTXO has been spent.

```
bchjs.Utxo.isValid()
```

*   [Example usage:](#examples-UTXO-isValid-0_0_0-0)

```
(async () => {
  try {
    const utxos = await bchjs.Utxo.get('bitcoincash:qq54fgjn3hz0357n8a6guy4demw9xfkjk5jcj0xr0z');
    const isValid = bchjs.Utxo.isValid(utxos.bchUtxos[0])
    console.log(isValid);
  } catch(error) {
   console.error(error)
  }
})()

// returns
 true
```

## Util

## Util | chunk100()

chunk up an array into multiple arrays of 100 elements each. Input: arrayToSlice - a one-dimensional array of elements. Returns a two-dimensional array. An array of 100-element arrays.

```
bchjs.Util.chunk100()
```

*   [Example usage:](#examples-Util-chunk100-0_0_0-0)

```
(async () => {
  try {
     const bigArray = [0,1,2,3,4,5,6,7,8,9,10,...,148, 149, 150]

     const chunked = bchjs.Util.chunk20(bigArray)
     console.log(chunked)
  } catch(error) {
     console.error(error)
  }
})()

// returns
 [
   [0,1,2,3,4,5,6,7,8,9,10,11,...,98,99],
   [100,101,102,...,148,149,150]
 ]
```

## Util | chunk20()

chunk up an array into multiple arrays of 20 elements each. Input: arrayToSlice - a one-dimensional array of elements. Returns a two-dimensional array. An array of 20-element arrays.

```
bchjs.Util.chunk20()
```

*   [Example usage:](#examples-Util-chunk20-0_0_0-0)

```
(async () => {
  try {
     const bigArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

     const chunked = bchjs.Util.chunk20(bigArray)
     console.log(chunked)
  } catch(error) {
     console.error(error)
  }
})()

// returns
 [
   [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],
   [20,21,22,23,24,25,26]
 ]
```

## Util | floor2()

Round a number down to 2 decimal places.

```
bchjs.Util.floor2()
```

*   [Example usage:](#examples-Util-floor2-0_0_0-0)

```
(async () => {
  try {
    const num = 1.234567891111
    const result = bchjs.Util.floor2(num)
    console.log(result)
  } catch(error) {
   console.error(error)
  }
})()

// returns
 1.23
```

## Util | floor8()

Round a number down to 8 decimal places.

```
bchjs.Util.floor8()
```

*   [Example usage:](#examples-Util-floor8-0_0_0-0)

```
(async () => {
  try {
    const num = 1.234567891111
    const result = bchjs.Util.floor8(num)
    console.log(result)
  } catch(error) {
   console.error(error)
  }
})()

// returns
 1.23456789
```

## Util | sleep()

Promise-based delay. Expects an integer as input, which represents milliseconds. This function will return a Promise that resolves that many milliseconds later.

```
bchjs.Util.sleep()
```

*   [Example usage:](#examples-Util-sleep-0_0_0-0)

```
(async () => {
  try {
    const tenSeconds = 10000
    await bchjs.Util.sleep(tenSeconds)
  } catch(error) {
   console.error(error)
  }
})()
```

## Util | validateAddress()

Return information about the given bitcoin address.

```
bchjs.Util.validateAddress()
```

*   [Example usage:](#examples-Util-Validate_Address_-0_0_0-0)

```
(async () => {
  try {
    let validateAddress = await bchjs.Util.validateAddress("bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f");
    console.log(validateAddress);
  } catch(error) {
   console.error(error)
  }
})()

// { isvalid: true,
// address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
// scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
// ismine: true,
// iswatchonly: false,
// isscript: false,
// pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
// iscompressed: true,
// account: 'Test' }

(async () => {
  try {
    let validateAddress = await bchjs.Util.validateAddress(["bitcoincash:qzc86hrdufhcwlyzk7k82x77kfs2myekn57nv9cw5f"]);
    console.log(validateAddress);
  } catch(error) {
   console.error(error)
  }
})()

// [{ isvalid: true,
// address: '17fshh33qUze2yifiJ2sXgijSMzJ2KNEwu',
// scriptPubKey: '76a914492ae280d70af33acf0ae7cd329b961e65e9cbd888ac',
// ismine: true,
// iswatchonly: false,
// isscript: false,
// pubkey: '0312eeb9ae5f14c3cf43cece11134af860c2ef7d775060e3a578ceec888acada31',
// iscompressed: true,
// account: 'Test' }]
```

## eCash

## eCash | toSatoshi()

Convert XEC units into satoshi units

```
bchjs.eCash.toSatoshi()
```

*   [Example usage:](#examples-eCash-toSatoshi-0_0_0-0)

```
// convert 10,704.35 XEC to satoshis:
bchjs.eCash.toSatoshi(10704.35)
// 1070435
```

## eCash | toXec()

Convert satoshi units to XEC units

```
bchjs.eCash.toXec()
```

*   [Example usage:](#examples-eCash-toXec-0_0_0-0)

```
// convert 1,070,435 satoshis to XEC:
bchjs.eCash.toSatoshi(1070435)
// 10704.35
```
