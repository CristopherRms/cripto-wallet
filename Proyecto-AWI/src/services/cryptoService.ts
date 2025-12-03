const API_URL = 'http://localhost:8000/api/v1';
const COINBASE_API_URL = 'https://api.coinbase.com/v2';

export interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  price_usd?: number;
  description?: string;
  decimals?: number;
  min_purchase_amount?: string;
  max_purchase_amount?: string;
  purchase_fee_percentage?: string;
  withdrawal_fee_percentage?: string;
  market_trading_enabled?: boolean;
}

interface CoinbasePrice {
  data: {
    amount: string;
    currency: string;
  };
}

export const cryptoService = {
  async getCryptocurrencies(): Promise<Cryptocurrency[]> {
    const response = await fetch(`${API_URL}/cryptocurrencies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al obtener criptomonedas');
    }

    const data = await response.json();

    // Extraer el array de criptomonedas según la estructura de respuesta
    if (data.cryptocurrencies && Array.isArray(data.cryptocurrencies)) {
      return data.cryptocurrencies;
    }

    if (Array.isArray(data)) {
      return data;
    }

    throw new Error('Formato de respuesta inesperado');
  },

  async getCurrentPrice(symbol: string): Promise<number> {
    try {
      const response = await fetch(`${COINBASE_API_URL}/prices/${symbol}-USD/buy`);

      if (!response.ok) {
        throw new Error(`Error al obtener precio de ${symbol}`);
      }

      const data: CoinbasePrice = await response.json();
      return parseFloat(data.data.amount);
    } catch (err) {
      throw new Error(`No se pudo obtener el precio actual de ${symbol}`);
    }
  },
};
