import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CryptoTable from './CryptoTable';
import CryptoShowcase from './CryptoShowcase';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { CryptoData } from '../types/crypto';
import { mockCryptoData } from '../data/mockData';

const TradingSupport: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activePeriod, setActivePeriod] = useState<'1일' | '7일' | '30일' | '90일'>('1일');
  const [currentPage, setCurrentPage] = useState(1);
  const [cryptoData] = useState<CryptoData[]>(mockCryptoData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredData = cryptoData.filter(crypto => 
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const spotlightCryptos = [
    { name: 'Ethereum', symbol: 'ETH', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
    { name: 'BNB Smart Chain', symbol: 'BSC', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png' },
    { name: 'Solana', symbol: 'SOL', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
    { name: 'Arbitrum One', symbol: 'ARB', image: 'https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg' },
    { name: 'Optimism', symbol: 'OP', image: 'https://assets.coingecko.com/coins/images/25244/large/Optimism.png' },
    { name: 'Kava', symbol: 'KAVA', image: 'https://assets.coingecko.com/coins/images/9761/large/kava.png' }
  ];
  
  return (
    <div className="max-w-[1280px] mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">거래지원 요청 순위</h2>
          <div className="w-6 h-6 bg-[#E12343] rounded-full flex items-center justify-center text-white font-bold">B</div>
        </div>
        
        <div className="flex items-center">
          {['1일', '7일', '30일', '90일'].map((period) => (
            <div
              key={period}
              onClick={() => setActivePeriod(period as any)}
              className={`mx-2 cursor-pointer`}
            >
              <div className={`px-4 py-1 rounded-full border ${
                activePeriod === period 
                  ? 'bg-[#3e5eff] text-white border-[#3e5eff]' 
                  : 'bg-white text-[#3e5eff] border-[#3e5eff]'
              } hover:bg-[#3e5eff] hover:text-white transition-colors text-sm`}>
                {period}
              </div>
            </div>
          ))}
          
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="가상자산명 또는 심볼 입력"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-md py-1 pl-8 pr-4 w-56 text-sm"
            />
            <div className="absolute left-2.5 top-1.5">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      
      <CryptoTable data={filteredData} />
      
      <div className="flex justify-center items-center mt-4 mb-8">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 mx-1 text-[#3e5eff] disabled:text-gray-300"
        >
          &lt;
        </button>
        <button 
          onClick={() => setCurrentPage(1)}
          className={`px-2 py-1 mx-1 ${currentPage === 1 ? 'font-bold text-[#3e5eff]' : ''}`}
        >
          1
        </button>
        <button 
          onClick={() => setCurrentPage(2)}
          className={`px-2 py-1 mx-1 ${currentPage === 2 ? 'font-bold text-[#3e5eff]' : ''}`}
        >
          2
        </button>
        <button 
          onClick={() => setCurrentPage(3)}
          className={`px-2 py-1 mx-1 ${currentPage === 3 ? 'font-bold text-[#3e5eff]' : ''}`}
        >
          3
        </button>
        <span className="px-2">...</span>
        <button 
          onClick={() => setCurrentPage(999)}
          className={`px-2 py-1 mx-1 ${currentPage === 999 ? 'font-bold text-[#3e5eff]' : ''}`}
        >
          999
        </button>
        <button 
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-2 py-1 mx-1 text-[#3e5eff]"
        >
          &gt;
        </button>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold">주목받는 가상자산</h3>
          <span>🌟</span>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {spotlightCryptos.map((crypto, index) => (
            <Link
              key={index}
              to="/crypto/btc"
              className="block bg-white rounded-xl border border-gray-200 p-3 hover:border-[#3e5eff] transition-all hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-2">
                  <img src={crypto.image} alt={crypto.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-semibold text-xs">{crypto.name}</h4>
                <span className="text-gray-500 text-[10px]">{crypto.symbol}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CryptoShowcase />
    </div>
  );
};

export default TradingSupport;