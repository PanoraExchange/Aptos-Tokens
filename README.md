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

## Panora Tags:
To enhance token classification and identification, we’ve introduced a field `panoraTags` in token list response. This field combines categories and labels into a single parameter, providing clearer insights and context about each token's status and characteristics. Here’s what they represent:

a) Categories (Tokens are segregated on Panora UI based on their category):
- `Native`: Tokens that are native to the chain and issued directly on it (excludes emojicoin and meme)
- `Emojicoin`: Tokens launched on emojicoin.fun (includes both graduated and non-graduated emojicoins).
- `Meme`: Tokens primarily driven by community hype, memes, or trends
- `Bridged`: Tokens that originate from another chain and are bridged for use

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

Add the token_symbol.svg file for the token in the [logos](https://github.com/PanoraExchange/Aptos-Tokens/tree/main/logos) folder in your forked repository. Ensure it's .svg or ~100x100 pixels in .png format and has a unique symbol not used by any existing token.

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
- `panoraUI`: When set to true, displays the token name and logo on the Panora interface.
- `panoraTags`: Lists the tags associated with the token.
- `panoraIndex`: The default sorting order of tokens within the Panora UI
- `coinGeckoId`: The CoinGecko ID of the token (optional)
- `coinMarketCapId`: The CoinMarketCap ID of the token (optional)


Example:

```typescript
   {
      "chainId": 1,
      "tokenAddress": null,
      "faAddress": "0x357b0b74bc833e95a115ad22604854d6b0fca151cecd94111770e5d6ffc9dc2b",
      "name": "Tether USD",
      "symbol": "USDt",
      "decimals": 6,
      "bridge": null,
      "panoraSymbol": "USDt",
      "usdPrice": "1.00377379",
      "logoUrl": "https://raw.githubusercontent.com/PanoraExchange/Aptos-Tokens/main/logos/USDT.svg",
      "websiteUrl": "https://tether.to",
      "panoraUI": true,
      "panoraTags": [
        "Native",
        "Verified"
      ],
      "panoraIndex": 2,
      "coinGeckoId": "tether",
      "coinMarketCapId": 825,
      "isInPanoraTokenList": true, // Do not use. This field will get deprecated.
      "isBanned": false // Do not use. This field will get deprecated.
    }
```

