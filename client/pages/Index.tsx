import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic2, Music } from "lucide-react";

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Audio Equipment & Resources
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rent professional-grade audio equipment or access premium digital sound engineering resources. Everything you need for studio-quality production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-white text-primary hover:bg-secondary w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Two Ways to Elevate Your Sound
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Equipment Rentals */}
            <Link to="/products?type=rental" className="group">
              <div className="border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary transition h-full">
                <div className="bg-secondary/20 p-8 flex flex-col items-center justify-center min-h-80 group-hover:bg-secondary/30 transition">
                  <Mic2 className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Equipment Rentals
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Access professional-grade audio gear for your projects. Flexible rental periods, competitive pricing.
                  </p>
                  <span className="text-primary font-semibold group-hover:translate-x-2 transition">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>

            {/* Digital Products */}
            <Link to="/products?type=digital" className="group">
              <div className="border-2 border-secondary/40 rounded-lg overflow-hidden hover:border-primary transition h-full">
                <div className="bg-secondary/10 p-8 flex flex-col items-center justify-center min-h-80 group-hover:bg-secondary/20 transition">
                  <Music className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Digital Products
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Instant access to sound packs, presets, and templates. Download and use immediately.
                  </p>
                  <span className="text-primary font-semibold group-hover:translate-x-2 transition">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose BLAME?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-3">100+</div>
              <h3 className="font-semibold text-foreground mb-2">
                Professional Equipment
              </h3>
              <p className="text-muted-foreground">
                Carefully selected gear from industry-leading manufacturers
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-3">24/7</div>
              <h3 className="font-semibold text-foreground mb-2">
                Expert Support
              </h3>
              <p className="text-muted-foreground">
                Our audio engineers are ready to help you succeed
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-3">Fast</div>
              <h3 className="font-semibold text-foreground mb-2">
                Quick Delivery
              </h3>
              <p className="text-muted-foreground">
                Equipment shipped and digital products delivered instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join hundreds of audio engineers and producers using BLAME for their projects
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-secondary">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
