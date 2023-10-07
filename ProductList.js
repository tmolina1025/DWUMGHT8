import React from 'react';

const ProductList = ({ category }) => {
  // Simulación de productos por categoría
  const products = [
    { name: 'Producto 1', description: 'Descripción del Producto 1', price: 10, image: 'imagen1.jpg' },
    { name: 'Producto 2', description: 'Descripción del Producto 2', price: 20, image: 'imagen2.jpg' },
    // Agrega más productos aquí
  ];

  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="product-list">
      {filteredProducts.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.image} alt={product.name} />
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
