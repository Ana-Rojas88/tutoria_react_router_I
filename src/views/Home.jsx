import { useEffect, useState } from "react";

const Home = () => {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=12"
      );

      const data = await response.json();

      setProductos(data.products);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <main className="home">
      <h1>Productos</h1>

      <div className="productos-container">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.thumbnail}
              alt={producto.title}
            />

            <div className="producto-info">
              <h2>{producto.title}</h2>

              <p className="categoria">
                {producto.category}
              </p>

              <p className="descripcion">
                {producto.description}
              </p>

              <div className="producto-footer">
                <span className="precio">
                  ${producto.price}
                </span>

                <span className="rating">
                  ⭐ {producto.rating}
                </span>
              </div>

              <button>Ver producto</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;