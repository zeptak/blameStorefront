import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const filterType = (searchParams.get("type") as "all" | "rental" | "digital" | null) || "all";
  const { data: products = [], isLoading, isError, error, refetch } = useProducts(filterType === "all" ? undefined : filterType, search);

  const handleFilterChange = (type: "all" | "rental" | "digital") => setSearchParams(type === "all" ? {} : { type });

  return (
    <div className="min-h-[720px] bg-studio-950 px-5 py-16 text-studio-50 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist">The gear room</p>
          <h1 className="font-display text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">Tools for the <span className="text-brand-mist">right take.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-studio-400">A considered selection of microphones, monitoring, studio tools, and digital resources for your next session.</p>
        </div>

        <div className="mb-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-3 h-4 w-4 text-studio-500" />
            <Input type="search" placeholder="Search the collection" value={search} onChange={(event) => setSearch(event.target.value)} className="h-10 border-white/10 bg-studio-900 pl-10 text-studio-50 placeholder:text-studio-500 focus-visible:ring-brand-mist" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="mr-1 h-4 w-4 text-studio-500" />
            {(["all", "rental", "digital"] as const).map((type) => (
              <Button key={type} variant="ghost" onClick={() => handleFilterChange(type)} className={filterType === type ? "rounded-full bg-brand-mist text-studio-950 hover:bg-white" : "rounded-full text-studio-400 hover:bg-white/10 hover:text-white"}>
                {type === "all" ? "All tools" : type === "rental" ? "Rental gear" : "Digital tools"}
              </Button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[...Array(6)].map((_, index) => <div key={index} className="space-y-4"><Skeleton className="h-64 w-full rounded-2xl bg-studio-900" /><Skeleton className="h-6 w-3/4 bg-studio-900" /><Skeleton className="h-4 w-1/2 bg-studio-900" /></div>)}</div>
        ) : isError ? (
          <div className="rounded-2xl border border-red-300/20 bg-red-300/5 px-6 py-24 text-center">
            <p className="font-display text-2xl">The catalog is unavailable.</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-studio-400">We couldn’t load the Medusa catalog right now. Please try again.</p>
            <Button onClick={() => refetch()} className="mt-6 rounded-full bg-brand-mist text-studio-950 hover:bg-white">Try again</Button>
            {error instanceof Error && <p className="mt-4 text-xs text-studio-500">{error.message}</p>}
          </div>
        ) : products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 px-6 py-24 text-center"><p className="font-display text-2xl">{search ? "No tools match that search." : "The collection is being tuned."}</p><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-studio-400">Connect your Medusa catalog to populate this room with available rental gear and digital products.</p></div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        )}
      </div>
    </div>
  );
}
