interface MarketResponse {
  symbol: string;
  lastPrice: number;
  change: number;
  percentChange: number;
}

class MarketDataService {
  private static API_KEY = process.env.NEXT_PUBLIC_MARKET_API_KEY;
  private static BASE_URL = 'https://api.example.com/v1/market'; // Replace with actual API endpoint

  static async fetchMarketData(): Promise<MarketResponse[]> {
    try {
      // In production, you would use a real API endpoint
      // const response = await fetch(`${this.BASE_URL}/quotes?symbols=NIFTY,SENSEX,BANKNIFTY`, {
      //   headers: {
      //     'Authorization': `Bearer ${this.API_KEY}`,
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const data = await response.json();
      // return data;

      // For development, return simulated data
      return [
        {
          symbol: 'NIFTY 50',
          lastPrice: Math.random() * (20000 - 19000) + 19000,
          change: Math.random() * 200 - 100,
          percentChange: Math.random() * 2 - 1,
        },
        {
          symbol: 'SENSEX',
          lastPrice: Math.random() * (66000 - 65000) + 65000,
          change: Math.random() * 500 - 250,
          percentChange: Math.random() * 2 - 1,
        },
        {
          symbol: 'NIFTY BANK',
          lastPrice: Math.random() * (44000 - 43000) + 43000,
          change: Math.random() * 300 - 150,
          percentChange: Math.random() * 2 - 1,
        },
      ];
    } catch (error) {
      console.error('Error fetching market data:', error);
      throw error;
    }
  }

  static formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(price);
  }

  static formatChange(change: number): string {
    return change.toFixed(2);
  }

  static formatPercentChange(percentChange: number): string {
    return percentChange.toFixed(2);
  }
}

export default MarketDataService; 