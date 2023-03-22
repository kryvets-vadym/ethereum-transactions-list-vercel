export interface Token {
  id: string,
  symbol: string,
  name: string,
  platforms: {
    [key: string]: string,
  },
}

export interface ReturnToken {
  [key: string]: number,
}

export interface LoadBlocksParams {
  count: number,
  number: number,
  lastBlockNumber: number,
}


export interface UserBalance {
  ERC20: ReturnToken[],
  ETH: number,
}

export enum ValidationType {
  WalletAddress = 40,
  SenderAddress = 40,
  RecipientAddress = 40,
  Hash = 64,
  BlockNumber = 7,
}

export interface Filter {
  from?: string | undefined,
  to?: string,
  hash?: string,
  blockNumber?: string,
}
