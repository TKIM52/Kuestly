/// <reference types="vite/client" />

interface Window {
  TradingView: {
    widget: new (config: any) => any;
  }
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}