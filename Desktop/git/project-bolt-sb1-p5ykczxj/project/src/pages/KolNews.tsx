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

const recommendedChannels: KolPost[] = [
  {
    id: 1,
    name: '코인갤러리(Coin gallery)',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: '비트코인 시장에 대한 빠른 정보 뉴스 외\n조재석에게 올시즌 첫시사리즈를 얻었는데 되고 싶네다!'
  },
  {
    id: 2,
    name: '화영이아빠',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: '비트코인 시장에 대한 빠른 정보 뉴스 외\n조재석에게 올시즌 첫시사리즈를 얻었는데 되고 싶네다!'
  },
  {
    id: 3,
    name: '토다로 코인보브',
    telegram: '@godeland01',
    twitter: '@godeland01',
    subscribers: {
      current: '999,999',
      delta: '999,999'
    },
    posts: {
      current: '999,999',
      delta: '999,999'
    },
    content: '비트코인 시장에 대한 빠른 정보 뉴스 외\n조재석에게 올시즌 첫시사리즈를 얻었는데 되고 싶네다!'
  },
  {
    id: 4,
    name: '크립토 인사이더',
    telegram: '@crypto_insider',
    twitter: '@crypto_insider',
    subscribers: {
      current: '888,888',
      delta: '888,888'
    },
    posts: {
      current: '888,888',
      delta: '888,888'
    },
    content: '글로벌 크립토 시장 분석과 전망\n실시간 마켓 업데이트 및 투자 인사이트 제공'
  },
  {
    id: 5,
    name: '블록체인 리서처',
    telegram: '@blockchain_researcher',
    twitter: '@blockchain_researcher',
    subscribers: {
      current: '777,777',
      delta: '777,777'
    },
    posts: {
      current: '777,777',
      delta: '777,777'
    },
    content: '블록체인 기술 분석 및 리서치\n프로젝트 심층 분석 및 기술적 인사이트 공유'
  }
];

const channelList = Array(12).fill(null).map((_, index) => ({
  id: index + 1,
  name: `Channel ${index + 1}`,
  telegram: '@channel',
  twitter: '@channel',
  subscribers: {
    current: '999,999',
    delta: '999,999'
  },
  posts: {
    current: '999,999',
    delta: '999,999'
  },
  content: '비트코인 시장에 대한 빠른 정보 뉴스 외\n조재석에게 올시즌 첫시사리즈를 얻었는데 되고 싶네다!'
}));

const latestPosts = [
  {
    id: 1,
    channel: '텔레그램 코인방 채널-CEN',
    timestamp: '2023-04-14 15:58',
    title: '차세대 밈코인 FO-X 생태계',
    content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도 웹3의 토큰을 얻는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
  },
  {
    id: 2,
    channel: '화영이아빠',
    timestamp: '2023-04-14 15:57',
    title: '비트코인 ETF 관련 소식',
    content: '비트코인 ETF 승인이 임박했다는 소식이 들려오고 있습니다. 이에 따른 시장 반응과 향후 전망에 대해 분석해보았습니다.'
  },
  {
    id: 3,
    channel: '코인갤러리',
    timestamp: '2023-04-14 15:56',
    title: '이더리움 업데이트 소식',
    content: '이더리움 네트워크의 새로운 업데이트가 예정되어 있습니다. 이번 업데이트에서 주목해야 할 주요 변경사항들을 정리해보았습니다.'
  },
  {
    id: 4,
    channel: '토다로 코인보브',
    timestamp: '2023-04-14 15:55',
    title: '알트코인 시장 동향',
    content: '최근 알트코인 시장의 움직임이 활발해지고 있습니다. 주요 알트코인들의 기술적 분석과 향후 전망을 살펴보겠습니다.'
  },
  {
    id: 5,
    channel: 'Channel 1',
    timestamp: '2023-04-14 15:54',
    title: '디파이 프로젝트 업데이트',
    content: '주요 디파이 프로젝트들의 최신 업데이트 소식입니다. TVL 변화와 새로운 기능 추가 사항을 정리했습니다.'
  },
  {
    id: 6,
    channel: '크립토 인사이더',
    timestamp: '2023-04-14 15:53',
    title: '메타버스 토큰 분석',
    content: '메타버스 관련 토큰들의 최근 동향과 주요 프로젝트들의 개발 현황을 심층 분석했습니다.'
  },
  {
    id: 7,
    channel: '블록체인 리서처',
    timestamp: '2023-04-14 15:52',
    title: 'L2 솔루션 비교 분석',
    content: '이더리움 L2 솔루션들의 성능과 보안성을 비교 분석하고, 각 프로젝트의 장단점을 정리했습니다.'
  },
  {
    id: 8,
    channel: '코인 트레이더',
    timestamp: '2023-04-14 15:51',
    title: '주간 시장 분석',
    content: '이번 주 암호화폐 시장의 주요 이벤트와 가격 동향을 분석하고 다음 주 전망을 예측해보았습니다.'
  },
  {
    id: 9,
    channel: '디파이 리서처',
    timestamp: '2023-04-14 15:50',
    title: '스테이블코인 동향',
    content: '주요 스테이블코인들의 시가총액 변화와 사용량 통계를 분석하고 시장 영향을 평가했습니다.'
  },
  {
    id: 10,
    channel: '크립토 애널리스트',
    timestamp: '2023-04-14 15:49',
    title: 'NFT 마켓 리포트',
    content: 'NFT 시장의 거래량과 주요 컬렉션들의 가격 동향을 분석하고 새로운 트렌드를 소개합니다.'
  }
];

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
      className="h-[4.8cm] bg-[#EBEFFF] border rounded-lg p-4 hover:border-[#3e5eff] transition-all transform hover:-translate-y-1 hover:shadow-lg duration-200 cursor-pointer"
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
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">#리워드</span>
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">#빠른정보</span>
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">#이벤트</span>
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">#인기급상승</span>
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
                  <ChevronLeft className="w-6 h-6 text-[#3e5eff]" />
                </button>
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage >= Math.floor((recommendedChannels.length - 1) / 3)}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-6 h-6 text-[#3e5eff]" />
                </button>
              </>
            )}
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold">채널 리스트</h3>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">관심채널</span>
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">구독자순</span>
                <span className="px-2 py-0.5 bg-[#EBEFFF] text-[#3e5eff] rounded-full text-xs">최신순</span>
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
              className="px-3 py-1 text-sm bg-[#EBEFFF] text-[#3e5eff] rounded-full hover:bg-[#3e5eff] hover:text-white transition-colors flex items-center gap-1"
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
                className="block border-b pb-6 last:border-b-0 last:pb-0 hover:bg-[#EBEFFF] rounded-lg p-4 transition-all"
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
            className="w-full mt-6 py-2 bg-[#EBEFFF] text-[#3e5eff] rounded-lg hover:bg-[#3e5eff] hover:text-white transition-colors text-sm font-medium"
          >
            더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default KolNews;