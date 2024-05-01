# getInflationGovernor RPC Method 
Returns the current inflation governor

### Parameters [#](#parameters)

Configuration object containing the following fields:

### Result [#](#result)

The result field will be a JSON object with the following fields:

*   `initial: <f64>` - the initial inflation percentage from time 0
*   `terminal: <f64>` - terminal inflation percentage
*   `taper: <f64>` - rate per year at which inflation is lowered. (Rate reduction is derived using the target slot time in genesis config)
*   `foundation: <f64>` - percentage of total inflation allocated to the foundation
*   `foundationTerm: <f64>` - duration of foundation pool inflation in years

### Code sample [#](#code-sample)

```
curl https://testnet.koii.network -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0","id":1, "method":"getInflationGovernor"}
'
```


### Response [#](#response)

```
{
  "jsonrpc": "2.0",
  "result": {
    "foundation": 0.05,
    "foundationTerm": 7,
    "initial": 0.15,
    "taper": 0.15,
    "terminal": 0.015
  },
  "id": 1
}
```
