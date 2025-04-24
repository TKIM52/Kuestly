import React from 'react';
import { Link } from 'react-router-dom';
import { CryptoData } from '../types/crypto';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface CryptoTableProps {
  data: CryptoData[];
}

const CryptoTable: React.FC<CryptoTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="table-header">No</th>
            <th className="table-header text-left">가상자산명</th>
            <th className="table-header">거래 지원 요청 수</th>
            <th className="table-header">전일 거래 지원 요청</th>
            <th className="table-header">증감</th>
            <th className="table-header text-right">리워드</th>
            <th className="table-header text-right">남은 에어드랍 수량</th>
            <th className="table-header text-right">등록일로부터</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto, index) => (
            <tr key={crypto.id} className="hover:bg-gray-50 text-sm">
              <td className="table-cell">{index + 1}</td>
              <td className="table-cell text-left">
                <Link to="/crypto/btc" className="flex items-center group">
                  <div className={`w-6 h-6 rounded-full ${crypto.symbol === 'K' ? 'bg-red-500' : `bg-${crypto.color}-500`} flex items-center justify-center text-white mr-2`}>
                    {crypto.symbol.charAt(0)}
                  </div>
                  <span className="font-medium group-hover:text-[#3e5eff]">{crypto.name}</span>
                  <span className="ml-2 text-gray-500 text-xs">{crypto.symbol}</span>
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-[#3e5eff] bg-opacity-10 text-[#3e5eff]">
                    투표하기
                  </span>
                </Link>
              </td>
              <td className="table-cell">{crypto.accumulatedRequests.toLocaleString()}</td>
              <td className="table-cell">{crypto.dailyRequests.toLocaleString()}</td>
              <td className="table-cell">
                {crypto.changePercentage ? (
                  <div className="flex items-center justify-center">
                    {crypto.changeDirection === 'down' ? (
                      <TrendingDown className="w-4 h-4 text-blue-500 mr-1" />
                    ) : crypto.changeDirection === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
                    ) : null}
                    <span className={crypto.changeDirection === 'down' ? 'text-blue-500' : 'text-red-500'}>
                      {crypto.changePercentage}%
                    </span>
                  </div>
                ) : (
                  <span>-</span>
                )}
              </td>
              <td className="table-cell text-right">
                {crypto.reward} {crypto.symbol}
              </td>
              <td className="table-cell text-right">
                <div className="flex items-center justify-end">
                  <span className="mr-2">
                    {crypto.botOwnership.percentage}% | {crypto.botOwnership.amount} {crypto.symbol}
                  </span>
                  <div className="relative w-5 h-5">
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-[#3e5eff]"
                      style={{
                        background: `conic-gradient(
                          #3e5eff ${crypto.botOwnership.percentage}%, 
                          transparent ${crypto.botOwnership.percentage}%, 
                          transparent 100%
                        )`
                      }}
                    />
                    <div className="absolute inset-0.5 bg-white rounded-full" />
                    <div 
                      className="absolute inset-1 rounded-full"
                      style={{
                        background: crypto.botOwnership.percentage > 75 
                          ? 'rgba(62, 94, 255, 0.2)' 
                          : crypto.botOwnership.percentage > 40 
                          ? 'rgba(62, 94, 255, 0.1)' 
                          : 'transparent'
                      }}
                    />
                  </div>
                </div>
              </td>
              <td className="table-cell text-right">
                {crypto.daysFromRegistration > 0 ? `+${crypto.daysFromRegistration}일` : crypto.daysFromRegistration === 0 ? '오늘' : `${crypto.daysFromRegistration}일`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;