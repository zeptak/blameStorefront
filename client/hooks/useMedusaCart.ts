import { useQuery, useMutation } from "@tanstack/react-query";
import { medusaClient } from "@/lib/medusa-client";

export type CartItem = {
  id: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  rental_start_date?: string;
  rental_end_date?: string;
};

export type Cart = {
  id: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
};

export function useMedusaCart(cartId?: string) {
  const getCart = useQuery({
    queryKey: ["cart", cartId],
    queryFn: async () => {
      if (!cartId) return null;
      // TODO: Implement MedusaJS cart fetch endpoint
      // Endpoint: /store/carts/{cart_id}
      const cart: Cart = {
        id: cartId,
        items: [],
        total: 0,
        subtotal: 0,
        tax: 0,
      };
      return cart;
    },
    enabled: !!cartId,
  });

  const addToCart = useMutation({
    mutationFn: async (item: CartItem) => {
      // TODO: Implement add to cart
      return item;
    },
  });

  return {
    cart: getCart.data,
    isLoading: getCart.isLoading,
    addToCart: addToCart.mutate,
  };
}
