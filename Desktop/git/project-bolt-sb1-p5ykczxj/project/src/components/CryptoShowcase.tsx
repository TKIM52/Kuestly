import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CryptoCard {
  symbol: string;
  name: string;
  amount: string;
  progress: number;
  color: string;
  image: string;
}

interface KOL {
  id: number;
  name: string;
  avatar: string;
  telegram: string;
  twitter: string;
  subscribers: string;
  subscribersDelta: string;
  posts: string;
  postsDelta: string;
  tags: string[];
}

const cryptoCards: CryptoCard[] = [
  { 
    symbol: 'ETH', 
    name: 'Ethereum', 
    amount: '100,000 ETH', 
    progress: Math.floor(Math.random() * 41) + 60,
    color: 'bg-gray-700',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  { 
    symbol: 'BNB', 
    name: 'BNB', 
    amount: '10 BNB', 
    progress: Math.floor(Math.random() * 41) + 60,
    color: 'bg-yellow-500',
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png'
  },
  { 
    symbol: 'SOL', 
    name: 'Solana', 
    amount: '100 SOL', 
    progress: Math.floor(Math.random() * 41) + 60,
    color: 'bg-purple-500',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
  },
  { 
    symbol: 'LINK', 
    name: 'ChainLink', 
    amount: '100,000 LINK', 
    progress: Math.floor(Math.random() * 41) + 60,
    color: 'bg-blue-500',
    image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png'
  },
];

const questTags = ['#방문', '#텔레그램입장', '#팔로우', '#유투브', '#투표'];
const tagPool = ['#채널급상승', '#빠른뉴스', '#이벤트중', '#리워드', '#팔로워증가'];

const popularKOLs: KOL[] = [
  {
    id: 1,
    name: '코인갤러리',
    avatar: '/coin-gallery.jpg',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: '999,999',
    subscribersDelta: '▲999,999',
    posts: '999,999',
    postsDelta: '▲999,999',
    tags: tagPool.sort(() => Math.random() - 0.5).slice(0, 3)
  },
  {
    id: 2,
    name: '화영이아빠',
    avatar: '/hwayoung.jpg',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: '999,999',
    subscribersDelta: '▲999,999',
    posts: '999,999',
    postsDelta: '▲999,999',
    tags: tagPool.sort(() => Math.random() - 0.5).slice(0, 3)
  },
  {
    id: 3,
    name: '토다로 코인보브',
    avatar: '/todaro.jpg',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: '999,999',
    subscribersDelta: '▲999,999',
    posts: '999,999',
    postsDelta: '▲999,999',
    tags: tagPool.sort(() => Math.random() - 0.5).slice(0, 3)
  },
  {
    id: 4,
    name: 'CEN',
    avatar: '/cen.jpg',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: '999,999',
    subscribersDelta: '▲999,999',
    posts: '999,999',
    postsDelta: '▲999,999',
    tags: tagPool.sort(() => Math.random() - 0.5).slice(0, 3)
  },
];

const CryptoShowcase: React.FC = () => {
  const [showQuestArrows, setShowQuestArrows] = useState(false);
  const [showKOLArrows, setShowKOLArrows] = useState(false);
  const [likedKols, setLikedKols] = useState<number[]>([]);
  const [questPage, setQuestPage] = useState(0);
  const [kolPage, setKolPage] = useState(0);
  const navigate = useNavigate();

  const handleLike = (kolId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedKols(prev => 
      prev.includes(kolId) 
        ? prev.filter(id => id !== kolId)
        : [...prev, kolId]
    );
  };

  const getRandomTags = () => {
    return [...questTags].sort(() => Math.random() - 0.5).slice(0, 3);
  };

  const handleQuestPrev = () => {
    setQuestPage(prev => Math.max(0, prev - 1));
  };

  const handleQuestNext = () => {
    setQuestPage(prev => Math.min(Math.floor((cryptoCards.length - 1) / 4), prev + 1));
  };

  const handleKOLPrev = () => {
    setKolPage(prev => Math.max(0, prev - 1));
  };

  const handleKOLNext = () => {
    setKolPage(prev => Math.min(Math.floor((popularKOLs.length - 1) / 4), prev + 1));
  };

  const visibleQuestCards = cryptoCards.slice(questPage * 4, (questPage + 1) * 4);
  const visibleKOLs = popularKOLs.slice(kolPage * 4, (kolPage + 1) * 4);

  return (
    <div className="mt-8">
      <div className="mb-12 relative group"
           onMouseEnter={() => setShowQuestArrows(true)}
           onMouseLeave={() => setShowQuestArrows(false)}>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold">마감 임박 퀘스트</h3>
          <span>🚨</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {visibleQuestCards.map((crypto) => (
            <Link
              key={crypto.symbol}
              to={`/crypto/BTC`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#3e5eff] transition-all hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 duration-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <img src={crypto.image} alt={crypto.name} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <div className="font-bold text-sm">Welcome to {crypto.name}!</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-5 h-5 rounded-full bg-gray-300"></div>
                    <div className="w-5 h-5 rounded-full bg-gray-400"></div>
                    <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                  </div>
                  <span className="ml-3 text-gray-600 text-xs">999+</span>
                </div>
                <div className="flex items-center">
                  <div className="inline-block px-2 py-0.5 bg-[#3e5eff] bg-opacity-10 rounded-full text-[#3e5eff] font-semibold text-xs">
                    {crypto.amount}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mb-3">
                {getRandomTags().map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-[10px] rounded-full bg-[#3e5eff] bg-opacity-10 text-[#3e5eff]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative h-3.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#3e5eff] rounded-full flex items-center justify-center text-white text-[10px] font-semibold"
                  style={{ width: `${crypto.progress}%` }}
                >
                  {crypto.progress}%
                </div>
              </div>
            </Link>
          ))}
        </div>
        {showQuestArrows && (
          <>
            <button 
              onClick={handleQuestPrev}
              disabled={questPage === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-[#3e5eff]" />
            </button>
            <button 
              onClick={handleQuestNext}
              disabled={questPage >= Math.floor((cryptoCards.length - 1) / 4)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-[#3e5eff]" />
            </button>
          </>
        )}
      </div>

      <div className="relative group"
           onMouseEnter={() => setShowKOLArrows(true)}
           onMouseLeave={() => setShowKOLArrows(false)}>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-bold">활동이 많은 KOL</h3>
          <span>📈</span>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {visibleKOLs.map((kol) => (
            <div
              key={kol.id}
              onClick={() => navigate(`/kol/${kol.id}`)}
              className="border border-gray-200 rounded-lg p-3 hover:border-[#3e5eff] transition-all hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h4 className="font-bold text-[13px] mb-1">{kol.name}</h4>
                    <div className="flex gap-2">
                      <a 
                        href={`https://t.me/${kol.telegram}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#229ED9] hover:text-[#1a7aa8]"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaTelegram size={16} />
                      </a>
                      <a 
                        href={`https://twitter.com/${kol.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-black hover:text-gray-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaXTwitter size={16} />
                      </a>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={(e) => handleLike(kol.id, e)}
                  className={`text-xl transition-colors ${likedKols.includes(kol.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
                >
                  ♥
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3 text-center">
                <div>
                  <div className="text-xs text-gray-600">구독자</div>
                  <div className="font-bold text-[13px]">{kol.subscribers}</div>
                  <div className="text-[11px] text-red-500">{kol.subscribersDelta}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600">포스팅</div>
                  <div className="font-bold text-[13px]">{kol.posts}</div>
                  <div className="text-[11px] text-red-500">{kol.postsDelta}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {kol.tags.map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-[10px] rounded-full bg-[#3e5eff] bg-opacity-10 text-[#3e5eff]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {showKOLArrows && (
          <>
            <button 
              onClick={handleKOLPrev}
              disabled={kolPage === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-[#3e5eff]" />
            </button>
            <button 
              onClick={handleKOLNext}
              disabled={kolPage >= Math.floor((popularKOLs.length - 1) / 4)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-[#3e5eff]" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoShowcase;