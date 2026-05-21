import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { StorefrontProduct } from "@/lib/medusa-client";

interface ProductCardProps {
  product: StorefrontProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const price = product.variants?.[0]?.prices?.[0];
  const priceFormatted = price
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: price.currency_code?.toUpperCase() || "USD",
      }).format(price.amount / 100)
    : "Contact for pricing";

  const isRental = product.type === "rental";
  const isDigital = product.type === "digital";

  return (
    <Link
      to={isRental ? `/rental/${product.id}` : `/digital/${product.id}`}
      className="group"
    >
      <div className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition h-full flex flex-col">
        {/* Product Image */}
        <div className="bg-muted h-48 flex items-center justify-center overflow-hidden group-hover:bg-muted/80 transition">
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
          ) : (
            <div className="text-muted-foreground text-sm">No image</div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Badge and Price */}
          <div className="flex justify-between items-end gap-2">
            <div className="flex items-center gap-2">
              {isRental && (
                <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                  <Calendar className="w-3 h-3" />
                  Rental
                </span>
              )}
              {isDigital && (
                <span className="inline-flex items-center gap-1 text-xs bg-secondary text-primary px-2 py-1 rounded font-medium">
                  <Download className="w-3 h-3" />
                  Instant Access
                </span>
              )}
            </div>
            <span className="text-sm font-semibold text-primary">
              {priceFormatted}
            </span>
          </div>

          {/* CTA */}
          <Button
            size="sm"
            className="mt-4 w-full bg-primary hover:bg-primary/90 text-white"
          >
            {isRental ? "View Details" : "Buy Now"}
          </Button>
        </div>
      </div>
    </Link>
  );
}
