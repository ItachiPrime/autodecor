
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import Products from "@/components/Products";

const products = 
[
  {
    "id": 1,
    "name": "Piston Business Card Holder",
    "image": "/i (3).png",
    "description": "A sleek card holder made from a real piston.",
    "price": 299
  },
  {
    "id": 2,
    "name": "Clutch Pressure Plate Wall Clock",
    "image": "/i (4).png",
    "description": "A bold wall clock crafted from a clutch plate.",
    "price": 249
  },
  {
    "id": 3,
    "name": "V6 Engine Block Table",
    "image": "i (2).png",
    "description": "A striking table built from a V6 engine block.",
    "price": 99
  },
  {
    "id": 4,
    "name": "Tire Wall Clock",
    "image": "i (1).png",
    "description": "A unique wall clock made from a real tire.",
    "price": 99
  }
]
  
const testimonials = [
  {
    name: "John D.",
    text: "The turbocharger lamp is a masterpiece! Perfect addition to my garage.",
    rating: 4,
  },
  {
    name: "Sarah M.",
    text: "Beautiful craftsmanship and attention to detail. Truly unique pieces.",
    rating: 5,
  },
];

const Index = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef(null);

  const handleScrollToProducts = () => {
    productsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-foreground perspective-1000">
      <Navigation />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src="vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content Layer */}
        <div 
          ref={parallaxRef}
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center [text-shadow:_0_4px_12px_rgb(0_0_0_/_50%)] animate-title">
            <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary bg-clip-text text-transparent">
              Automotive Art
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          <a 
            onClick={handleScrollToProducts}
            className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-in"
          >
            Explore Collection
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
      <div ref={productsSectionRef}>
        <Products products={products} />
      </div>

      {/* Why Choose Us with Parallax */}
      <section className="relative py-16 px-4 bg-card/50 overflow-hidden">
        <div className="container mx-auto relative z-10">
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
                className="text-center p-6 rounded-lg bg-card/50 animate-fade-up transform hover:translate-y-[-10px] transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-secondary">{item.title}</h3>
                <p className="text-secondary/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card animate-fade-up transform hover:scale-105 hover:rotate-2 transition-all duration-300"
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
          <p>&copy; 2025 AutoDecor. All rights reserved.</p>
        </div>
        <div className="text-sm text-center text-gray-600 pt-4 pb-0">
        Developed by <a href="https://github.com/ItachiPrime" className="text-red-600 font-semibold hover:text-red-500" target="blank">ItachiPrime</a>
      </div>
      </footer>
    </div>
  );
};

export default Index;
