import React from 'react';
import { Link } from 'react-router-dom';
import { SiNaver, SiKakaotalk, SiGoogle } from 'react-icons/si';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-[1280px] w-full px-6">
        <div className="max-w-sm mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2">Welcome to Kuestly! 👋</h1>
            <p className="text-gray-600">간편하게 로그인하고 다양한 서비스를 이용해보세요</p>
          </div>

          <div className="space-y-4">
            <button className="w-full h-12 flex items-center px-4 bg-[#03C75A] text-white rounded-lg hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1">
              <SiNaver className="w-6 h-6" />
              <span className="flex-1 text-center font-bold">네이버 계정으로 로그인</span>
            </button>

            <button className="w-full h-12 flex items-center px-4 bg-[#FEE500] text-[#000000] rounded-lg hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1">
              <SiKakaotalk className="w-6 h-6" />
              <span className="flex-1 text-center font-bold">카카오 계정으로 로그인</span>
            </button>

            <button className="w-full h-12 flex items-center px-4 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1">
              <SiGoogle className="w-6 h-6" />
              <span className="flex-1 text-center font-bold">구글 계정으로 로그인</span>
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            아직 회원이 아니신가요? <Link to="/register" className="text-[#3e5eff] font-medium hover:underline">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;