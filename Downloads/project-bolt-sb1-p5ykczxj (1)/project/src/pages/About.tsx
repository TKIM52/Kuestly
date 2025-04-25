import React from 'react';
import { Rocket, Vote, BarChart as ChartBar, Newspaper, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#00E676] text-white">
        <div className="max-w-[1280px] mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-black/20 backdrop-blur-sm px-8 py-3 rounded-full mb-8 shadow-lg">
              <span className="text-white text-lg font-bold">
                Welcome to Kuestly! 👋
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-white">
              퀘스트 달성하고 보상받자
            </h1>
            <p className="text-xl text-white font-medium">크립토를 즐기는 가장 스마트한 방법.</p>
          </div>
        </div>
      </div>

      {/* What is Kuestly Section */}
      <div className="max-w-[1280px] mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Rocket className="w-10 h-10 text-[#00E676]" />
            <div>
              <h2 className="text-2xl font-bold">Kuestly는 어떤 서비스인가요?</h2>
              <p className="text-gray-600 mt-1">Kuestly는 당신이 주인공이 되는 플랫폼입니다.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-[#00E676] bg-opacity-10 rounded-2xl p-8 mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <Vote className="w-10 h-10 text-[#00E676] mb-6" />
                <h3 className="text-xl font-bold mb-3">신규 코인 거래지원 요청 투표 참여</h3>
                <p className="text-gray-600">당신의 한 표로 변화를 만들어보세요.</p>
              </div>
              <div className="flex items-center gap-2 text-[#00E676] font-medium pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#00E676] bg-opacity-10 rounded-2xl p-8 mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <ChartBar className="w-10 h-10 text-[#00E676] mb-6" />
                <h3 className="text-xl font-bold mb-3">토큰 정보 & 차트 실시간 확인</h3>
                <p className="text-gray-600">실시간으로 시장 동향을 파악하세요.</p>
              </div>
              <div className="flex items-center gap-2 text-[#00E676] font-medium pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#00E676] bg-opacity-10 rounded-2xl p-8 mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <Newspaper className="w-10 h-10 text-[#00E676] mb-6" />
                <h3 className="text-xl font-bold mb-3">KOL 뉴스 큐레이션 피드</h3>
                <p className="text-gray-600">검증된 전문가의 인사이트를 받아보세요.</p>
              </div>
              <div className="flex items-center gap-2 text-[#00E676] font-medium pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-[#00E676] bg-opacity-10 rounded-2xl p-8 mb-4 group-hover:-translate-y-2 transition-all duration-300">
                <Target className="w-10 h-10 text-[#00E676] mb-6" />
                <h3 className="text-xl font-bold mb-3">퀘스트 수행하고 에어드랍 리워드 획득</h3>
                <p className="text-gray-600">참여하고 보상받는 즐거움을 경험하세요.</p>
              </div>
              <div className="flex items-center gap-2 text-[#00E676] font-medium pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-24">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <CheckCircle2 className="w-10 h-10 text-[#00E676]" />
              <div>
                <h2 className="text-2xl font-bold">주요 기능</h2>
                <p className="text-gray-600 mt-1">Kuestly의 핵심 기능을 소개합니다</p>
              </div>
            </div>

            <div className="space-y-16">
              <div className="flex items-center gap-12">
                <div className="flex-1">
                  <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-4 py-1 text-sm text-[#00E676] font-medium mb-4">Step 01</div>
                  <h3 className="text-2xl font-bold mb-4">당신이 원하는 코인에 투표하세요</h3>
                  <p className="text-gray-600 mb-2">이제 커뮤니티가 결정합니다.</p>
                  <p className="text-gray-600">당신의 한 표가 변화를 만듭니다.</p>
                </div>
                <div className="w-80 h-48 bg-[#00E676] bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <Vote className="w-16 h-16 text-[#00E676]" />
                </div>
              </div>

              <div className="flex items-center gap-12 flex-row-reverse">
                <div className="flex-1">
                  <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-4 py-1 text-sm text-[#00E676] font-medium mb-4">Step 02</div>
                  <h3 className="text-2xl font-bold mb-4">토큰 정보 한눈에 보기</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                      프로젝트 요약
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                      토크노믹스
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                      실시간 시장 데이터 & 트렌드
                    </li>
                  </ul>
                </div>
                <div className="w-80 h-48 bg-[#00E676] bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <ChartBar className="w-16 h-16 text-[#00E676]" />
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex-1">
                  <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-4 py-1 text-sm text-[#00E676] font-medium mb-4">Step 03</div>
                  <h3 className="text-2xl font-bold mb-4">KOL 뉴스 피드</h3>
                  <p className="text-gray-600 mb-2">헷갈리는 뉴스는 그만!</p>
                  <p className="text-gray-600">검증된 인플루언서(KOL)의 분석과 인사이트만 모았습니다.</p>
                </div>
                <div className="w-80 h-48 bg-[#00E676] bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-[#00E676]" />
                </div>
              </div>

              <div className="flex items-center gap-12 flex-row-reverse">
                <div className="flex-1">
                  <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-4 py-1 text-sm text-[#00E676] font-medium mb-4">Step 04</div>
                  <h3 className="text-2xl font-bold mb-4">퀘스트 & 에어드랍</h3>
                  <p className="text-gray-600 mb-2">참여만 해도 보상이 쏟아지는 Web3 미션!</p>
                  <p className="text-gray-600">보상의 선순환 경험을 지금 시작하세요.</p>
                </div>
                <div className="w-80 h-48 bg-[#00E676] bg-opacity-10 rounded-2xl flex items-center justify-center">
                  <Target className="w-16 h-16 text-[#00E676]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Kuestly Section */}
      <div className="max-w-[1280px] mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-6 py-2 text-[#00E676] font-medium mb-8">
            Why Kuestly? 🎁
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">분산된 크립토 정보,<br />이제 Kuestly로 한 번에.</h2>
            <p className="text-xl text-gray-600">탐색, 결정, 리워드까지 끊김 없는 경험.</p>
            <div className="inline-block bg-[#00E676] bg-opacity-10 rounded-full px-6 py-3 text-[#00E676] font-bold mt-4">
              회원가입 없이도 시작 가능. 지갑 연결은 나중에 해도 돼요.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;