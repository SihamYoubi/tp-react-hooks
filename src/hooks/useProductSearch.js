import { useState, useEffect } from 'react';

// TODO: Exercice 3.1 - Créer le hook useDebounce
  export const useDebounce = (value, delay) =>{
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }
  
// TODO: Exercice 3.2 - Créer le hook useLocalStorage
export const  useLocalStorage =(key, initialValue)=> {
  const storedValue = typeof window !== "undefined" ? localStorage.getItem(key) : null;
  const [stored, setStored] = useState(storedValue !== null ? JSON.parse(storedValue) : initialValue);
   useEffect(() => {
    localStorage.setItem(key, JSON.stringify(stored));
  }, [key, stored]);
  return [stored, setStored];
}

export const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // TODO: Exercice 4.2 - Ajouter l'état pour la pagination

  const fetchProducts = async () => {
    try {
      //
      setLoading(true);
      // TODO: Exercice 4.2 - Modifier l'URL pour inclure les paramètres de pagination
      const response = await fetch('https://api.daaif.net/products?delay=1000');
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // TODO: Exercice 4.2 - Ajouter les dépendances pour la pagination

  // TODO: Exercice 4.1 - Ajouter la fonction de rechargement
  const handleButton =  () =>{
    fetchProducts();
    }
  // TODO: Exercice 4.2 - Ajouter les fonctions pour la pagination

  return { 
    products, 
    loading, 
    error,
    // TODO: Exercice 4.1 - Retourner la fonction de rechargement
    handleButton,
    // TODO: Exercice 4.2 - Retourner les fonctions et états de pagination
  };
};

//  export  {useProductSearch, useDebounce};