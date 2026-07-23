const MEDUSA_BASE_URL = "/api/medusa";

export const medusaClient = {
  async get<T>(endpoint: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${MEDUSA_BASE_URL}${endpoint}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Medusa API error: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  },

  async post<T>(endpoint: string, body?: unknown, init?: RequestInit): Promise<T> {
    return this.get(endpoint, {
      ...init,
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
    }) as Promise<T>;
  },

  async put<T>(endpoint: string, body?: unknown, init?: RequestInit): Promise<T> {
    return this.get(endpoint, {
      ...init,
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
    }) as Promise<T>;
  },

  async delete<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return this.get(endpoint, {
      ...init,
      method: "DELETE",
    }) as Promise<T>;
  },
};

export type StorefrontProduct = {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  images?: { url: string }[];
  type: "rental" | "digital" | "product";
  variants?: {
    id: string;
    title: string;
    prices?: { amount: number; currency_code: string }[];
    calculated_price?: {
      calculated_amount?: number;
      currency_code?: string;
    };
  }[];
};

export type RentalVariant = {
  id: string;
  metadata?: {
    rental_period_days?: number;
  };
};

export type DigitalProduct = {
  id: string;
  product_id: string;
  file_key: string;
  file_name: string;
  file_size: number;
};
