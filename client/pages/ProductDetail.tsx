import { ArrowLeft, Package } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: products = [], isLoading, isError } = useProducts();
  const product = products.find((item) => item.id === id);

  if (isLoading) {
    return <div className="mx-auto max-w-6xl px-5 py-24 text-center text-studio-400">Loading product…</div>;
  }

  if (isError || !product) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-24 text-center">
        <p className="font-display text-3xl text-studio-950">Product not found</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-studio-500">This product may no longer be available in the catalog.</p>
        <Button asChild className="mt-6 rounded-full bg-brand-teal text-white hover:bg-brand-teal/90">
          <Link to="/products">Back to products</Link>
        </Button>
      </div>
    );
  }

  const variant = product.variants?.[0];
  const calculatedPrice = variant?.calculated_price;
  const legacyPrice = variant?.prices?.[0];
  const amount = calculatedPrice?.calculated_amount ?? legacyPrice?.amount;
  const currency = (calculatedPrice?.currency_code ?? legacyPrice?.currency_code)?.toUpperCase() || "USD";

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <Link to="/products" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-studio-500 hover:text-studio-950">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex min-h-[420px] items-center justify-center overflow-hidden rounded-2xl bg-studio-800">
          {product.thumbnail ? <img src={product.thumbnail} alt={product.title} className="h-full w-full object-cover" /> : <Package className="h-16 w-16 text-studio-500" />}
        </div>
        <div className="py-4">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">Product</p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-studio-950">{product.title}</h1>
          <p className="mt-6 text-lg leading-8 text-studio-500">{product.description || "Professional tools for your next production."}</p>
          <p className="mt-8 font-mono text-2xl text-studio-950">{amount != null ? new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount / 100) : "Contact for pricing"}</p>
        </div>
      </div>
    </div>
  );
}
