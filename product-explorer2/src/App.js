import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch all products on initial load
  useEffect(() => {
    fetchProducts();
    fetchCategories();
    loadFavorites();
  }, []);

  // Fetch products based on category
  useEffect(() => {
    if (selectedCategory === 'all') {
      fetchProducts();
    } else {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.error('Failed to fetch categories');
    }
  };

  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(saved);
  };

  const toggleFavorite = (productId) => {
    let updatedFavorites;
    if (favorites.includes(productId)) {
      updatedFavorites = favorites.filter(id => id !== productId);
    } else {
      updatedFavorites = [...favorites, productId];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Reset search when category changes
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Product Explorer</h1>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <div className="filters-container">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={handleSearchChange} 
        />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      <ProductList 
        products={filteredProducts}
        loading={loading}
        error={error}
        onToggleFavorite={toggleFavorite}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
