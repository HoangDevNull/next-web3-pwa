export const __prod__ = process.env.NODE_ENV === 'production';
export const isServer = typeof window === 'undefined';
export const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000/';

export const INFURA_ID = '214fd14f93f34f6a9e4e3e84b75b54b7';

// TEST NET

export const POLYGON_RPC = 'https://matic-mumbai.chainstacklabs.com/';
export const BSC_RPC = 'https://data-seed-prebsc-2-s3.binance.org:8545/';
export const ETH_RPC = 'https://rinkeby.infura.io/v3/214fd14f93f34f6a9e4e3e84b75b54b7';

export const APPROVE_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; //(2^256 - 1 )
