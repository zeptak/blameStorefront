import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const filterType = (searchParams.get("type") as "all" | "rental" | "digital" | null) || "all";
  const queryType = filterType === "all" ? undefined : filterType;

  const { data: products = [], isLoading } = useProducts(queryType, search);

  const handleFilterChange = (type: "all" | "rental" | "digital") => {
    setSearchParams(type === "all" ? {} : { type });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search is already applied via the hook
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Shop</h1>
        <p className="text-muted-foreground">
          Browse our equipment rentals and digital products
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-white border-border"
          />
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {["all", "rental", "digital"].map((type) => (
          <Button
            key={type}
            variant={filterType === type ? "default" : "outline"}
            onClick={() => handleFilterChange(type as any)}
            className={
              filterType === type
                ? "bg-primary text-white"
                : "border-border hover:border-primary"
            }
          >
            {type === "all"
              ? "All Products"
              : type === "rental"
                ? "Equipment Rentals"
                : "Digital Products"}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">
            {search ? "No products match your search" : "No products found"}
          </p>
          <p className="text-sm text-muted-foreground">
            {search
              ? "Try adjusting your search terms"
              : "Check back soon for more equipment and resources"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
