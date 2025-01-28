import React, { useState, useContext, useEffect} from 'react';
import { ThemeContext } from '../App';
import useProductSearch from '../hooks/useProductSearch';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);
  
  // TODO: Exercice 2.1 - Utiliser le LanguageContext
  
  // TODO: Exercice 1.2 - Utiliser le hook useDebounce
  //ex1:
  const { 
    products, 
    loading, 
    error,
    
  } = useProductSearch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);


  if (loading) return (
    <div className="text-center my-4">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="alert alert-danger" role="alert">
      Erreur: {error}
    </div>
  );
  const handleOnChangeSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (!query) {
      setFilteredProducts(products);
    }else {
    const filtered = products.filter(product=> 
      product.title.toLowerCase().includes(query.toLowerCase()) 
    );
    setFilteredProducts(filtered);
  }
};
  //
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleOnChangeSearch}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
      
      <div className="row mt-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className={`card h-100 ${isDarkTheme ? 'bg-dark text-light' : ''}`}>
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong>Prix: </strong>
                  {product.price}€
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ProductSearch;