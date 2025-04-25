import React, { useState } from 'react';
import { Search, RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

interface KolPost {
  id: number;
  name: string;
  telegram: string;
  twitter: string;
  subscribers: {
    current: string;
    delta: string;
  };
  posts: {
    current: string;
    delta: string;
  };
  content: string;
}

interface ChannelPost {
  id: number;
  channel: string;
  timestamp: string;
  title: string;
  content: string;
}

const recommendedChannels: KolPost[] = [
  {
    id: 1,
    name: '코인갤러리',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 2,
    name: '화영이아빠',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 3,
    name: '토다로 코인보브',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
];

const channelList: KolPost[] = [
  {
    id: 4,
    name: 'CEN',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 5,
    name: 'CEN2',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 6,
    name: 'CEN3',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 7,
    name: 'CEN4',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 8,
    name: 'CEN5',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 9,
    name: 'CEN6',
    telegram: 'godeland01',
    twitter: 'godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  }
];

const latestPosts: ChannelPost[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 7,
  channel: '코인 갤러리',
  timestamp: '2023-04-14 15:58',
  title: '차세대 밈코인 FO-X 생태계',
  content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
}));

const KolNews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(Math.floor((recommendedChannels.length - 1) / 3), prev + 1));
  };

  const visibleChannels = recommendedChannels.slice(currentPage * 3, (currentPage + 1) * 3);

  const KolCard = ({ kol }: { kol: KolPost }) => (
    <div 
      onClick={() => navigate(`/kol/${kol.id}`)}
      className="h-[4.8cm] bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-[#00E676] hover:border-2 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <button className="absolute -top-1 -right-1 text-lg">♥</button>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm">{kol.name}</h3>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <a 
                href={`https://t.me/${kol.telegram}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#229ED9]"
                onClick={(e) => e.stopPropagation()}
              >
                <FaTelegram className="w-4 h-4" />
              </a>
              <a 
                href={`https://twitter.com/${kol.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <span className="text-xs text-gray-500">{kol.telegram}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 text-center mb-3">
        <div>
          <div className="text-xs text-gray-500">구독자</div>
          <div className="font-bold text-sm">{kol.subscribers.current}</div>
          <div className="text-xs text-red-500">▲{kol.subscribers.delta}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">포스팅</div>
          <div className="font-bold text-sm">{kol.posts.current}</div>
          <div className="text-xs text-red-500">▲{kol.posts.delta}</div>
        </div>
      </div>

      <div className="text-xs text-gray-600 line-clamp-2">{kol.content}</div>
    </div>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="flex">
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold">추천 채널</h2>
              <div className="flex gap-1.5">
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#리워드</span>
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#빠른정보</span>
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#이벤트</span>
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#인기급상승</span>
              </div>
            </div>
          </div>

          <div 
            className="relative group mb-8"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <div className="grid grid-cols-3 gap-4">
              {visibleChannels.map((kol) => (
                <KolCard key={kol.id} kol={kol} />
              ))}
            </div>
            {showArrows && (
              <>
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-6 h-6 text-[#00E676]" />
                </button>
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage >= Math.floor((recommendedChannels.length - 1) / 3)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6 text-[#00E676]" />
                </button>
              </>
            )}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold">채널 리스트</h3>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#관심채널</span>
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#구독자순</span>
                <span className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-xs">#최신순</span>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="채널명 또는 연관 단어 입력"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-4 py-1.5 border border-gray-200 rounded-lg w-64 text-sm"
              />
              <Search className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {channelList.map((kol) => (
              <KolCard key={kol.id} kol={kol} />
            ))}
          </div>
        </div>

        <div className="w-[1px] bg-gray-200 mx-[0.5cm]"></div>

        <div className="w-[400px] mt-[0.5cm]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">최신글</h3>
            <button 
              onClick={handleRefresh}
              className="px-3 py-1 text-sm bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-colors flex items-center gap-1"
            >
              <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              새로고침
            </button>
          </div>
          <div className="space-y-6">
            {latestPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/kol/${post.id}`}
                className="block border-b pb-6 last:border-b-0 last:pb-0 hover:bg-[#00E676] hover:bg-opacity-5 rounded-lg p-4 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <h4 className="font-bold text-sm">{post.channel}</h4>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <h5 className="font-bold text-sm mb-2">{post.title}</h5>
                <p className="text-sm text-gray-600 leading-relaxed">{post.content}</p>
              </Link>
            ))}
          </div>
          <button 
            className="w-full mt-6 py-2 bg-[#00E676] text-white rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium"
          >
            더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default KolNews;