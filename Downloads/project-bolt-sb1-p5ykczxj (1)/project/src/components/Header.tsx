import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Send } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="border-b border-gray-200">
      <div className="w-[1280px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-black mr-8 flex items-center gap-2">
              Kuestly
              <Send className="w-5 h-5 text-[#00E676]" />
            </Link>
            <nav className="hidden md:flex">
              <Link 
                to="/crypto" 
                className={`nav-link ${isActive('/crypto') ? 'text-[#00E676]' : 'text-gray-600'}`}
              >
                가상자산 정보
              </Link>
              <Link 
                to="/events" 
                className={`nav-link ${isActive('/events') ? 'text-[#00E676]' : 'text-gray-600'}`}
              >
                이벤트 정보
              </Link>
              <Link 
                to="/kol-news" 
                className={`nav-link ${isActive('/kol-news') ? 'text-[#00E676]' : 'text-gray-600'}`}
              >
                KOL's News
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'text-[#00E676]' : 'text-gray-600'}`}
            >
              서비스 소개
            </Link>
            <Link 
              to="/register" 
              className={`nav-link ${isActive('/register') ? 'text-[#00E676]' : 'text-gray-600'}`}
            >
              회원가입
            </Link>
            <Link 
              to="/login" 
              className={`nav-link ${isActive('/login') ? 'text-[#00E676]' : 'text-gray-600'}`}
            >
              로그인
            </Link>
            <button 
              className="bg-[#00E676] text-white px-4 py-2 rounded flex items-center hover:bg-opacity-80 ml-4"
            >
              <Send className="w-4 h-4 mr-1" />
              <span>Connect</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;