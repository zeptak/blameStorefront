import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Truck } from "lucide-react";

export default function RentalDetail() {
  const { id } = useParams<{ id: string }>();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // TODO: Fetch actual product data from MedusaJS
  const product = {
    id: id || "1",
    title: "Professional Studio Microphone",
    description: "High-end condenser microphone perfect for studio recordings",
    images: [],
    price: 5000, // in cents
    rental_period: 7, // days
    specs: {
      type: "Condenser",
      frequency_range: "20Hz - 20kHz",
      impedance: "200 Ohms",
      weight: "1.2 kg",
    },
  };

  const calculateRentalPrice = () => {
    if (!startDate || !endDate) return product.price / 100;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    return ((product.price / 100) * days) / product.rental_period;
  };

  const totalPrice = calculateRentalPrice();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center mb-4">
            <div className="text-muted-foreground">Product image</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-muted rounded-lg h-24 flex items-center justify-center">
                <div className="text-xs text-muted-foreground">Image {i + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            {product.title}
          </h1>
          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <div className="text-3xl font-bold text-primary mb-2">
              ${totalPrice.toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground">
              per {startDate && endDate ? "selected period" : `${product.rental_period} days`}
            </p>
          </div>

          {/* Date Selection */}
          <div className="mb-8 p-6 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Select Rental Period
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Start Date
                </label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  End Date
                </label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="border-border"
                />
              </div>
            </div>
            {startDate && endDate && (
              <p className="text-sm text-muted-foreground">
                Rental period:{" "}
                {Math.ceil(
                  (new Date(endDate).getTime() - new Date(startDate).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}{" "}
                days
              </p>
            )}
          </div>

          {/* Specifications */}
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">Specifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {key.replace(/_/g, " ")}
                  </p>
                  <p className="font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white mb-4"
            disabled={!startDate || !endDate}
          >
            Add to Cart
          </Button>

          {/* Shipping Info */}
          <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
            <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-foreground text-sm">
                Free Delivery
              </p>
              <p className="text-xs text-muted-foreground">
                Equipment delivered within 48 hours. Pickup or return shipping included.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
