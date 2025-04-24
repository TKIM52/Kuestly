export type ChangeDirection = 'up' | 'down' | 'none';

export interface BotOwnership {
  percentage: number;
  amount: number;
}

export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  color: string;
  accumulatedRequests: number;
  dailyRequests: number;
  changePercentage: number | null;
  changeDirection: ChangeDirection;
  reward: number;
  botOwnership: BotOwnership;
  daysFromRegistration: number;
}