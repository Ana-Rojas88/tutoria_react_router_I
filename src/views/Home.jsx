import { useEffect, useState } from "react";
import { useApiContext } from "../context/ApiContext";

const Home = () => {

  const { productos } = useApiContext()

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