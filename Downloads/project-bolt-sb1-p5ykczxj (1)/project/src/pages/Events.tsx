import React, { useState } from 'react';
import { Search } from 'lucide-react';
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

interface EventData {
  id: number;
  title: string;
  status: '진행중' | '예정' | '종료';
  progress: number;
  period: string;
  image: string;
  tags: string[];
  amount?: string;
  symbol?: string;
  recommended?: boolean;
}

interface RankingData {
  rank: number;
  name: string;
  symbol: string;
  color: string;
  accumulatedAmount: string;
  claimAmount: string;
}

interface ParticipantData {
  rank: number;
  email: string;
  participationCount: string;
  questCount: string;
}

const rankingData: RankingData[] = [
  { rank: 1, name: "퀘스트 토큰", symbol: "QT", color: "bg-blue-500", accumulatedAmount: "999,999,999 QT", claimAmount: "99 QT" },
  { rank: 2, name: "KOL 토큰", symbol: "KOL", color: "bg-green-500", accumulatedAmount: "999,999,999 KOL", claimAmount: "99 KOL" },
  { rank: 3, name: "Kuestly 토큰", symbol: "Kuestly", color: "bg-red-500", accumulatedAmount: "999,999,999 Kuestly", claimAmount: "99 Kuestly" },
  { rank: 4, name: "이더리움", symbol: "ETH", color: "bg-purple-500", accumulatedAmount: "999,999,999 ETH", claimAmount: "99 ETH" },
  { rank: 5, name: "비트코인", symbol: "BTC", color: "bg-yellow-500", accumulatedAmount: "999,999,999 BTC", claimAmount: "99 BTC" }
];

const participantData: ParticipantData[] = [
  { rank: 1, email: "kk****@***.com", participationCount: "999,999,999", questCount: "999,999,999" },
  { rank: 2, email: "dd****@***.com", participationCount: "999,999,999", questCount: "999,999,999" },
  { rank: 3, email: "aa****@***.com", participationCount: "999,999,999", questCount: "999,999,999" },
  { rank: 4, email: "bb****@***.com", participationCount: "999,999,999", questCount: "999,999,999" },
  { rank: 5, email: "cc****@***.com", participationCount: "999,999,999", questCount: "999,999,999" }
];

const getRandomStatus = () => {
  const statuses: ('진행중' | '예정' | '종료')[] = ['진행중', '예정', '종료'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const eventData: EventData[] = [
  {
    id: 1,
    title: 'CTC 상장기념 에어드랍',
    status: getRandomStatus(),
    progress: 82,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg',
    tags: ['#거래', '#빗썸', '#보너스'],
    amount: '10,000',
    symbol: 'CTC',
    recommended: true
  },
  {
    id: 2,
    title: '크립토나이트 에어드랍',
    status: getRandomStatus(),
    progress: 50,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    tags: ['#거래', '#코인원', '#에어드랍'],
    amount: '5,000',
    symbol: 'SEILOR',
    recommended: true
  },
  {
    id: 3,
    title: '빗썸 x BONK WEEK',
    status: getRandomStatus(),
    progress: 82,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    tags: ['#퀘스트', '#보상', '#이벤트'],
    amount: '100,000',
    symbol: 'BONK',
    recommended: true
  },
  {
    id: 4,
    title: '아발론 에어드랍 이벤트',
    status: getRandomStatus(),
    progress: 65,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg',
    tags: ['#AVL', '#보상', '#이벤트'],
    amount: '50,000',
    symbol: 'AVL',
    recommended: true
  },
  {
    id: 5,
    title: 'Kuestly 토큰 런치패드',
    status: getRandomStatus(),
    progress: 95,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    tags: ['#런치패드', '#에어드랍', '#보상'],
    amount: '200,000',
    symbol: 'KT',
    recommended: true
  },
  {
    id: 6,
    title: 'Assemble x 빗썸 상장 이벤트',
    status: getRandomStatus(),
    progress: 75,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730567/pexels-photo-730567.jpeg',
    tags: ['#거래', '#빗썸', '#에어드랍'],
    amount: '1,000',
    symbol: 'ASB',
  },
  {
    id: 7,
    title: '솔라나 트레이딩 이벤트',
    status: getRandomStatus(),
    progress: 45,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730557/pexels-photo-730557.jpeg',
    tags: ['#거래', '#솔라나', '#보상'],
    amount: '100',
    symbol: 'SOL',
  },
  {
    id: 8,
    title: '업비트 신규 코인 투표',
    status: getRandomStatus(),
    progress: 90,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730546/pexels-photo-730546.jpeg',
    tags: ['#투표', '#업비트', '#에어드랍'],
    amount: '500',
    symbol: 'UPT',
  },
  {
    id: 9,
    title: '바이낸스 트레이딩 대회',
    status: getRandomStatus(),
    progress: 30,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730552/pexels-photo-730552.jpeg',
    tags: ['#거래', '#바이낸스', '#대회'],
    amount: '10,000',
    symbol: 'USDT',
  },
  {
    id: 10,
    title: '메타버스 토큰 에어드랍',
    status: getRandomStatus(),
    progress: 70,
    period: '종료일 2025.04.13 24:00',
    image: 'https://images.pexels.com/photos/730568/pexels-photo-730568.jpeg',
    tags: ['#메타버스', '#에어드랍', '#보상'],
    amount: '50,000',
    symbol: 'META',
  }
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState<string>('#거래');

  const recommendedEvents = eventData.filter(event => event.recommended);
  const filteredEvents = eventData.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === '#거래' || event.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const EventCard = ({ event }: { event: EventData }) => (
    <Link to={`/events/${event.id}`} className="block">
      <div className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#00E676] transition-all transform hover:-translate-y-1 hover:shadow-lg duration-200">
        <div className="relative pb-[60%]">
          <img 
            src={event.image} 
            alt={event.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              event.status === '진행중' 
                ? 'bg-[#00E676] text-white' 
                : event.status === '예정'
                ? 'bg-green-500 text-white'
                : 'bg-gray-600 bg-opacity-50 text-white'
            }`}>
              {event.status}
            </span>
          </div>
        </div>
        <div className="p-2">
          <div className="flex items-center gap-1 mb-1.5">
            {event.tags.map((tag, index) => (
              <span key={index} className="px-1.5 py-0.5 rounded-full bg-[#00E676] text-white text-[10px]">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-sm font-bold mb-2 truncate">{event.title}</h3>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-600">진행률</span>
            <span className="text-xs">{event.progress}%</span>
          </div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full rounded-full bg-[#00E676]"
              style={{ width: `${event.progress}%` }}
            />
          </div>
          <div className="flex justify-end">
            {event.amount && event.symbol && (
              <span className="px-1.5 py-0.5 bg-[#00E676] text-white rounded-full text-xs font-bold">
                {event.amount} {event.symbol}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <>
      <div className="bg-[#00E676] w-full h-[5cm]">
        <div className="w-[1280px] mx-auto px-4 h-full flex items-center justify-between">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">비트코인 10개 에어드랍 이벤트</h1>
            <p className="text-xl opacity-90">지금 참여하고 비트코인 받아가세요!</p>
          </div>
          <img 
            src="https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Event Banner" 
            className="h-[4cm] w-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="w-[1280px] mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold">추천 이벤트</h2>
              <div className="flex gap-2">
                {['#거래', '#방문', '#팔로우', '#투표', '#텔레그램'].map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-full text-xs bg-[#00E676] text-white">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {recommendedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold">진행중인 이벤트</h2>
            <div className="flex gap-2">
              {['#거래', '#방문', '#팔로우', '#투표', '#텔레그램', '#트위터'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-2 py-1 rounded-full text-xs transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#00E676] text-white'
                      : 'bg-[#00E676] bg-opacity-10 text-[#00C853] hover:bg-opacity-20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="이벤트 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 border border-gray-200 rounded-full w-48 text-sm"
            />
            <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 mb-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="border border-[#00E676] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
                <h3 className="text-base font-bold">에어드랍 TOP5</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-1 text-xs bg-[#00E676] text-white rounded-full">전체</button>
                  <button className="px-4 py-1 text-xs bg-[#00E676] bg-opacity-10 text-[#00E676] hover:bg-opacity-20 rounded-full">월</button>
                  <button className="px-4 py-1 text-xs bg-[#00E676] bg-opacity-10 text-[#00E676] hover:bg-opacity-20 rounded-full">주</button>
                </div>
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-12 text-xs font-bold text-gray-600 px-4 py-3 border-b">
                  <div className="col-span-2 text-center">순위</div>
                  <div className="col-span-4 text-center">가상자산명</div>
                  <div className="col-span-3 text-center">누적 수량</div>
                  <div className="col-span-3 text-center">평균 claim 수량</div>
                </div>
                {rankingData.map((item) => (
                  <div key={item.rank} className="grid grid-cols-12 items-center px-4 py-4 text-xs border-b last:border-b-0">
                    <div className="col-span-2 text-center text-[#00E676] font-bold">{item.rank}위</div>
                    <div className="col-span-4 flex items-center justify-center">
                      <div className={`w-6 h-6 rounded-full ${item.color} flex items-center justify-center text-white mr-2`}>
                        {item.symbol.charAt(0)}
                      </div>
                      <span>{item.name}</span>
                    </div>
                    <div className="col-span-3 text-center">{item.accumulatedAmount}</div>
                    <div className="col-span-3 text-center">{item.claimAmount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#00E676] rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
                <h3 className="text-base font-bold">참여자 TOP5</h3>
                <div className="flex gap-2">
                  <button className="px-4 py-1 text-xs bg-[#00E676] text-white rounded-full">전체</button>
                  <button className="px-4 py-1 text-xs bg-[#00E676] bg-opacity-10 text-[#00E676] hover:bg-opacity-20 rounded-full">월</button>
                  <button className="px-4 py-1 text-xs bg-[#00E676] bg-opacity-10 text-[#00E676] hover:bg-opacity-20 rounded-full">주</button>
                </div>
              </div>
              <div className="bg-white">
                <div className="grid grid-cols-12 text-xs font-bold text-gray-600 px-4 py-3 border-b">
                  <div className="col-span-2 text-center">순위</div>
                  <div className="col-span-4 text-center">참여자</div>
                  <div className="col-span-3 text-center">누적 참여건</div>
                  <div className="col-span-3 text-center">누적 퀘스트 수행</div>
                </div>
                {participantData.map((item) => (
                  <div key={item.rank} className="grid grid-cols-12 items-center px-4 py-4 text-xs border-b last:border-b-0">
                    <div className="col-span-2 text-center text-[#00E676] font-bold">{item.rank}위</div>
                    <div className="col-span-4 text-center">{item.email}</div>
                    <div className="col-span-3 text-center">{item.participationCount}</div>
                    <div className="col-span-3 text-center">{item.questCount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-6">
            <div className="bg-gradient-to-br from-[#00E676] to-[#00E676] rounded-xl p-4 text-center text-white">
              <div className="text-sm mb-2">총 참여자</div>
              <div className="text-2xl font-bold">3,000,000</div>
            </div>
            <div className="bg-gradient-to-br from-[#00E676] to-[#00E676] rounded-xl p-4 text-center text-white">
              <div className="text-sm mb-2">총 참여재단</div>
              <div className="text-2xl font-bold">500</div>
            </div>
            <div className="bg-gradient-to-br from-[#00E676] to-[#00E676] rounded-xl p-4 text-center text-white">
              <div className="text-sm mb-2">총 에어드랍 금액</div>
              <div className="text-2xl font-bold">999,999,999</div>
            </div>
            <div className="bg-gradient-to-br from-[#00E676] to-[#00E676] rounded-xl p-4 text-center text-white">
              <div className="text-sm mb-2">총 퀘스트 수행건</div>
              <div className="text-2xl font-bold">999,999,999</div>
            </div>
            <div className="bg-gradient-to-br from-[#00E676] to-[#00E676] rounded-xl p-4 text-center text-white">
              <div className="text-sm mb-2">거래소 상장건</div>
              <div className="text-2xl font-bold">100</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;