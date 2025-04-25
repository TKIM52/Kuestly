import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  image: string;
  price: string;
  change1h: string;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume: string;
  supply: string;
  isStarred?: boolean;
  changeDirection: 'up' | 'down' | 'neutral';
}

const cryptoData: CryptoData[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    price: '$88,115.54',
    change1h: '0.11%',
    change24h: '0.74%',
    change7d: '3.38%',
    marketCap: '$1,749,490,392,257',
    volume: '$38,154,750,456',
    supply: '19.85M BTC',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    price: '$1,578.11',
    change1h: '0.19%',
    change24h: '3.72%',
    change7d: '3.37%',
    marketCap: '$190,496,102,937',
    volume: '$15,586,321,009',
    supply: '120.71M ETH',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png',
    price: '$0.9996',
    change1h: '0.00%',
    change24h: '0.03%',
    change7d: '0.01%',
    marketCap: '$144,678,629,941',
    volume: '$69,105,118,273',
    supply: '144.72B USDT',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 4,
    name: 'XRP',
    symbol: 'XRP',
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
    price: '$2.08',
    change1h: '0.42%',
    change24h: '1.42%',
    change7d: '2.89%',
    marketCap: '$121,715,748,035',
    volume: '$2,477,791,421',
    supply: '58.39B XRP',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 5,
    name: 'BNB',
    symbol: 'BNB',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png',
    price: '$598.78',
    change1h: '0.29%',
    change24h: '0.25%',
    change7d: '2.21%',
    marketCap: '$84,363,320,450',
    volume: '$1,410,145,424',
    supply: '140.89M BNB',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 6,
    name: 'Cardano',
    symbol: 'ADA',
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
    price: '$0.72',
    change1h: '0.15%',
    change24h: '2.34%',
    change7d: '1.89%',
    marketCap: '$25,363,320,450',
    volume: '$810,145,424',
    supply: '35.18B ADA',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 7,
    name: 'Polkadot',
    symbol: 'DOT',
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
    price: '$9.45',
    change1h: '0.25%',
    change24h: '1.85%',
    change7d: '3.12%',
    marketCap: '$12,123,456,789',
    volume: '$456,789,123',
    supply: '1.28B DOT',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 8,
    name: 'Avalanche',
    symbol: 'AVAX',
    image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png',
    price: '$35.67',
    change1h: '0.42%',
    change24h: '2.76%',
    change7d: '5.43%',
    marketCap: '$13,579,246,801',
    volume: '$567,890,123',
    supply: '381.23M AVAX',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 9,
    name: 'Polygon',
    symbol: 'MATIC',
    image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
    price: '$0.98',
    change1h: '0.33%',
    change24h: '1.98%',
    change7d: '4.21%',
    marketCap: '$9,876,543,210',
    volume: '$345,678,912',
    supply: '10.07B MATIC',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 10,
    name: 'Chainlink',
    symbol: 'LINK',
    image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png',
    price: '$15.23',
    change1h: '0.28%',
    change24h: '2.45%',
    change7d: '3.87%',
    marketCap: '$8,765,432,109',
    volume: '$234,567,891',
    supply: '575.95M LINK',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 11,
    name: 'Uniswap',
    symbol: 'UNI',
    image: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png',
    price: '$7.45',
    change1h: '0.19%',
    change24h: '1.67%',
    change7d: '2.98%',
    marketCap: '$5,678,901,234',
    volume: '$123,456,789',
    supply: '762.21M UNI',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 12,
    name: 'Cosmos',
    symbol: 'ATOM',
    image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png',
    price: '$9.87',
    change1h: '0.31%',
    change24h: '2.12%',
    change7d: '4.56%',
    marketCap: '$4,567,890,123',
    volume: '$98,765,432',
    supply: '462.80M ATOM',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 13,
    name: 'Aave',
    symbol: 'AAVE',
    image: 'https://assets.coingecko.com/coins/images/12645/large/AAVE.png',
    price: '$89.34',
    change1h: '0.45%',
    change24h: '3.21%',
    change7d: '6.78%',
    marketCap: '$3,456,789,012',
    volume: '$87,654,321',
    supply: '38.71M AAVE',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 14,
    name: 'Algorand',
    symbol: 'ALGO',
    image: 'https://assets.coingecko.com/coins/images/4380/large/download.png',
    price: '$0.21',
    change1h: '0.22%',
    change24h: '1.45%',
    change7d: '3.23%',
    marketCap: '$2,345,678,901',
    volume: '$76,543,210',
    supply: '11.17B ALGO',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 15,
    name: 'VeChain',
    symbol: 'VET',
    image: 'https://assets.coingecko.com/coins/images/1167/large/VeChain-Logo-768x725.png',
    price: '$0.034',
    change1h: '0.27%',
    change24h: '1.89%',
    change7d: '4.12%',
    marketCap: '$2,234,567,890',
    volume: '$65,432,109',
    supply: '65.75B VET',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 16,
    name: 'Filecoin',
    symbol: 'FIL',
    image: 'https://assets.coingecko.com/coins/images/12817/large/filecoin.png',
    price: '$5.67',
    change1h: '0.36%',
    change24h: '2.34%',
    change7d: '5.67%',
    marketCap: '$2,123,456,789',
    volume: '$54,321,098',
    supply: '374.47M FIL',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 17,
    name: 'The Graph',
    symbol: 'GRT',
    image: 'https://assets.coingecko.com/coins/images/13397/large/Graph_Token.png',
    price: '$0.19',
    change1h: '0.29%',
    change24h: '1.76%',
    change7d: '3.45%',
    marketCap: '$1,987,654,321',
    volume: '$43,210,987',
    supply: '10.47B GRT',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 18,
    name: 'Theta Network',
    symbol: 'THETA',
    image: 'https://assets.coingecko.com/coins/images/2538/large/theta-token-logo.png',
    price: '$0.98',
    change1h: '0.33%',
    change24h: '2.01%',
    change7d: '4.23%',
    marketCap: '$1,876,543,210',
    volume: '$32,109,876',
    supply: '1.00B THETA',
    isStarred: false,
    changeDirection: 'down'
  },
  {
    id: 19,
    name: 'Tezos',
    symbol: 'XTZ',
    image: 'https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png',
    price: '$1.12',
    change1h: '0.24%',
    change24h: '1.65%',
    change7d: '3.78%',
    marketCap: '$1,765,432,109',
    volume: '$21,098,765',
    supply: '1.58B XTZ',
    isStarred: false,
    changeDirection: 'up'
  },
  {
    id: 20,
    name: 'Fantom',
    symbol: 'FTM',
    image: 'https://assets.coingecko.com/coins/images/4001/large/Fantom_round.png',
    price: '$0.45',
    change1h: '0.31%',
    change24h: '1.98%',
    change7d: '4.56%',
    marketCap: '$1,654,321,098',
    volume: '$10,987,654',
    supply: '3.68B FTM',
    isStarred: false,
    changeDirection: 'down'
  }
];

const categories = [
  { name: 'All Crypto' },
  { name: 'NFTs' },
  { name: 'Memes', isHot: true },
  { name: 'SOL', isHot: true },
  { name: 'BNB', isHot: true },
  { name: 'USA', isHot: true },
  { name: 'AI', isHot: true },
  { name: 'RWA', isHot: true },
  { name: 'Gaming', isHot: true },
  { name: 'DeFAI', isHot: true },
  { name: 'AI Agents', isHot: true }
];

const subCategories = [
  { name: 'Coins', icon: '📊' },
  { name: 'Top', icon: '📈' },
  { name: 'Bithumb Voting', icon: '🗳️' },
  { name: 'Trending', icon: '🔥' },
  { name: 'New', icon: '✨' },
  { name: 'Gainers', icon: '📈' },
  { name: 'Most Visited', icon: '👁️' }
];

const CryptoInfo: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Crypto');
  const [activeSubCategory, setActiveSubCategory] = useState('Coins');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-[1280px] mx-auto px-4 py-6">
      {/* Categories */}
      <div className="flex items-center space-x-3 overflow-x-auto pb-4 mb-4">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs ${
              activeCategory === category.name
                ? 'bg-[#00E676] text-white'
                : 'bg-[#00E676] bg-opacity-10 text-[#00C853] hover:bg-opacity-20'
            } flex items-center`}
          >
            {category.name}
            {category.isHot && (
              <span className="ml-1 text-orange-500">🔥</span>
            )}
          </button>
        ))}
      </div>

      {/* Sub Categories */}
      <div className="flex items-center space-x-3 mb-6">
        {subCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveSubCategory(category.name)}
            className={`px-3 py-1.5 rounded-full text-xs ${
              activeSubCategory === category.name
                ? 'bg-[#00E676] text-white'
                : 'bg-[#00E676] bg-opacity-10 text-[#00C853] hover:bg-opacity-20'
            } flex items-center`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Crypto Table */}
      <div className="bg-white rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-sm text-gray-600">
              <th className="px-3 py-3 text-left whitespace-nowrap">#</th>
              <th className="px-3 py-3 text-left whitespace-nowrap">Name</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">Price</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">1h %</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">24h %</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">7d %</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">Market Cap</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">Volume(24h)</th>
              <th className="px-3 py-3 text-right whitespace-nowrap">Circulating Supply</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((crypto, index) => (
              <tr key={crypto.symbol} className="border-t border-gray-100 text-sm hover:bg-gray-50">
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star 
                      className={`w-3 h-3 mr-2 cursor-pointer ${crypto.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                    {index + 1}
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <Link to="/crypto/BTC" className="flex items-center hover:text-[#00E676]">
                    <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
                    <div>
                      <div className="font-bold">{crypto.name}</div>
                      <div className="text-gray-500 text-xs">{crypto.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="px-3 py-3 text-right whitespace-nowrap font-medium">{crypto.price}</td>
                <td className={`px-3 py-3 text-right whitespace-nowrap ${crypto.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.changeDirection === 'down' ? '▼' : '▲'} {crypto.change1h}
                </td>
                <td className={`px-3 py-3 text-right whitespace-nowrap ${crypto.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.changeDirection === 'down' ? '▼' : '▲'} {crypto.change24h}
                </td>
                <td className={`px-3 py-3 text-right whitespace-nowrap ${crypto.changeDirection === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                  {crypto.changeDirection === 'down' ? '▼' : '▲'} {crypto.change7d}
                </td>
                <td className="px-3 py-3 text-right whitespace-nowrap">{crypto.marketCap}</td>
                <td className="px-3 py-3 text-right whitespace-nowrap">
                  <div>{crypto.volume}</div>
                  <div className="text-gray-500 text-xs">{crypto.symbol}</div>
                </td>
                <td className="px-3 py-3 text-right whitespace-nowrap">
                  <div>{crypto.supply}</div>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div className="bg-[#00E676] h-1 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoInfo;