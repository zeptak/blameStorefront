import { useEffect, useState } from "react";
import { medusaClient, StorefrontProduct } from "@/lib/medusa-client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Products() {
  const [products, setProducts] = useState<StorefrontProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "rental" | "digital">("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // TODO: Implement MedusaJS products fetch
        // This will need to call the MedusaJS backend to fetch products
        // with both rental and digital product types
        setProducts([]);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Shop</h1>
        <p className="text-muted-foreground">
          Browse our equipment rentals and digital products
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-8">
        {["all", "rental", "digital"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            onClick={() => setFilter(type as any)}
            className={
              filter === type ? "bg-primary text-white" : "border-border"
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
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">No products found</p>
          <p className="text-sm text-muted-foreground">
            Check back soon for more equipment and resources
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="bg-muted h-48 flex items-center justify-center">
                {product.thumbnail ? (
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-muted-foreground">No image</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-secondary text-primary px-2 py-1 rounded">
                    {product.type === "rental"
                      ? "Equipment Rental"
                      : "Digital Product"}
                  </span>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
