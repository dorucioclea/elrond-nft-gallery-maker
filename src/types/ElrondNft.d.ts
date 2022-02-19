export interface ElrondAsset {
    website: string,
    description: string,
    status: string,
    pngUrl: string,
    svgUrl: string,
    lockedAccounts: {}
}

export interface ElrondNft {
    identifier: string,
    collection: string,
    timestamp: 0,
    attributes: string,
    nonce: 0,
    type: string,
    name: string,
    creator: string,
    royalties: {},
    uris: string[],
    url: string,
    media: {},
    isWhitelistedStorage: boolean,
    thumbnailUrl: string,
    tags: string[],
    metadata: {},
    owner: {},
    balance: {},
    supply: {},
    decimals: {},
    assets: ElrondAsset,
    ticker: string,
    scamInfo: {}
  }