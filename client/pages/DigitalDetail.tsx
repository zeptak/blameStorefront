import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, FileText } from "lucide-react";

export default function DigitalDetail() {
  const { id } = useParams<{ id: string }>();

  // TODO: Fetch actual product data from MedusaJS
  const product = {
    id: id || "1",
    title: "Sound Design Presets Pack",
    description:
      "Complete collection of 200+ professional sound design presets for modern music production",
    category: "Presets",
    price: 4900, // in cents
    files: [
      { name: "Synth Leads", count: 50 },
      { name: "Bass Sounds", count: 40 },
      { name: "Pads & Atmospheres", count: 50 },
      { name: "Effects & Textures", count: 60 },
    ],
    features: [
      "Compatible with major DAWs (Ableton, Logic, Cubase, FL Studio)",
      "Instant digital download",
      "Lifetime access to all future updates",
      "Commercial license included",
      "30-day money-back guarantee",
    ],
    systemRequirements: {
      os: "Windows 10+ / macOS 10.12+",
      daw: "Any modern DAW supporting VST/AU",
      storage: "500 MB",
    },
  };

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
        {/* Product Preview */}
        <div>
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center mb-8 border-2 border-primary/20">
            <div className="text-center">
              <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground font-medium">Digital Product</p>
              <p className="text-sm text-muted-foreground">Download available immediately after purchase</p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide bg-secondary px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {product.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {product.description}
          </p>

          {/* Price */}
          <div className="bg-secondary/30 rounded-lg p-6 mb-8">
            <div className="text-4xl font-bold text-primary mb-2">
              ${(product.price / 100).toFixed(2)}
            </div>
            <p className="text-sm text-muted-foreground">One-time purchase</p>
          </div>

          {/* File Contents */}
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">What You Get</h3>
            <div className="space-y-3">
              {product.files.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {file.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {file.count} items
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Requirements */}
          <div className="p-4 bg-muted/50 rounded-lg mb-8">
            <h4 className="font-medium text-foreground text-sm mb-3">
              System Requirements
            </h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">OS:</span>{" "}
                {product.systemRequirements.os}
              </p>
              <p>
                <span className="font-medium text-foreground">DAW:</span>{" "}
                {product.systemRequirements.daw}
              </p>
              <p>
                <span className="font-medium text-foreground">Storage:</span>{" "}
                {product.systemRequirements.storage}
              </p>
            </div>
          </div>

          {/* Purchase Button */}
          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white mb-4 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Buy & Download Now
          </Button>

          {/* Guarantee */}
          <p className="text-center text-xs text-muted-foreground">
            🛡️ 30-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}
