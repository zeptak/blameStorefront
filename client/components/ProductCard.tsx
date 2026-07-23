import { Calendar, Download, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { StorefrontProduct } from "@/lib/medusa-client";

interface ProductCardProps {
  product: StorefrontProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const variant = product.variants?.[0];
  const calculatedPrice = variant?.calculated_price;
  const legacyPrice = variant?.prices?.[0];
  const amount = calculatedPrice?.calculated_amount ?? legacyPrice?.amount;
  const currency = calculatedPrice?.currency_code ?? legacyPrice?.currency_code;
  const priceFormatted =
    amount != null
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: currency?.toUpperCase() || "USD",
        }).format(amount / 100)
      : "Contact for pricing";
  const isRental = product.type === "rental";
  const isDigital = product.type === "digital";
  const Icon = isRental ? Calendar : isDigital ? Download : Package;
  const typeLabel = isRental ? "Rental" : isDigital ? "Digital" : "Product";
  const detailLabel = isRental
    ? "View rental details"
    : isDigital
      ? "Explore digital tool"
      : "View product details";

  return (
    <Link to={isRental ? `/rental/${product.id}` : isDigital ? `/digital/${product.id}` : `/products/${product.id}`} className="group">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-studio-900 transition duration-300 hover:-translate-y-1 hover:border-brand-mist/50 hover:shadow-glow">
        <div className="flex h-64 items-center justify-center overflow-hidden bg-studio-800">
          {product.thumbnail ? <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="text-sm text-studio-500">Preview coming soon</div>}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em]">
            <span className={isRental ? "inline-flex items-center gap-1.5 text-brand-mist" : "inline-flex items-center gap-1.5 text-studio-300"}><Icon className="h-3.5 w-3.5" />{typeLabel}</span>
            <span className="font-mono text-studio-400">{priceFormatted}</span>
          </div>
          <h3 className="font-display text-2xl font-semibold leading-tight text-studio-50 transition group-hover:text-brand-mist">{product.title}</h3>
          <p className="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-studio-400">{product.description || "Professional tools for your next production."}</p>
          <span className="mt-6 inline-flex items-center text-sm font-semibold text-studio-200">{detailLabel}<span className="ml-2 transition group-hover:translate-x-1">→</span></span>
        </div>
      </div>
    </Link>
  );
}
