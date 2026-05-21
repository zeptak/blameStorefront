export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          BLAME Sound & Production
        </h1>
        <p className="text-lg text-muted-foreground">
          Professional audio engineering equipment rental and digital resources
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            About Us
          </h2>
          <p className="text-muted-foreground mb-4">
            BLAME Sound & Production is your trusted partner for professional audio equipment rental and digital sound engineering resources. With years of experience in the industry, we provide high-quality audio gear for studios, live events, and field recording projects.
          </p>
          <p className="text-muted-foreground mb-4">
            Whether you're a seasoned sound engineer or just starting your audio journey, we have the equipment and resources you need to bring your projects to life.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-primary mb-2">Equipment Rentals</h3>
              <p className="text-sm text-muted-foreground">
                Professional-grade audio equipment available for flexible rental periods. From microphones to mixing boards, we have everything you need.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Digital Products</h3>
              <p className="text-sm text-muted-foreground">
                Sound packs, presets, templates, and educational resources to enhance your audio production workflow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Our team of audio engineers is here to help you choose the right equipment and resources for your project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-secondary/30 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Our Mission
        </h2>
        <p className="text-muted-foreground">
          To democratize professional audio equipment and resources, making high-quality sound engineering tools accessible to everyone from indie creators to established studios. We believe great sound matters, and everyone should have the opportunity to create it.
        </p>
      </div>
    </div>
  );
}
