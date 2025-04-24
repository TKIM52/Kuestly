import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-gray-200">
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-x-12 gap-y-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 block">Kuestly</Link>
            <p className="text-sm text-gray-600 mb-4">
              Kuestly는 가상자산 정보와 이벤트를 제공하는 플랫폼입니다.
              안전하고 신뢰할 수 있는 정보를 제공하기 위해 노력합니다.
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/kuestly" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.751-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.032.259.019.599-.006.859z"/>
                </svg>
              </a>
              <a href="https://twitter.com/kuestly" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://discord.gg/kuestly" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link to="/crypto" className="text-gray-600 hover:text-gray-800">가상자산 정보</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-gray-800">이벤트 정보</Link></li>
              <li><Link to="/games" className="text-gray-600 hover:text-gray-800">게임 정보</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-800">자주 묻는 질문</Link></li>
              <li><Link to="/guide" className="text-gray-600 hover:text-gray-800">이용 가이드</Link></li>
              <li><Link to="/notice" className="text-gray-600 hover:text-gray-800">공지사항</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-gray-800">고객센터</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-600 hover:text-gray-800">이용약관</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-gray-800">개인정보처리방침</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-gray-800">면책조항</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">제휴 문의</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 Kuestly. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/terms" className="text-gray-600 hover:text-gray-800">Terms</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-gray-800">Privacy</Link>
              <Link to="/cookies" className="text-gray-600 hover:text-gray-800">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;