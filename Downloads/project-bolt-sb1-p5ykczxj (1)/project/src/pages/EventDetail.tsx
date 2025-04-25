import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { Check } from 'lucide-react';

interface QuestStep {
  id: number;
  title: string;
  link: string;
  buttonText: string;
  completed?: boolean;
  icon: React.ReactNode;
}

interface OtherEvent {
  id: number;
  title: string;
  symbol: string;
  amount: string;
  image: string;
  tags: string[];
  progress: number;
}

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [timeLeft, setTimeLeft] = React.useState({
    days: '14',
    hours: '01',
    minutes: '55',
    seconds: '22'
  });
  const [isClaimed, setIsClaimed] = useState(false);

  const [questSteps, setQuestSteps] = useState<QuestStep[]>([
    {
      id: 1,
      title: '빗썸 Kuestly Token 거래지원 요청 투표',
      link: '#',
      buttonText: '투표하러 가기',
      completed: false,
      icon: <div className="w-6 h-6 bg-[#E12343] rounded-full flex items-center justify-center text-white font-bold">B</div>
    },
    {
      id: 2,
      title: '@Kuestly Token 텔레그램 채널 입장하기',
      link: 'https://t.me/Kuestly_Token',
      buttonText: 'Telegram 이동하기',
      completed: false,
      icon: <FaTelegram className="w-6 h-6 text-[#229ED9]" />
    },
    {
      id: 3,
      title: '@Kuestly Token X 팔로우하기',
      link: 'https://twitter.com/Kuestly_Token',
      buttonText: 'X 이동하기',
      completed: false,
      icon: <FaXTwitter className="w-6 h-6" />
    }
  ]);

  const handleCompleteStep = (stepId: number) => {
    setQuestSteps(steps =>
      steps.map(step =>
        step.id === stepId
          ? { ...step, completed: true }
          : step
      )
    );
  };

  const handleClaim = () => {
    setIsClaimed(true);
  };

  const otherEvents: OtherEvent[] = [
    {
      id: 1,
      title: '비트코인',
      symbol: 'BTC',
      amount: '10 BTC',
      image: 'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg',
      tags: ['#거래', '#빗썸', '#보너스'],
      progress: 82
    },
    {
      id: 2,
      title: '크립토나이트',
      symbol: 'SEILOR',
      amount: '5,000 SEILOR',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      tags: ['#거래', '#코인원', '#에어드랍'],
      progress: 50
    },
    {
      id: 3,
      title: '빗썸 x BONK WEEK',
      symbol: 'BONK',
      amount: '100,000 BONK',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      tags: ['#퀘스트', '#보상', '#이벤트'],
      progress: 82
    },
    {
      id: 4,
      title: '아발론',
      symbol: 'AVL',
      amount: '50,000 AVL',
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg',
      tags: ['#AVL', '#보상', '#이벤트'],
      progress: 65
    },
    {
      id: 5,
      title: 'Kuestly 토큰',
      symbol: 'KT',
      amount: '200,000 KT',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      tags: ['#런치패드', '#에어드랍', '#보상'],
      progress: 95
    }
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🌈</span>
                  <div className="bg-gradient-to-r from-[#00E676] to-green-400 text-transparent bg-clip-text">
                    <h1 className="text-2xl font-bold">퀘스틀리 거래지원 요청 투표 - 100KT in Kuestly!</h1>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-1">퀘스트 토큰 거래지원 투표 & 소식 채널 팔로우 퀘스트</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-[#00E676] text-white rounded-full text-sm">#Quest Token</span>
              <span className="px-3 py-1 bg-[#00E676] text-white rounded-full text-sm">#거래지원 투표</span>
              <span className="px-3 py-1 bg-[#00E676] text-white rounded-full text-sm">2025.04.07 11:11 ~ 2025.04.13 24:00</span>
            </div>

            <div className="space-y-3">
              {questSteps.map((step) => (
                <div key={step.id} className="flex items-center gap-3">
                  {step.completed ? (
                    <div className="w-7 h-7 rounded-full bg-[#00E676] flex items-center justify-center text-white">
                      <Check className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full border-2 border-gray-200" />
                  )}
                  <div className="flex-1 bg-[#00E676] bg-opacity-10 rounded-lg p-3 flex justify-between items-center hover:bg-[#00E676] group transition-all duration-300">
                    <div className="flex items-center gap-3">
                      {step.icon}
                      <span className="font-bold text-[#00C853] group-hover:text-white">{step.title}</span>
                    </div>
                    <button 
                      onClick={() => handleCompleteStep(step.id)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                        step.completed
                          ? 'bg-[#00E676] text-white'
                          : 'bg-white text-[#00C853] hover:bg-[#00E676] hover:text-white'
                      } font-bold`}
                    >
                      {step.completed ? 'Completed' : step.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4">Description</h2>
              <div className="space-y-4 text-[13px] text-gray-600">
                <p>The Comp Contest 시즌 1 성료 기념 SQT 에어드랍 이벤트</p>
                <p>
                  Kuestly와 퀘스트 토큰(Quest Token)이 함께 The Comp Contest 시즌 1 성료 기념 SFTR 에어드랍 이벤트를 준비했습니다! ❤️
                </p>
                <p>
                  퀘스트 토큰은 블록체인 기반의 크라우드에어 플랫폼으로 지속가능한 크라우드에어를 많의 관계를 구축합니다. Comp는 랜드리 크라우드에너들의 시즌별 NFT 디지털 카드로, 랜드리 특별한 순간을 소장하고 투표 및 보상 이벤트 등에 참여할 수 있도록 하는 특별한 카드입니다.
                </p>

                <div className="relative h-40 w-full rounded-xl overflow-hidden my-8">
                  <img 
                    src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg" 
                    alt="Event Banner" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E676]/50 to-transparent flex items-center px-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Special Event</h3>
                      <p className="text-sm">Join our community and earn rewards!</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-bold mb-2">[진행 → Kuestly 에어드랍 이벤트]</p>
                  <ul className="list-none space-y-2">
                    <li>📅 기간: 2025-04-07 ~ 2025-04-17</li>
                    <li>🏆 총 상금: 2000개 의 상승 $QT</li>
                    <li>👥 총 참여 인원: 200명</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <p className="font-bold mb-2">※ 이벤트 유의사항</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>투표 진행는 하나의 에어드랍 계정 시작의 3일 28일 주간 기준으로 산정되었으며, 시세에 따라 변동될 수 있습니다.</li>
                    <li>당첨자에 대한 토큰 지급은 당첨자 발표 이후, 14일 이내에 일괄지급 처리 수소를 지급될 예정입니다.</li>
                    <li>트위터(X)는 아웃하지 않으면 필히 되어를 생성하고 다시 시도하시요.</li>
                    <li>지갑 연결 시, 메타마스크 지갑만 연결이 가능합니다.</li>
                    <li>비정상적인 계정 및 중복참여 방법으로 이벤트 참여 시 자급 대상에서 제외됩니다.</li>
                    <li>Kuestly에서 진행되는 다른 에어드랍 이벤트와 동시 참여가 가능합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-lg font-bold mb-4">에어드랍 정보</h2>
            <div className="mb-6">
              <div className="relative h-2 bg-gray-200 rounded-full">
                <div className="absolute left-0 top-0 h-full bg-[#00E676] rounded-full" style={{ width: '82%' }} />
              </div>
              <div className="mt-4 text-center">
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm text-gray-500">Days</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm text-gray-500">Hours</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-sm text-gray-500">Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>퀘스트 리워드</span>
                <span className="font-bold">100 QT</span>
              </div>
              <div className="flex justify-between items-center">
                <span>네트워크</span>
                <div className="flex items-center">
                  <img 
                    src="https://assets.coingecko.com/coins/images/279/small/ethereum.png" 
                    alt="ETH" 
                    className="w-5 h-5 mr-1"
                  />
                  <span>ETH</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>참여자</span>
                <span>999명</span>
              </div>
            </div>

            <button 
              onClick={handleClaim}
              className={`w-full mt-6 py-3 rounded-full font-bold transition-all duration-200 ${
                isClaimed 
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-[#00E676] text-white hover:bg-opacity-80 transform hover:translate-z-1'
              }`}
            >
              {isClaimed ? 'Claimed Reward' : 'Claim Reward'}
            </button>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">다른 이벤트</h2>
            <div className="space-y-3">
              {otherEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="border rounded-lg p-3 hover:border-[#00E676] transition-all transform hover:-translate-y-1 hover:shadow-lg duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="font-bold text-sm">{event.title} | {event.symbol}</div>
                      <div className="text-[#00E676] font-bold mt-1 text-sm">{event.amount}</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex gap-1.5">
                      {event.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-0.5 bg-[#00E676] text-white rounded-full text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="h-1 bg-gray-100 rounded-full">
                      <div 
                        className="h-full bg-[#00E676] rounded-full transition-all duration-300" 
                        style={{ width: `${event.progress}%` }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;