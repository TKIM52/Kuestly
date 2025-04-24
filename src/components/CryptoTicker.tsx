import React, { useEffect } from 'react';

const CryptoTicker: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#3e5eff] w-full h-16">
      <div className="max-w-[1280px] mx-auto h-full">
        <coingecko-coin-price-marquee-widget
          coin-ids="bitcoin,ethereum,ripple,dogecoin,cardano"
          currency="usd"
          background-color="#3e5eff"
          font-color="#ffffff"
          locale="ko"
        ></coingecko-coin-price-marquee-widget>
      </div>
    </div>
  );
};

export default CryptoTicker;