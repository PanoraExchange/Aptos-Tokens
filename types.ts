export type SubmitTokenRequestInfo = {
  chainId: number
  tokenAddress: `0x${string}` | null
  faAddress: `0x${string}` | null
  name: string
  symbol: string
  decimals: number
  logoUrl: string
  websiteUrl: string
  coinGeckoId: string | null
  coinMarketCapId: number | null
}

export type TokenInfo = {
  chainId: number
  tokenAddress: `0x${string}` | null
  faAddress: `0x${string}` | null
  name: string
  symbol: string
  decimals: number
  bridge: "LayerZero" | "Wormhole" | "Celer" | "Echo" | null
  panoraSymbol: string
  logoUrl: string | null
  websiteUrl: string | null
  panoraUI: boolean
  panoraTags?: string[] | null
  panoraIndex?: number | null
  coinGeckoId: string | null
  coinMarketCapId: number | null
}
