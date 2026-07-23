import { useQuery } from "@tanstack/react-query";
import { medusaClient, StorefrontProduct } from "@/lib/medusa-client";

interface MedusaProduct {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  images?: { url: string }[];
  metadata?: {
    product_type?: "rental" | "digital" | "product";
    type?: "rental" | "digital" | "product";
  };
  variants?: {
    id: string;
    title: string;
    prices?: { amount: number; currency_code: string }[];
    calculated_price?: {
      calculated_amount?: number;
      currency_code?: string;
    };
  }[];
}

interface MedusaProductsResponse {
  products: MedusaProduct[];
  count: number;
  offset: number;
  limit: number;
}

function getProductType(product: MedusaProduct): StorefrontProduct["type"] {
  return product.metadata?.product_type ?? product.metadata?.type ?? "product";
}

export function useProducts(type?: "rental" | "digital", search?: string) {
  return useQuery({
    queryKey: ["products", type, search],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (search) params.append("q", search);

      const response = await medusaClient.get<MedusaProductsResponse>(
        `/products?${params.toString()}`
      );

      return (response.products || [])
        .map(
          (product): StorefrontProduct => ({
            id: product.id,
            title: product.title,
            description: product.description,
            thumbnail: product.thumbnail,
            images: product.images,
            type: getProductType(product),
            variants: product.variants,
          })
        )
        .filter((product) => !type || product.type === type);
    },
  });
}
