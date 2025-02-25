
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "John D.",
    text: "The turbocharger lamp is a masterpiece! Perfect addition to my garage.",
    rating: 5,
  },
  {
    name: "Sarah M.",
    text: "Beautiful craftsmanship and attention to detail. Truly unique pieces.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-primary text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">
            Automotive Art Reimagined
          </h1>
          <p className="text-lg md:text-xl text-secondary/80 mb-8 max-w-2xl mx-auto">
            Handcrafted decor pieces made from upcycled car parts, where engineering meets artistry.
          </p>
          <a 
            href="/shop" 
            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-full transition-colors group"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Featured Creations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="group bg-card rounded-lg overflow-hidden hover:shadow-metallic transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${item * 100}ms` }}
              >
                <div className="aspect-square bg-secondary/10"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Turbocharger Lamp</h3>
                  <p className="text-secondary/70 mb-4">
                    Industrial elegance crafted from genuine turbocharger parts.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-semibold">$299</span>
                    <button className="text-sm px-4 py-2 bg-secondary/10 hover:bg-secondary/20 rounded-full transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Handcrafted",
                description: "Each piece is meticulously crafted by skilled artisans"
              },
              {
                title: "Sustainable",
                description: "Giving new life to automotive parts through creative upcycling"
              },
              {
                title: "Unique",
                description: "No two pieces are exactly alike, ensuring exclusivity"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-card/50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">{item.title}</h3>
                <p className="text-secondary/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-secondary/80 mb-4">{testimonial.text}</p>
                <p className="text-secondary font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-secondary/10">
        <div className="container mx-auto text-center text-secondary/60">
          <p>&copy; 2024 AutoArt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
