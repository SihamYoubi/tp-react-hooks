import React, { useState, useContext, useEffect, useCallback } from 'react';
import { ThemeContext } from '../App';
import { useProductSearch, useDebounce } from '../hooks/useProductSearch';
import { LanguageContext } from '../App';
import ProductList from './ProductList';

const translations = {
    Français: {
        searchPlaceholder: 'Rechercher un produit...',
        price: 'Prix ',
        title: 'Catalogue de Produits',
    },
    Anglais: {
        searchPlaceholder: 'Search for a product...',
        price: 'Price ',
        title: 'Product Catalog',
    },
};
const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { isDarkTheme } = useContext(ThemeContext);
    // TODO: Exercice 2.1 - Utiliser le LanguageContext
    const { language } = useContext(LanguageContext);

    // TODO: Exercice 1.2 - Utiliser le hook useDebounce
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const { products, loading, error } = useProductSearch();

    const [filteredProducts, setFilteredProducts] = useState([]);
    //
    const handleSearchChange = (e) => {
      const query = e.target.value;
      
      setSearchTerm(query);
  };
    //   const handleSearchChange  = (e) => {
    //     const query = e.target.value;
    //     setSearchTerm(query);
    //     if (!query) {
    //       setFilteredProducts(products);
    //     }else {
    //     const filtered = products.filter(product=>
    //       product.title.toLowerCase().includes(query.toLowerCase())
    //     );
    //     setFilteredProducts(filtered);
    //   }
    // };

    

    useEffect(() => {
      if (debouncedSearchTerm !== undefined) {
          console.log('Fetching data for:', debouncedSearchTerm);
          if (debouncedSearchTerm === '') {
              setFilteredProducts(products);
          } else {
              const filtered = products.filter((product) =>
                  product.title
                      .toLowerCase()
                      .includes(debouncedSearchTerm.toLowerCase())
              );
              setFilteredProducts(filtered);
          }
      }
  }, [debouncedSearchTerm, products]); 
    if (loading)
        return (
            <div className='text-center my-4'>
                <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Chargement...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className='alert alert-danger' role='alert'>
                Erreur: {error}
            </div>
        );



    return (
        <div className='mb-4'>
            <h1 className='text-center'>{translations[language].title}</h1>

            <input
                type='text'
                value={searchTerm}
                placeholder={translations[language].searchPlaceholder}
                onChange={handleSearchChange}
                className={`form-control ${
                    isDarkTheme ? 'bg-dark text-light' : ''
                }`}
            />

{debouncedSearchTerm === '' ? <ProductList /> : 
             <div className='row mt-4'>
                {filteredProducts.map((product) => (
                    <div key={product.id} className='col-md-4 mb-4'>
                        <div
                            className={`card h-100 ${
                                isDarkTheme ? 'bg-dark text-light' : ''
                            }`}
                        >
                            {product.thumbnail && (
                                <img
                                    src={product.thumbnail}
                                    className='card-img-top'
                                    alt={product.title}
                                    style={{
                                        height: '200px',
                                        objectFit: 'cover',
                                    }}
                                />
                            )}
                            <div className='card-body'>
                                <h5 className='card-title'>{product.title}</h5>
                                <p className='card-text'>
                                    {product.description}
                                </p>
                                <p className='card-text'>
                                    <strong>
                                        {' '}
                                        {translations[language].price}
                                    </strong>
                                    {product.price}€
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
            }
        </div>
    );
};

export default ProductSearch;
