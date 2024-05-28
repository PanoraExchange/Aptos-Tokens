# Panora: Leading DEX Aggregator on Aptos
## Superior Aggregation, Best Rates, Exceptional UI/UX, Advanced Token Discovery
Panora is dedicated to empowering the Aptos community with a seamless and secure trading experience for all tokens. Our platform supports both established and emerging tokens and guarantees that every token meets our stringent verification standards. This enables you to trade with confidence and peace of mind.

# Our Commitment:
- Superior Aggregation: Combining liquidity from all available sources on Aptos for optimal swap and trade experience.
- Best Rates: Utilizing advanced multi-hop and split routing algorithms to secure the best rates.
- Exceptional UI/UX: Enjoy an intuitive and user-friendly interface designed for effortless trading.
- Advanced Token Discovery: Providing a comprehensive and categorized catalog of all tradeable tokens on the Aptos chain.

# Aptos Token List:
Panora's Aptos Token List is the go-to categorized catalog for both legacy coins and Fungible Assets tradeable on the Aptos chain. You can use the JSON file in github to fetch the [Aptos Token List](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/token-list.json)

This list contains:

- `Community-Validated Tokens`: Tokens with details verified by the community/partners and are visible on the Panora platform. To get included, a token must establish a strong brand presence and credibility within the Aptos ecosystem. For example, you need to be active enough to at least be a part of the private Aptos Ecosystem telegram groups. These tokens are accessible from the Token List by setting 'isInPanoraTokenList' parameter to 'true'. 

- `Non-Validated Tokens`: Established or emerging tokens with sufficient liquidity on Aptos, even if not community-validated yet. Tokens get added or dropped from here automatically based on minimum liquidity criteria, which is subject to changes. These tokens are accessible from the Token List by setting 'isInPanoraTokenList' parameter to ‘false’.

- `Banned Tokens`: Tokens that are prohibited from trading on Panora and partner projects using this list, thereby ensuring user safety. These tokens are accessible from the Token List by setting 'isBanned' parameter to 'true'.


# Projects - Open a PR to get your token details added to Panora's Aptos Token List:

To add emerging tokens to the Aptos Token List, follow these steps:

## 1. Fork the Repository

Fork the [Aptos-Tokens](https://github.com/PanoraExchange/Aptos-Tokens) repository on GitHub to create your own copy.

## 2. Add Token Icon

Add the token_symbol.svg file for the token in the [logos](https://github.com/PanoraExchange/Aptos-Tokens/tree/main/logos) folder in your forked repository. Ensure it's no larger than 250x250 pixels and has a unique symbol not used by any existing token. 

## 3. Update `submit-token-request.ts`

Add a [SubmitTokenRequestInfo](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/types.ts#L1) object at the end of [submit-token-request.ts](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/submit-token-request.ts) list.

Provide the following details:

### `SubmitTokenRequestInfo`

- `chainId`: The chain ID to which the token belongs (default is 1 for Aptos Mainnet)
- `tokenAddress`: The complete address used to identify the token as per the Aptos core framework
- `name`: The name of the token
- `symbol`: The symbol registered by the token minter on-chain
- `decimals`: The number of decimal places for the token
- `logoUrl`: The URL for the token's logo (the logo should be added to the logos folder in your repository to get the correct link)
- `websiteUrl`:  The official website URL of the token (optional, but preferred for faster validations)
- `coinGeckoId`: The CoinGecko ID used for fetching price feeds (optional)
- `coinMarketCapId`: The CoinMarketCap ID used for fetching price feeds (optional)

Example:

```typescript
  {
    "chainId": 1,
    "tokenAddress": "0x1::aptos_coin::AptosCoin",
    "name": "Aptos Coin",
    "symbol": "APT",
    "decimals": 8,
    "logoUrl": "https://raw.githubusercontent.com/PanoraExchange/Aptos-Tokens/main/logos/APT.svg",
    "websiteUrl": "https://aptosfoundation.org",
    "coinGeckoId": "aptos",
    "coinMarketCapId": 21794,
  }
```


## 4. Commit Changes

Commit your changes with a descriptive message explaining the modifications made.

## 5. Make a Pull Request

Navigate to your forked repository, open a pull request, and submit it for review. Select the base repository as [Aptos-Tokens](https://github.com/PanoraExchange/Aptos-Tokens/tree/main) and branch as [main](https://github.com/PanoraExchange/Aptos-Tokens/tree/main) for merging your changes.

## 6. Community Discussion and Amplification

It is highly recommended to engage in discussions when new projects seek validation into the list. Tweet @PanoraExchange to notify your community and Panora about your request submission. This increases visibility and community engagement, potentially expediting approval of your PR


`Reminder`: Tokens are always available for trading by pasting the complete token address into our token picker, regardless of their validation status.


# Aptos Token List Response

Aptos Token List Response object consists of the following fields:

- `chainId`: The chain ID to which the token belongs. (Note: The default chain ID is 1 for Aptos Mainnet)
- `tokenAddress`: The complete address used for identifying the token as per Aptos core framework
- `name`: The name of the token
- `symbol`: The symbol registered by the token minter on-chain
- `decimals`: The number of decimal places for the token
- `bridge`: The bridge associated with the token, if any (optional)
- `panoraSymbol`: Similar to symbol, but with prefixes based on the bridge: lz for LayerZero, wh for Wormhole, and ce for Celersimilar to `symbol`, except: layerzero symbols use `lz` prefix, wormhole symbols use `wh` prefix and celer symbols use `ce` prefix
- `logoUrl`: The URL for the token's logo
- `category`: The token's classification (Native, Meme, or Bridged)
- `isInPanoraTokenList`: Indicates if the token is community-validated and visible for trading on the Panora platform
- `isBanned`: Indicates if the token is prohibited from trading
- `panoraOrderIndex`: The default sorting order for tokens within Panora Swap
- `coinGeckoId`: The CoinGecko ID, which may be used to fetch price feeds (optional)
- `coinMarketCapId`: The CoinMarketCap ID, which may be used to fetch price feeds (optional).


Example:

```typescript
  {
    "chainId": 1,
    "tokenAddress": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": 6,
    "bridge": "LayerZero",
    "panoraSymbol": "lzUSDC",
    "logoUrl": "https://raw.githubusercontent.com/PanoraExchange/Aptos-Tokens/main/logos/USDC.svg",
    "websiteUrl": null,
    "category": "Bridged",
    "isInPanoraTokenList": true,
    "isBanned": false,
    "panoraOrderIndex": 15,
    "coinGeckoId": "usd-coin",
    "coinMarketCapId": 3408
  }
```

