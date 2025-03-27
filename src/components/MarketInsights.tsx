'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MarketDataService from '@/services/marketData';

interface MarketData {
  symbol: string;
  lastPrice: string;
  change: string;
  percentChange: string;
  isPositive: boolean;
}

const MarketInsights = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    {
      symbol: 'NIFTY 50',
      lastPrice: '19,872.65',
      change: '+142.30',
      percentChange: '0.72',
      isPositive: true
    },
    {
      symbol: 'SENSEX',
      lastPrice: '65,764.94',
      change: '+453.15',
      percentChange: '0.69',
      isPositive: true
    },
    {
      symbol: 'NIFTY BANK',
      lastPrice: '43,876.25',
      change: '-125.40',
      percentChange: '0.28',
      isPositive: false
    }
  ]);

  const fetchMarketData = async () => {
    try {
      const data = await MarketDataService.fetchMarketData();
      const formattedData = data.map(item => ({
        symbol: item.symbol,
        lastPrice: MarketDataService.formatPrice(item.lastPrice),
        change: MarketDataService.formatChange(item.change),
        percentChange: MarketDataService.formatPercentChange(item.percentChange),
        isPositive: item.change >= 0
      }));
      setMarketData(formattedData);
    } catch (error) {
      console.error('Error fetching market data:', error);
    }
  };

  useEffect(() => {
    fetchMarketData(); // Initial fetch
    const interval = setInterval(fetchMarketData, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Live Market Updates
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with India&apos;s leading market indices and their real-time performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketData.map((item, index) => (
            <motion.div
              key={item.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{item.symbol}</h3>
                {item.isPositive ? (
                  <FaArrowUp className="text-green-500 text-xl" />
                ) : (
                  <FaArrowDown className="text-red-500 text-xl" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white mb-2">
                  ₹{item.lastPrice}
                </span>
                <div className="flex items-center gap-2">
                  <span 
                    className={`text-sm ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {item.isPositive ? '+' : ''}{item.change} ({item.isPositive ? '+' : ''}{item.percentChange}%)
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleTimeString('en-IN')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights; 