import { useQuery } from "@tanstack/react-query";
import { medusaClient, StorefrontProduct } from "@/lib/medusa-client";

interface MedusaProduct {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  images?: { url: string }[];
  metadata?: {
    product_type?: "rental" | "digital";
  };
  variants?: {
    id: string;
    title: string;
    prices: { amount: number; currency_code: string }[];
  }[];
}

interface MedusaProductsResponse {
  products: MedusaProduct[];
  count: number;
  offset: number;
  limit: number;
}

export function useProducts(type?: "rental" | "digital", search?: string) {
  return useQuery({
    queryKey: ["products", type, search],
    queryFn: async () => {
      try {
        // Fetch products from MedusaJS store endpoint
        const params = new URLSearchParams();
        if (search) params.append("q", search);
        if (type) params.append("metadata[product_type]", type);

        const response = await medusaClient.get<MedusaProductsResponse>(
          `/store/products?${params.toString()}`
        );

        // Transform MedusaJS products to StorefrontProduct
        const products: StorefrontProduct[] = (response.products || []).map(
          (p: MedusaProduct) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            thumbnail: p.thumbnail,
            images: p.images,
            type: (p.metadata?.product_type || "rental") as "rental" | "digital",
            variants: p.variants,
          })
        );

        return products;
      } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
      }
    },
  });
}
