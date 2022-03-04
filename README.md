## Introduction

[TokenPocket](https://www.tokenpocket.pro) is the world’s leading multi-chain self-custodial wallet, which supports mainstream public chains including BTC, ETH, BSC, Polygon, Solana, HECO, Klaytn, Avalanche, Tron, OEC, HSC, Fantom, Polkadot, Kusama, EOS, etc. The private key is stored in the user’s own device and never uploaded to the server, so the user can fully control crypto assets. TokenPocket has provided reliable services for over 10 million users around the world. The number of monthly active users exceeds 5 million and the users are located in more than 200 countries around the world.

TokenPocket钱包现已支持通过配置即可完成添加支持**EVM,Polkadot,EOSIO**技术系链。**EVM,Polkadot,EOSIO**技术系项目方如果希望TokenPocket钱包集成其链项目。首先按照本文档描述提供必要的网络信息和接口，然后等待TokenPocket官方人员评估和审核完成, 即可在TokenPocket钱包快速集成项目方的链。更多详细信息请参考[TokenPocket开发者文档](https://help.tokenpocket.pro/tp-developer/network/chains/addchain-multifunction)。

TokenPocket Chainlist is a list of EVM(ethereum)/Polkadot/EOSIO networks. Users can use the information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID to connect to the correct chain.

## How to add a new chain

Fork this repo and add your evm/polkadot/eosio chain info into `chains.json` 

| Field          | Describe        | Remark                                                       |
| -------------- | --------------- | ------------------------------------------------------------ |
| name           | name            | full name of chain                                           |
| chainId        | chain id        | chain id exists in ethereum evm networks                     |
| namespace      | namespace       | TokenPocket Wallet Extension, available value ethereum/polkadot/eosio |
| shortName      | short name      | short name of chain                                          |
| network        | network         |                                                              |
| networkId      | network id      |                                                              |
| nativeCurrency | native currency |                                                              |
| rpc            | rpc             |                                                              |
| faucets        | faucets         |                                                              |
| infoURL        | info URL        |                                                              |
| appResource    | app resource    | TokenPocket Wallet Extension                                 |

**chainId & networkId:** Ethereum networks have two identifiers, a network ID and a chain ID. Although they often have the same value, they have different uses.Peer-to-peer communication between nodes uses the *network ID*, while the transaction signature process uses the *chain ID*.

Example:

```javascript
{
    "name": "xDAI Chain",
    "chainId": 100,
    "namespace": "ethereum",  
    "shortName": "xdai",
    "chain": "XDAI",
    "network": "mainnet",
    "networkId": 100,
    "nativeCurrency": {
        "name": "xDAI",
        "symbol": "xDAI",
        "decimals": 18
    },
    "rpc": [
        "https://rpc.xdaichain.com",
        "https://xdai.poanetwork.dev",
        "wss://rpc.xdaichain.com/wss",
        "wss://xdai.poanetwork.dev/wss",
        "http://xdai.poanetwork.dev",
        "https://dai.poa.network",
        "ws://xdai.poanetwork.dev:8546"
    ],
    "faucets": [],
    "infoURL": "https://forum.poa.network/c/xdai-chain",
    "appResource": {
        "icChainSelect": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/1.png",
        "icChainUnselect": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/0.png",
        "colorChainBg": "0x58B2AF",
        "txUrl":" https://xxxchaintxserver.xxx.xxx", 
        "browserInfo": [{
            "name": "Xscan", 
            "icon": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/1.png", 
            "addr": "https://xxx1scan.io/"
        },{
            "name": "xDAIscan", 
            "icon": "https://tp-upload.cdn.bcebos.com/v1/blockChain/xDAI/1.png", 
            "addr": "https://xxx2can.io/"
        }]
    }
}
```



### appResource

`appResource` is optional, which is only affect the appearance in TokenPocket Wallet. You can follow the standard below:

![image-01](https://tp-statics.tokenpocket.pro/images/chain-element/01.png)



#### icon & color

 icChainSelect, icChainUnselect, colorChainBg 配置用来控制链在TokenPocket钱包选中、没有选中该链时候显示使用的图标和该链账户背景颜色。如下图所示：

![image-02](https://tp-statics.tokenpocket.pro/images/chain-element/02.png)

icon大小规格如下图所示：

![image-03](https://tp-statics.tokenpocket.pro/images/chain-element/03.png)

colorChainBg是该链账号背景颜色，颜色不能太亮以免影响内容文字的显示效果，如下图所示：

![image-04](https://tp-statics.tokenpocket.pro/images/chain-element/04.png)



#### namespace & txUrl

TokenPocket钱包现已支持提交配置即可完成添加支持**EVM,Polkadot,EOSIO**技术系链。项目方链提供如果是**EVM,Polkadot,EOSIO**技术系链， 同时希望提交链在TokenPocket钱包能够显示交易记录，则提交需要namespace和txUrl配置项。namespace是说明链所属技术体系，txUrl是交易记录提供服务的地址，关于txUrl交易记录服务更多详细信息请参考[TokenPocket开发者文档](https://help.tokenpocket.pro/tp-developer/network/chains/addchain-multifunction)。支持交易记录链钱包中显示效果如下图所示：

![image-05](https://tp-statics.tokenpocket.pro/images/chain-element/05.png)



##### browserInfo

browserInfo主要用于在TokenPocket钱包显示和跳转到官方浏览器。浏览器在TokenPocket钱包中其中一个用途，如下入图所示：

![image-06](https://tp-statics.tokenpocket.pro/images/chain-element/06.png)



## more

![standard](https://tp-statics.tokenpocket.pro/images/custom-chains-standard-5.png)

