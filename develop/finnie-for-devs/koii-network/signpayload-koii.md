# signPayload (Koii)

This function signs a data payload which can then have its signature verified publicly.&#x20;

### Parameters

Payload JSON - Payload to sign

### Example Code

```javascript
const knode = require("@_koi/sdk/node");
const ktools = new knode.Node();

async function testSignPayload() {
    const jwk = await ktools.loadFile("arweaveWallet.json");
    await ktools.loadWallet(jwk);

    let payload = {
        vote: "FooBar",
        senderAddress: "",
    }
    
    const signedPayload = await ktools.signPayload(payload);
    console.log(signedPayload);
    const signature = signedPayload.signature;
    const owner = signedPayload.owner;
    //expect(typeof signature).toBe("string");
    //expect(signature.trim()).not.toHaveLength(0);
    
    //expect(typeof owner).toBe("string");
    //expect(owner.trim()).not.toHaveLength(0);
}

testSignPayload();
```

### Example Code Output

```
Initialized Koii Tools for true ownership and direct communication using version QA7AIFVx1KBBmzC7WUNhJbDsHlSJArUT0jWrhZMZPS8
{
  vote: 'FooBar',
  senderAddress: '',
  signature: 'CSjiljTA2Dvfnsg7Pnf-o8zs8HaXXHfg_AaWcpivmo37-ZQtpj9KWJp4Z4b17XyesxcCL8RTxYEKLf8O47jkvpCNQO2K78V-z0gVtXgV8PhJ56Ps7Xk-XnnBj4C_xwrHH0lwvfrOibKYtKasJHxwp-1oRAfBFxQsoJQaHf8_fI58qBhRHlwJDKFL50yTgs3fzgDYdVfqGoocbN5ajGl68S38fdTymmMpywzIPBvst0gXcHi8ESH5BM1WwkuP8QlGjZofOEKJ21xCa6JLjd7CSP_QnXnerLh1PSJM91bsPGZk79GxmEgwZXgdTYTlxZJyjUZW9kqnJSifs7Chr9l1rXVlTY5gYO5f9i4CkZTTaKlWWOy-wmgI-ZVx-NSl_--qlcYSq2_UZYn2e7g_abo5SFTsnfDN0bl0u--AXtZGW32unwBMjpOlH6gaHNNMGKeInNMS9LGX0JbZN0h03uHBoD6mnqNHEgAmAtVVjPsU__IrZdga4mab_U2QafHTLF3tR9WR8j0xRzNEVpkGdlAF9PgbADDA1jVSAttL4DiHhsTc5lYi8mTSoZLmjxfb3saybEzZyPytOBmi11PIDmKArlCkyNGQf6dw2ihG_ufVbe9o8eiarNiHIgOQYvweOsDGY04VKy8_oeR71ll08dHB606SwqGgkjpivwVrZC1XJXw',
  owner: 'nskEawH8W_9XNtH4JLpLxiu_wd_LSfWPIQYycr4oWJ-z48Br_Ty0Vljacedeo2tF7KHhkuq83bzF1JhZZxPX_AY0a9Ayip-0Hsx8xNgXY694gIRRRRKx9xWHFp76s4IV5qBr8Umac-L8Ami2Cj5nbDZ_jpK3j7XjJKVXt27Eck7Gj3qvNApVRckI6acuxUvi-DeRBQ2YBQvRCtY6sCXY2oF8Ym0L1G0zsT6rkNV7GboY-QtgswyFdL4xsmx-prR6CJgEhUAkJltx45Cdn7k1CJO8Nk0ik1zSMCxxE7blSHueY5snWvVvsIT6cZhZLUHiTqyyc_Tr8E21wXbuL118__1_DEje_lhwved32N_haieqliZHzxh5x9_me0w3ppdmXBT8rckEbVBS1wfsW08uTrS9l7eW96aXmaG5SunFTwpUhwmClLUVj2I1Ac4eC7H_ZnJ-mwQdn6CJjBzHnZvk1q60u2G9akQ4dMxKNecleIQYRyhFtW2rKP-IoN9VPQbGxKWbctH_TaiZkpDhPOHBVggY5otA-a4zdqlkbBeCrXC6LuAwYhDRBh6pLEvnfZL0EFaLB7eZeAPa9hImN7HvClMXQsV7Stv84ZkGBmAmakbtvUw0-PUtc8BUZTV5pZ6Ymx9HCoHP20xk_hJ6o-2SgTPC8_x3EVHUEuDUkql95CM'
}
```

### Returns

**Promise: null**  ```<BundlerPayload>``` - Signed payload with signature
