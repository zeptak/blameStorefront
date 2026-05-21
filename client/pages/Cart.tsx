import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Cart() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Shopping Cart</h1>
      </div>

      <div className="bg-muted/50 rounded-lg p-8 text-center mb-8">
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <Link to="/products">
          <Button className="bg-primary hover:bg-primary/90">
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="border-t border-border pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>
      </div>
    </div>
  );
}
