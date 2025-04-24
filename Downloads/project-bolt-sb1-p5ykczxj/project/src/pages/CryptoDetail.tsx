import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TrendingDown, TrendingUp, Globe, Twitter } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

interface CryptoDetailData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  currentPrice: string;
  currentPriceUSD: string;
  priceChange: string;
  marketCap: string;
  fdv: string;
  volume24h: string;
  circulatingSupply: string;
  totalSupply: string;
  website: string;
  twitter: string;
  telegram: string;
  description: string;
}

const cryptoDetails: Record<string, CryptoDetailData> = {
  'BTC': {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    currentPrice: '₩116,508,939',
    currentPriceUSD: '$88,264.53',
    priceChange: '+0.7%',
    marketCap: '$1,752,368,467,226',
    fdv: '$1,848,368,467,226',
    volume24h: '$36,425,721,676',
    circulatingSupply: '19,854,503 BTC',
    totalSupply: '21,000,000 BTC',
    website: 'bitcoin.org',
    twitter: 'bitcoin',
    telegram: 'bitcoin_en',
    description: '솔라나란?\n빠르고 저렴한 PoS(지분 증명 방식) 기반의 스마트 컨트랙트(Smart Contract) 플랫폼\n\n솔라나(Solana)는 아나톨리 야코벤코(Anatoly Yakovenko)가 2017년에 설립한 지분증명방식(PoS) 기반의 퍼블릭 블록체인 프로토콜입니다. 솔라나는 네트워크 탈중앙화와 보안을 유지한 채 높은 확장성을 제공한다는 것이 특징입니다. 솔라나는 PoH (Proof of History)를 포함한 8개의 핵심 기술을 통해 높은 확장성을 제공합니다.\n\n솔라나의 컨센서스는 무엇인가요?\n알고리즘 종류 - Proof of Stake (PoS)\n알고리즘 내용\n솔라나(Solana)는 역사 증명(Proof of History, PoH) 기술을 통해 확장성을 개선한 지분 증명 (Proof of Stake, PoS) 합의 알고리즘 기반의 블록체인입니다. 역사 증명은 솔라나의 시계 역할을 하는 핵심 기술로, SHA256 기반의 VDF (Verifiable Delay Function)를 이용하여 두 트랜젝션 사이의 시간 경과를 검증합니다.\n\n솔라나 토큰은 어떻게 사용되나요?\nSOL 토큰은 솔라나(Solana) 네트워크의 자체 토큰입니다. 주 활용처는 다음과 같습니다.\n\n(1) 스테이킹: 검증자 노드가 되기 위해서는 SOL 토큰을 네트워크에 스테이킹해야 합니다.\n(2) 수수료: 솔라나 네트워크 이용 시 SOL토큰을 수수료로 지불해야 합니다.'
  }
};

const allocationData = [
  { name: 'Protocol Incentives', value: 25, color: '#6B7280', amount: '25.00M', unlocked: '9.10M', locked: '16.00M' },
  { name: 'Core Contributors', value: 20, color: '#3B82F6', amount: '20.00M', unlocked: '5.95M', locked: '14.00M' },
  { name: 'Treasury', value: 20, color: '#8B5CF6', amount: '20.00M', unlocked: '5.95M', locked: '14.00M' },
  { name: 'Seed Round', value: 12.2, color: '#38BDF8', amount: '12.20M', unlocked: '7.26M', locked: '4.95M' },
  { name: 'Series A Round', value: 12, color: '#34D399', amount: '12.00M', unlocked: '7.14M', locked: '4.87M' },
  { name: 'Marketing', value: 3.7, color: '#F59E0B', amount: '3.70M', unlocked: '2.43M', locked: '1.28M' }
];

const vestingData = [
  { date: '24.01', Protocol: 5, Core: 4, Treasury: 4, Seed: 2, SeriesA: 2, Marketing: 1 },
  { date: '24.04', Protocol: 10, Core: 8, Treasury: 8, Seed: 5, SeriesA: 5, Marketing: 2 },
  { date: '24.07', Protocol: 15, Core: 12, Treasury: 12, Seed: 8, SeriesA: 8, Marketing: 2.5 },
  { date: '24.10', Protocol: 20, Core: 16, Treasury: 16, Seed: 10, SeriesA: 10, Marketing: 3 },
  { date: '25.01', Protocol: 23, Core: 18, Treasury: 18, Seed: 11, SeriesA: 11, Marketing: 3.3 },
  { date: '25.04', Protocol: 25, Core: 20, Treasury: 20, Seed: 12.2, SeriesA: 12, Marketing: 3.7 }
];

const eventData = [
  {
    id: 1,
    title: 'Bitcoin ETF Launch Event',
    date: '2025.04.15',
    reward: '1.5 BTC',
    participants: '2,500',
    status: '진행중',
    tags: ['#ETF', '#Launch', '#Airdrop']
  },
  {
    id: 2,
    title: 'BTC Trading Competition',
    date: '2025.04.20',
    reward: '0.8 BTC',
    participants: '1,800',
    status: '진행중',
    tags: ['#Trading', '#Competition', '#Rewards']
  },
  {
    id: 3,
    title: 'Bitcoin Conference 2025',
    date: '2025.05.01',
    reward: '2.0 BTC',
    participants: '3,000',
    status: '예정',
    tags: ['#Conference', '#Networking', '#Prize']
  },
  {
    id: 4,
    title: 'BTC Staking Program',
    date: '2025.04.25',
    reward: '1.2 BTC',
    participants: '2,200',
    status: '진행중',
    tags: ['#Staking', '#Rewards', '#Yield']
  },
  {
    id: 5,
    title: 'Bitcoin Mining Event',
    date: '2025.05.05',
    reward: '3.0 BTC',
    participants: '1,500',
    status: '예정',
    tags: ['#Mining', '#Hardware', '#Rewards']
  },
  {
    id: 6,
    title: 'BTC Development Hackathon',
    date: '2025.05.10',
    reward: '5.0 BTC',
    participants: '800',
    status: '예정',
    tags: ['#Development', '#Hackathon', '#Innovation']
  }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#EBEFFF] p-3 rounded-lg shadow-lg border border-[#3e5eff] text-xs">
        <p className="font-bold mb-1">{data.name}</p>
        <p className="text-gray-600">Total: {data.value}%</p>
        <p className="text-gray-600">Unlocked: {data.unlocked}</p>
        <p className="text-gray-600">Locked: {data.locked}</p>
      </div>
    );
  }
  return null;
};

const CustomAreaTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#EBEFFF] p-3 rounded-lg shadow-lg border border-[#3e5eff]">
        <div className="grid gap-1 text-xs">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4">
              <span style={{ color: entry.color }}>{entry.name}:</span>
              <span className="font-bold">{entry.value}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const CryptoDetail: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const navigate = useNavigate();
  const crypto = cryptoDetails[symbol?.toUpperCase() ?? ''];
  const [priceRange, setPriceRange] = useState({ min: '₩114,397,588', max: '₩116,863,560' });
  const [activeTab, setActiveTab] = useState<'소개' | '유통현황' | '이벤트'>('소개');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          "width": "100%",
          "height": "320",
          "symbol": `BINANCE:${symbol}USDT`,
          "interval": "D",
          "timezone": "Asia/Seoul",
          "theme": "light",
          "style": "1",
          "locale": "kr",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_chart"
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [symbol]);

  if (!crypto) {
    return <div>Crypto not found</div>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case '소개':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#3e5eff]">솔라나란?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  빠르고 저렴한 PoS(지분 증명 방식) 기반의 스마트 컨트랙트(Smart Contract) 플랫폼
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  솔라나(Solana)는 아나톨리 야코벤코(Anatoly Yakovenko)가 2017년에 설립한 지분증명방식(PoS) 기반의 퍼블릭 블록체인 프로토콜입니다. 솔라나는 네트워크 탈중앙화와 보안을 유지한 채 높은 확장성을 제공한다는 것이 특징입니다. 솔라나는 PoH (Proof of History)를 포함한 8개의 핵심 기술을 통해 높은 확장성을 제공합니다.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#3e5eff]">솔라나의 컨센서스는 무엇인가요?</h3>
                <div className="bg-[#EBEFFF] rounded-lg p-4">
                  <p className="font-bold mb-2">알고리즘 종류 - Proof of Stake (PoS)</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    솔라나(Solana)는 역사 증명(Proof of History, PoH) 기술을 통해 확장성을 개선한 지분 증명 (Proof of Stake, PoS) 합의 알고리즘 기반의 블록체인입니다. 역사 증명은 솔라나의 시계 역할을 하는 핵심 기술로, SHA256 기반의 VDF (Verifiable Delay Function)를 이용하여 두 트랜젝션 사이의 시간 경과를 검증합니다.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#3e5eff]">솔라나 토큰은 어떻게 사용되나요?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  SOL 토큰은 솔라나(Solana) 네트워크의 자체 토큰입니다. 주 활용처는 다음과 같습니다.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3e5eff] text-white flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-bold">스테이킹:</span> 검증자 노드가 되기 위해서는 SOL 토큰을 네트워크에 스테이킹해야 합니다.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#3e5eff] text-white flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-bold">수수료:</span> 솔라나 네트워크 이용 시 SOL토큰을 수수료로 지불해야 합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case '유통현황':
        return (
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <h3 className="text-base font-bold mb-4">분배현황 (Allocation)</h3>
              <div className="flex items-start">
                <div className="w-[160px]">
                  <ResponsiveContainer width="100%" height={160}>
                    <PieChart>
                      <Pie
                        data={allocationData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={70}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {allocationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 pl-6">
                  <div className="grid gap-2">
                    <div className="grid grid-cols-4 text-xs font-medium text-gray-500 pb-2 border-b">
                      <div>Categories</div>
                      <div className="text-right">Total</div>
                      <div className="text-right">Unlocked</div>
                      <div className="text-right">Locked</div>
                    </div>
                    {allocationData.map((item) => (
                      <div key={item.name} className="grid grid-cols-4 text-xs items-center">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                          <span>{item.name}</span>
                        </div>
                        <div className="text-right">{item.value}%</div>
                        <div className="text-right">{item.unlocked}</div>
                        <div className="text-right">{item.locked}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="text-base font-bold mb-4">유통스케쥴 (Vesting Schedule)</h3>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={vestingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip content={<CustomAreaTooltip />} />
                    {allocationData.slice().reverse().map((item) => (
                      <Area
                        key={item.name}
                        type="monotone"
                        dataKey={item.name.split(' ')[0]}
                        stackId="1"
                        stroke={item.color}
                        fill={item.color}
                        fillOpacity={0.6}
                      />
                    ))}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      case '이벤트':
        return (
          <div className="grid grid-cols-3 gap-4">
            {eventData.map((event) => (
              <div 
                key={event.id} 
                onClick={() => navigate(`/events/${event.id}`)}
                className="border rounded-lg p-4 hover:border-[#3e5eff] transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 hover:bg-[#EBEFFF] cursor-pointer"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 truncate">{event.title}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-gray-600">{event.date}</p>
                      <span className={`px-2 py-0.5 rounded-full text-xs whitespace-nowrap ${
                        event.status === '진행중' 
                          ? 'bg-[#3e5eff] text-white' 
                          : event.status === '예정'
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-500 text-white'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3 overflow-hidden">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-white text-[#3e5eff] rounded-full text-xs whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-600">
                    참여자 <span className="font-bold text-gray-900">{event.participants}</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold text-[#3e5eff]">{event.reward.split(' ')[0]}</span>
                    <span className="ml-1 text-sm font-bold text-[#3e5eff]">BTC</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="w-[1280px] mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="flex items-center mb-3">
              <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
              <div className="flex items-center">
                <h1 className="text-lg font-bold mr-2">{crypto.name}</h1>
                <span className="text-gray-500 text-xs">{crypto.symbol}</span>
                <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded-full">#1</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-baseline">
                <div className="text-2xl font-bold">{crypto.currentPrice}</div>
                <div className="ml-2 text-green-500 flex items-center text-sm">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {crypto.priceChange}
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-1">1.0000 BTC = {crypto.currentPriceUSD}</div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>24시간 범위</span>
                <div>
                  <span className="text-gray-500">{priceRange.min}</span>
                  <span className="mx-2">-</span>
                  <span className="text-gray-500">{priceRange.max}</span>
                </div>
              </div>
              <div className="h-1.5 bg-gradient-to-r from-yellow-400 via-green-500 to-green-500 rounded-full" />
            </div>

            <h3 className="text-sm font-bold mb-3">가상자산 정보</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b">
                <span className="text-gray-600">시가총액(Market Cap)</span>
                <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  {crypto.marketCap}
                </div>
              </div>
              
              <div className="flex justify-between items-center py-1.5 border-b">
                <span className="text-gray-600">가치완전희석(FDV)</span>
                <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  {crypto.fdv}
                </div>
              </div>
              
              <div className="flex justify-between items-center py-1.5 border-b">
                <span className="text-gray-600">24시간 거래대금(Volume)</span>
                <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  {crypto.volume24h}
                </div>
              </div>
              
              <div className="flex justify-between items-center py-1.5 border-b">
                <span className="text-gray-600">유통량(Circulating Supply)</span>
                <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  {crypto.circulatingSupply}
                </div>
              </div>
              
              <div className="flex justify-between items-center py-1.5 border-b">
                <span className="text-gray-600">총 공급량</span>
                <div className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
                  {crypto.totalSupply}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-bold mb-3">정보</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">웹사이트</span>
                  <a href={`https://${crypto.website}`} target="_blank" rel="noopener noreferrer" 
                     className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                     {crypto.website}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">백서</span>
                  <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                    Whitepaper
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">익스플로러</span>
                  <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                    Mempool
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">지갑</span>
                  <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                    Ledger
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">커뮤니티</span>
                  <div className="flex gap-2">
                    <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      Reddit
                    </a>
                    <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-8">
          <div className="bg-white rounded-lg p-4 mb-4">
            <div id="tradingview_chart" className="h-[320px]"></div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <div className="flex gap-3 mb-4">
              {['소개', '유통현황', '이벤트'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-2.5 py-1 rounded-full text-sm border ${
                    activeTab === tab
                      ? 'bg-[#3e5eff] text-white border-[#3e5eff]'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetail;