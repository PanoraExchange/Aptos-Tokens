# Panora: The Leading DEX Aggregator on Aptos
## Superior Aggregation, Best Rates, Exceptional UI/UX, Advanced Token Discovery
Panora is dedicated to empowering the Aptos community with a seamless and secure trading experience for all tokens. Panora support all tokens tradable on-chain and combines superior aggregation, best rates, a top-tier user interface, with advanced token discovery to provide the best trading experience on Aptos.

## Our Commitment:
- `Superior Aggregation`: Combining liquidity from all available sources on Aptos for optimal swap and trade experience.
- `Best Rates`: Utilizing advanced multi-hop and split routing algorithms to secure the best rates.
- `Exceptional UI/UX`: Enjoy an intuitive and user-friendly interface designed for effortless trading.
- `Advanced Token Discovery`: Providing a comprehensive and categorized catalog of all tradeable tokens on the Aptos chain.

# Aptos Token List:
Panora's Aptos Token List is the go-to categorized catalog for both legacy coins and Fungible Assets tradeable on the Aptos chain. You can public API endpoint or JSON file in github to fetch the [Aptos Token List](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/token-list.json). 

Visit [docs.panora.exchange](https://docs.panora.exchange) for detailed information on Token List.

## Token Tags:

a) Categories:
- `Native`: Tokens issued directly on the chain, excluding meme tokens.
- `Meme`: Community-driven tokens based on trends or hype.
- `Bridged`: Tokens originating from other chains and made usable via bridging.

b) Labels
- `Verified`: Tokens with verified logo-to-address mapping, ensuring accurate identification.
- `Recognized`: Tokens with mapped logos but may not be verified by the community yet or have had their Verified label revoked.
- `Unverified`: Tokens tradable on-chain but aren’t recognized or verified yet. 
- `Banned`: Tokens flagged for confirmed security risks or malicious activity, discouraged for trading.
- `InternalFA`: Addresses used by DEXs before the pairing between Coin and Fungible Asset (FA) standard tokens were established; may have unique traits.
- `LP` (Liquidity Pool): Tokens representing liquidity pool shares in asset pairs.


# Projects - How to Add Your Token to the Panora Token List:

To add your token to the Aptos Token List, follow these steps:

## 1. Fork the Repository

Fork the [Aptos-Tokens](https://github.com/PanoraExchange/Aptos-Tokens) repository on GitHub to create your own copy.

## 2. Add Token Icon

Add the token_symbol.svg file for the token in the [logos](https://github.com/PanoraExchange/Aptos-Tokens/tree/main/logos) folder in your forked repository. Ensure it's no larger than 250x250 pixels and has a unique symbol not used by any existing token. 

## 3. Update `submit-token-request.ts`

Add a [SubmitTokenRequestInfo](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/types.ts#L1) object at the end of [submit-token-request.ts](https://github.com/PanoraExchange/Aptos-Tokens/blob/main/submit-token-request.ts) list.

Provide the following details:

### `SubmitTokenRequestInfo`

- `chainId`: The chain ID associated with the token (Default: 1 for Aptos Mainnet)
- `tokenAddress`: The complete address of the token as per the Aptos Coin Standard (Legacy)
- `faAddress`: The complete address of the token as per the Aptos Coin Standard (Legacy)
- `name`: The on-chain registered name of the token
- `symbol`: The on-chain registered symbol of the token
- `decimals`: The number of decimal places of the token
- `logoUrl`: The URL for the token's logo (the logo should be added to the logos folder in your repository to get the correct link)
- `websiteUrl`: The official website URL of the token (optional)
- `coinGeckoId`: The CoinGecko ID of the token (optional)
- `coinMarketCapId`: The CoinMarketCap ID of the token (optional)

Example:

```typescript
  {
    "chainId": 1,
    "tokenAddress": "0x1::aptos_coin::AptosCoin",
    "faAddress": "0xa",
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

- `chainId`: The chain ID associated with the token (Default: 1 for Aptos Mainnet)
- `tokenAddress`: The complete address of the token as per the Aptos Coin Standard (Legacy)
- `faAddress`: The complete address of the token as per the Aptos Coin Standard (Legacy)
- `name`: The on-chain registered name of the token
- `symbol`: The on-chain registered symbol of the token
- `decimals`: The number of decimal places of the token
- `bridge`: The bridge associated with the token, if applicable (optional)
- `panoraSymbol`: Similar to symbol, but with prefixes based on the bridge: lz for LayerZero, wh for Wormhole, and ce for Celer
- `logoUrl`: The URL for the token’s logo(optional)
- `websiteUrl`: The official website URL of the token (optional)
- `panoraUI`: Specifies whether the token name and logo is visible on the Panora UI
- `panoraTags`: The tags associated with the token
- `panoraIndex`: The default sorting order of tokens within the Panora UI
- `coinGeckoId`: The CoinGecko ID of the token (optional)
- `coinMarketCapId`: The CoinMarketCap ID of the token (optional)


Example:

```typescript
  {
    "chainId": 1,
    "tokenAddress": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
    "faAddress": "0x2b3be0a97a73c87ff62cbdd36837a9fb5bbd1d7f06a73b7ed62ec15c5326c1b8",
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": 6,
    "bridge": "LayerZero",
    "panoraSymbol": "lzUSDC",
    "logoUrl": "https://raw.githubusercontent.com/PanoraExchange/Aptos-Tokens/main/logos/USDC.svg",
    "websiteUrl": null,
    "panoraUI": true,
    "panoraTags": ["Bridged", "Verified"],
    "panoraIndex": 10,
    "coinGeckoId": null,
    "coinMarketCapId": null
  }
```

