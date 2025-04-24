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
            <th className="table-header text-right">에어드랍 진행률</th>
            <th className="table-header text-right">총 에어드랍 수량</th>
            <th className="table-header text-center">투표</th>
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
                <div className="flex flex-col items-end">
                  <div className="w-36 relative">
                    <div className="h-4 bg-green-100 overflow-hidden">
                      <div 
                        className="absolute top-0 right-0 h-full bg-green-500"
                        style={{ width: `${100 - crypto.botOwnership.percentage}%` }}
                      />
                      <div className="absolute top-0 right-0 h-full flex items-center">
                        <span className={`text-xs font-semibold mr-2 whitespace-nowrap ${
                          100 - crypto.botOwnership.percentage >= 20 ? 'text-white' : 'text-green-600'
                        }`}>
                          {100 - crypto.botOwnership.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="table-cell text-right">
                <div className="font-semibold">{crypto.botOwnership.amount.toLocaleString()} {crypto.symbol}</div>
              </td>
              <td className="table-cell text-center">
                <button className="px-2 py-0.5 text-xs rounded-full bg-[#3e5eff] bg-opacity-10 text-[#3e5eff] hover:bg-opacity-20 transition-colors">
                  투표하기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;