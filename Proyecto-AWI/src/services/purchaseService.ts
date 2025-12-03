import { authService } from './authService';

const API_URL = 'http://localhost:8000/api/v1';

export interface PurchaseData {
  cryptocurrency_id: number;
  amount_crypto: number;
  amount_usd: number;
  payment_method: string;
}

export interface PurchaseResponse {
  id: number;
  cryptocurrency_id: number;
  amount_crypto: number;
  amount_usd: number;
  payment_method: string;
  status: string;
  created_at: string;
}

export const purchaseService = {
  async createPurchase(data: PurchaseData): Promise<PurchaseResponse> {
    const token = authService.getToken();

    if (!token) {
      throw new Error('No estás autenticado');
    }

    const response = await fetch(`${API_URL}/purchases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al procesar la compra');
    }

    return response.json();
  },
};
