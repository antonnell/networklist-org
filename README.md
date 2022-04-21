## Introduction

[TokenPocket](https://www.tokenpocket.pro) is the world’s leading multi-chain self-custodial wallet, which supports mainstream public chains including BTC, ETH, BSC, Polygon, Solana, HECO, Klaytn, Avalanche, Tron, OEC, HSC, Fantom, Polkadot, Kusama, EOS, etc. The private key is stored in the user’s own device and never uploaded to the server, so the user can fully control crypto assets. TokenPocket has provided reliable services for over 10 million users around the world. The number of monthly active users exceeds 5 million and the users are located in more than 200 countries around the world.

TokenPocket钱包现已支持通过配置即可完成添加支持**EVM,Polkadot,EOSIO**技术系链。**EVM,Polkadot,EOSIO**技术系项目方如果希望TokenPocket钱包集成其链项目。首先按照本文档描述提供必要的网络信息和接口，然后等待TokenPocket官方人员评估和审核完成, 即可在TokenPocket钱包快速集成项目方的链。更多详细信息请参考[TokenPocket开发者文档](https://help.tokenpocket.pro/tp-developer/network/chains/addchain-multifunction)。

TokenPocket Chainlist is a list of EVM(ethereum)/Polkadot/EOSIO networks. Users can use the information to connect their wallets and Web3 middleware providers to the appropriate Chain ID and Network ID to connect to the correct chain.

TokenPocket钱包开发团队一直致力于给社区提供更多具有潜力链给广大开发者和钱包用户，致力于提供更加友好方式支持新链，致力于提供完全去中心化钱包给用户，致力于赋能和携手具有潜力项目方共同推进web3发展。

​      为了支持不同项目方新链发展，为了钱包用户使用上不同项目方新链。我们不留余力深入了解项目方新链技术特点、稳定性、可用性和安全性，深入了解钱包用户对web3世界不断繁荣新的创新项目的需求。我们以更加负责任和专业能力保证用户利用TokenPocket钱包连接web3世界去探索新的项目同时保证用户钱包资产安全。在TokenPocket钱添加区块链需要满足以下条件：

- 区块链必须已经在主网上线，并且至少已经稳定运行3～6个月。
- 链上热门代币和应用数量必须50+。
- 区块链具有完整公开官方使用文档、开发者文档和开发者工具。
- 项目必须提供API/JSON-RPC访问节点获取余额等、提供区块链浏览器。
- 原生代币可在交易所进行交易。
- 项目方开发者必须保证项目不断更新和发展。
- 在链集成到TokenPocket后，如果该链使用上遇到意外、紧急问题，能够提供及时技术支持，以保证TokenPocket钱包用户权益不受损失。
- 根据所需支持程度，捐赠TPT。

|              | 简单支持                               | 完整支持                                                     |
| ------------ | -------------------------------------- | ------------------------------------------------------------ |
| 捐赠数量     | 2,000,000 TPT                          | 6,000,000TPT                                                 |
| 支持公链种类 | EVM,Polkadot,EOSIO技术系链             | EVM,Polkadot,EOSIO技术系链                                   |
| 支持程度     | 自定义网络、公链列表处默认显示该链logo | 在已支持链列表显示原生币和非原生币、Token价格、热门Token选择列表、交易记录和交易详情、独立的Dapp入口等信息 |

**注意：**TokenPocket基金会收款地址为 **0x7837AE9E4FD6E967F1B8C8824D6288ECE6e730F9** （仅支持收取BSC、HECO以及ETH链上的TPT，请转账前再三确认！ ）

  在收到项目方提交申请后，我们会第一时间深入交流、了解和评估区块链项目信息。



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

