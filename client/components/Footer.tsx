import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-primary mb-4">
              BLAME Sound & Production
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional audio equipment rental and digital resources for sound engineers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Shop
            </h4>
            <nav className="space-y-2">
              <Link
                to="/products"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                All Products
              </Link>
              <Link
                to="/products?type=rental"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Equipment Rentals
              </Link>
              <Link
                to="/products?type=digital"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Digital Products
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h4>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                About Us
              </Link>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Contact
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Support
            </h4>
            <nav className="space-y-2">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                Shipping Info
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} BLAME Sound & Production. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
