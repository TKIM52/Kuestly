import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-[#00E676] w-full">
      <div className="max-w-[1280px] mx-auto h-[5.6cm] flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-xl font-bold">Kuestly는 가상자산 정보와 이벤트를 제공하는 플랫폼입니다.<br />
            안전하고 신뢰할 수 있는 정보를 제공하기 위해 노력합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;