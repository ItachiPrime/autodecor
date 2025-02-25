const Products = ({ products }) => {
  return (
    <section className="py-16 px-4 transform-gpu">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-secondary animate-fade-up">
          Featured Creations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden hover:shadow-metallic transition-all duration-500 animate-fade-up transform hover:scale-105 hover:-rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary">
                  {product.name}
                </h3>
                <p className="text-secondary/70 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">
                    ${product.price}
                  </span>
                  <button className="text-sm px-4 py-2 bg-secondary/10 hover:bg-secondary/20 rounded-full transition-all duration-300 hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
