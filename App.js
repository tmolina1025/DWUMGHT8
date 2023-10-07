import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Electrónica'); // Categoría inicial

  return (
    <div className="App">
      <Header title="Catálogo de Productos" />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Categorías</h4>
            <ul>
              <li onClick={() => setSelectedCategory('Electrónica')}>Electrónica</li>
              <li onClick={() => setSelectedCategory('Moda')}>Moda</li>
              <li onClick={() => setSelectedCategory('Alimentos')}>Alimentos</li>
              {/* Agrega más categorías aquí */}
            </ul>
          </div>
          <div className="col-md-9">
            <h4>Productos en {selectedCategory}</h4>
            <ProductList category={selectedCategory} />
          </div>
        </div>
      </div>
      <Footer author="Antonio Rafael Molina Ramirez" />
    </div>
  );
}

export default App;
