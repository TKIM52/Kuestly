import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const RegisterComplete: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#00E676] text-white flex items-center justify-center font-bold text-sm">1</div>
              <div className="ml-2">
                <div className="font-bold text-sm">약관 동의</div>
                <div className="text-xs text-gray-500">필수 약관 동의</div>
              </div>
            </div>
            <div className="w-12 h-[2px] bg-[#00E676]"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#00E676] text-white flex items-center justify-center font-bold text-sm">2</div>
              <div className="ml-2">
                <div className="font-bold text-sm">간편 가입</div>
                <div className="text-xs text-gray-500">간편 가입 선택</div>
              </div>
            </div>
            <div className="w-12 h-[2px] bg-[#00E676]"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#00E676] text-white flex items-center justify-center font-bold text-sm">3</div>
              <div className="ml-2">
                <div className="font-bold text-sm">회원 정보</div>
                <div className="text-xs text-gray-500">회원 가입 완료</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-[#00E676] text-white flex items-center justify-center">
                <Wallet className="w-12 h-12" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">회원가입 완료!</h2>
            <p className="text-lg mb-2">홍**님, 반갑습니다.</p>
            <p className="text-lg mb-8">Kuestly 회원이 되신 것을 환영 합니다.</p>
            <Link 
              to="/"
              className="inline-block px-8 py-3 bg-[#00E676] text-white rounded-full hover:bg-opacity-80 transition-all duration-200 transform hover:-translate-y-1 font-bold"
            >
              메인 페이지로 이동하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;