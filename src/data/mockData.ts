import { CryptoData } from '../types/crypto';

export const mockCryptoData: CryptoData[] = [
  {
    id: 1,
    name: '비트코인',
    symbol: 'BTC',
    color: 'yellow',
    accumulatedRequests: 999999999999,
    dailyRequests: 999,
    changePercentage: 99.9,
    changeDirection: 'down',
    reward: 1,
    botOwnership: {
      percentage: 1,
      amount: 100
    },
    daysFromRegistration: 100
  },
  {
    id: 2,
    name: '이더리움',
    symbol: 'ETH',
    color: 'indigo',
    accumulatedRequests: 888888888888,
    dailyRequests: 555,
    changePercentage: 99.9,
    changeDirection: 'up',
    reward: 1.5,
    botOwnership: {
      percentage: 99,
      amount: 999
    },
    daysFromRegistration: 1
  },
  {
    id: 3,
    name: 'KOL프로토콜',
    symbol: 'KOL',
    color: 'green',
    accumulatedRequests: 777777777777,
    dailyRequests: 0,
    changePercentage: null,
    changeDirection: 'none',
    reward: 100,
    botOwnership: {
      percentage: 50,
      amount: 999999
    },
    daysFromRegistration: 999
  },
  {
    id: 4,
    name: 'Kuestly 토큰',
    symbol: 'K',
    color: 'red',
    accumulatedRequests: 666666666666,
    dailyRequests: 888,
    changePercentage: 99.9,
    changeDirection: 'down',
    reward: 999999,
    botOwnership: {
      percentage: 0,
      amount: 0
    },
    daysFromRegistration: 999
  },
  {
    id: 5,
    name: '솔라나',
    symbol: 'SOL',
    color: 'purple',
    accumulatedRequests: 555555555555,
    dailyRequests: 111,
    changePercentage: 99.9,
    changeDirection: 'down',
    reward: 0.1,
    botOwnership: {
      percentage: 1,
      amount: 100000
    },
    daysFromRegistration: 999
  },
  {
    id: 6,
    name: '카르다노',
    symbol: 'ADA',
    color: 'blue',
    accumulatedRequests: 444444444444,
    dailyRequests: 222,
    changePercentage: 99.9,
    changeDirection: 'down',
    reward: 1,
    botOwnership: {
      percentage: 55,
      amount: 0.5
    },
    daysFromRegistration: 999
  },
  {
    id: 7,
    name: '폴카닷',
    symbol: 'DOT',
    color: 'pink',
    accumulatedRequests: 333333333333,
    dailyRequests: 333,
    changePercentage: 88.8,
    changeDirection: 'up',
    reward: 10,
    botOwnership: {
      percentage: 75,
      amount: 1000
    },
    daysFromRegistration: 888
  },
  {
    id: 8,
    name: '아발란체',
    symbol: 'AVAX',
    color: 'red',
    accumulatedRequests: 222222222222,
    dailyRequests: 444,
    changePercentage: 77.7,
    changeDirection: 'up',
    reward: 5,
    botOwnership: {
      percentage: 60,
      amount: 500
    },
    daysFromRegistration: 777
  },
  {
    id: 9,
    name: '폴리곤',
    symbol: 'MATIC',
    color: 'purple',
    accumulatedRequests: 111111111111,
    dailyRequests: 555,
    changePercentage: 66.6,
    changeDirection: 'down',
    reward: 1000,
    botOwnership: {
      percentage: 40,
      amount: 10000
    },
    daysFromRegistration: 666
  },
  {
    id: 10,
    name: '체인링크',
    symbol: 'LINK',
    color: 'blue',
    accumulatedRequests: 999999999,
    dailyRequests: 666,
    changePercentage: 55.5,
    changeDirection: 'up',
    reward: 50,
    botOwnership: {
      percentage: 30,
      amount: 5000
    },
    daysFromRegistration: 555
  }
];