import React from 'react';
import { useParams } from 'react-router-dom';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const subscriberData = Array.from({ length: 7 }, (_, i) => ({
  date: `04.0${i + 1}`,
  subscribers: Math.floor(Math.random() * 500) + 1000,
}));

const postData = Array.from({ length: 7 }, (_, i) => ({
  date: `04.0${i + 1}`,
  posts: Math.floor(Math.random() * 500) + 1000,
}));

const latestPosts = Array(7).fill({
  timestamp: '2023-04-14 15:58',
  title: '차세대 밈코인 FO-X 생태계',
  content: 'Web2시장 스팸, 투자, 콘텐츠 소비를 하면서도\n보상을 받을 수 있는 구조를 제공하며, 전체 10B+, 유저가 FO Chat 명예에 참여할 필요 중'
});

const KolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Profile Info */}
        <div className="col-span-4">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200"></div>
              <div>
                <h1 className="text-xl font-bold mb-2">코인갤러리(Coin gallery)</h1>
                <div className="flex items-center gap-2 text-sm">
                  <FaTelegram className="text-[#229ED9]" />
                  <span className="text-gray-600">@godeland01</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-1">
                  <FaXTwitter />
                  <span className="text-gray-600">@godeland01</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <div className="font-bold">채널 소개</div>
                <button className="px-3 py-1 text-sm bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-colors">
                  채널구독
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed">
                아직 장전 전이 없는 채널입니다! 연대 소식스로 없이
                사업성자 모르자지만, 가급적 그날일 없게 열심히
                운영해보겠습니다!
              </p>
              <div className="space-y-1 text-gray-600">
                <p>채널명 : https://t.me/money0stack9chat</p>
                <p>공지방 : https://t.me/money0stack9Notice</p>
                <p>코인공개 시즌2 : https://t.me/coinsmileV2</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600">구독자</div>
                  <div className="font-bold">999,999</div>
                  <div className="text-xs text-red-500">▲999,999</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">포스팅</div>
                  <div className="font-bold">999,999</div>
                  <div className="text-xs text-red-500">▲999,999</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">관심채널</div>
                  <div className="font-bold">999,999</div>
                  <div className="text-xs text-red-500">▲999,999</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-xs font-bold mb-4">구독자 변동 추이</h3>
                  <div className="h-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={subscriberData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="subscribers" stroke="#00E676" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-xs font-bold mb-4">포스팅 변동 추이</h3>
                  <div className="h-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={postData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Line type="monotone" dataKey="posts" stroke="#00E676" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="col-span-8">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">최신글</h3>
            <div className="border rounded-lg">
              {latestPosts.map((post, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                  <p className="text-xs text-gray-500 mb-2">{post.timestamp}</p>
                  <h4 className="font-bold text-sm mb-2">{post.title}</h4>
                  <p className="text-xs text-gray-600 whitespace-pre-line">{post.content}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-[#00E676] text-white rounded-lg hover:bg-opacity-80 transition-colors text-sm font-medium">
              더보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KolDetail;