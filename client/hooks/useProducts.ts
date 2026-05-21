import { useQuery } from "@tanstack/react-query";
import { medusaClient, StorefrontProduct } from "@/lib/medusa-client";

export function useProducts(type?: "rental" | "digital") {
  return useQuery({
    queryKey: ["products", type],
    queryFn: async () => {
      // TODO: Implement actual MedusaJS API call
      // Endpoint: /store/products or similar
      // Filter by metadata.product_type = "rental" | "digital"
      const products: StorefrontProduct[] = [];
      return products;
    },
  });
}
