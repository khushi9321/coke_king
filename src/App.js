import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams  } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import ProductSkin from './components/ProductSkin';
import { fetchProducts } from './api/productApi';
import './App.css';

// Expanded product data
const products = [
  // Oily Skin
  {
    _id: '1',
    name: 'Aloe Vera Gel',
    description: 'Soothing gel for skin hydration.',
    price: 600.00,
    skinType: 'oily',
    imageUrl: 'https://images.pexels.com/photos/14798574/pexels-photo-14798574.jpeg?auto=compress&cs=tinysrgb&w=600',
  }, 
    {
    _id: '2',
    name: 'Oil Control Face Wash',
    description: 'Deep cleansing face wash for excess oil.',
    price: 500.99,
    skinType: 'oily',
    imageUrl: 'https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    _id: '3',
    name: 'Mattifying Moisturizer',
    description: 'Lightweight moisturizer for oily skin.',
    price: 450.87,
    skinType: 'oily',
    imageUrl: 'https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    _id: '4',
    name: 'Clay Mask',
    description: 'Purifying clay mask for oil absorption.',
    price: 354.99,
    skinType: 'oily',
    imageUrl: 'https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    _id: '5',
    name: 'Pore Minimizer Toner',
    description: 'Toner to tighten pores and reduce oiliness.',
    price: 808.98,
    skinType: 'oily',
    imageUrl: 'https://images.pexels.com/photos/17466173/pexels-photo-17466173/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Dry Skin
  {
    _id: '6',
    name: 'Hydrating Cream',
    description: 'Rich cream for deep hydration.',
    price: 590.56,
    skinType: 'dry',
    imageUrl: 'https://files.oaiusercontent.com/file-GbHoLMET89i1qguuGJuvBp?se=2025-01-02T19%3A20%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D560ff451-beb6-4b48-ab4d-e452fd53d527.webp&sig=%2BfdFu5Q4Fyv6VWUFY82wn3oVoLGXiyCGCy2n8QfYkDo%3D',
  },
  {
    _id: '7',
    name: 'Shea Butter Lotion',
    description: 'Lotion enriched with shea butter for soft skin.',
    price: 450.98,
    skinType: 'dry',
    imageUrl: 'https://files.oaiusercontent.com/file-GbHoLMET89i1qguuGJuvBp?se=2025-01-02T19%3A20%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D560ff451-beb6-4b48-ab4d-e452fd53d527.webp&sig=%2BfdFu5Q4Fyv6VWUFY82wn3oVoLGXiyCGCy2n8QfYkDo%3D',
  },
  {
    _id: '8',
    name: 'Gentle Milk Cleanser',
    description: 'Mild cleanser for dry, sensitive skin.',
    price: 500.00,
    skinType: 'dry',
    imageUrl: 'https://files.oaiusercontent.com/file-GbHoLMET89i1qguuGJuvBp?se=2025-01-02T19%3A20%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D560ff451-beb6-4b48-ab4d-e452fd53d527.webp&sig=%2BfdFu5Q4Fyv6VWUFY82wn3oVoLGXiyCGCy2n8QfYkDo%3D',
  },
  {
    _id: '9',
    name: 'Overnight Repair Mask',
    description: 'Overnight mask to restore skin moisture.',
    price: 879.98,
    skinType: 'dry',
    imageUrl: 'https://files.oaiusercontent.com/file-GbHoLMET89i1qguuGJuvBp?se=2025-01-02T19%3A20%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D560ff451-beb6-4b48-ab4d-e452fd53d527.webp&sig=%2BfdFu5Q4Fyv6VWUFY82wn3oVoLGXiyCGCy2n8QfYkDo%3D',
  },
  {
    _id: '10',
    name: 'Hyaluronic Acid Serum',
    description: 'Serum to lock in moisture and smooth skin.',
    price: 650.98,
    skinType: 'dry',
    imageUrl: 'https://files.oaiusercontent.com/file-GbHoLMET89i1qguuGJuvBp?se=2025-01-02T19%3A20%3A59Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D560ff451-beb6-4b48-ab4d-e452fd53d527.webp&sig=%2BfdFu5Q4Fyv6VWUFY82wn3oVoLGXiyCGCy2n8QfYkDo%3D',
  },
  // Combination Skin
  {
    _id: '11',
    name: 'Balancing Gel Moisturizer',
    description: 'Hydrating gel for combination skin.',
    price: 450.00,
    skinType: 'combination',
    imageUrl: 'https://files.oaiusercontent.com/file-2cWy7kV6JM5UWmAAhNGaJM?se=2025-01-02T19%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db3f737f0-af19-43d0-a4fd-500c139c0a0b.webp&sig=stO1BkfhtAMMpyBs7g0avn3/eb6YIaJPqAlUaywPr7A%3D',
  },
  {
    _id: '12',
    name: 'T-Zone Control Serum',
    description: 'Serum for oily T-zone and dry cheeks.',
    price: 659.90,
    skinType: 'combination',
    imageUrl: 'https://files.oaiusercontent.com/file-2cWy7kV6JM5UWmAAhNGaJM?se=2025-01-02T19%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db3f737f0-af19-43d0-a4fd-500c139c0a0b.webp&sig=stO1BkfhtAMMpyBs7g0avn3/eb6YIaJPqAlUaywPr7A%3D',
  },
  {
    _id: '13',
    name: 'Gentle Exfoliating Scrub',
    description: 'Mild exfoliant for balanced skin.',
    price: 349.50,
    skinType: 'combination',
    imageUrl: 'https://files.oaiusercontent.com/file-2cWy7kV6JM5UWmAAhNGaJM?se=2025-01-02T19%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db3f737f0-af19-43d0-a4fd-500c139c0a0b.webp&sig=stO1BkfhtAMMpyBs7g0avn3/eb6YIaJPqAlUaywPr7A%3D',
  },
  {
    _id: '14',
    name: 'Hydration and Matte Primer',
    description: 'Dual-action primer for combination skin.',
    price: 549.58,
    skinType: 'combination',
    imageUrl: 'https://files.oaiusercontent.com/file-2cWy7kV6JM5UWmAAhNGaJM?se=2025-01-02T19%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db3f737f0-af19-43d0-a4fd-500c139c0a0b.webp&sig=stO1BkfhtAMMpyBs7g0avn3/eb6YIaJPqAlUaywPr7A%3D',
  },
  {
    _id: '15',
    name: 'Balancing Toner',
    description: 'Toner to balance hydration and control oil.',
    price: 450.67,
    skinType: 'combination',
    imageUrl: 'https://files.oaiusercontent.com/file-2cWy7kV6JM5UWmAAhNGaJM?se=2025-01-02T19%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db3f737f0-af19-43d0-a4fd-500c139c0a0b.webp&sig=stO1BkfhtAMMpyBs7g0avn3/eb6YIaJPqAlUaywPr7A%3D',
  },
  // Sensitive Skin
  {
    _id: '16',
    name: 'Calming Chamomile Cream',
    description: 'Cream to soothe sensitive skin.',
    price: 545.89,
    skinType: 'sensitive',
    imageUrl: 'https://imgs.search.brave.com/tKuMXxf_5QADoHwGG9gH3wI1A54EpqZhxj8knyY9hUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXpza2luLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9DbGVhbnNlLUNs/YXJpZnlfQmVhdXR5/LUJpYmxlLUF3YXJk/cy0yMDIwXzFzdC5w/bmc',
  },
  {
    _id: '17',
    name: 'Fragrance-Free Moisturizer',
    description: 'Moisturizer designed for sensitive skin.',
    price: 567.99,
    skinType: 'sensitive',
    imageUrl: 'https://imgs.search.brave.com/tKuMXxf_5QADoHwGG9gH3wI1A54EpqZhxj8knyY9hUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXpza2luLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9DbGVhbnNlLUNs/YXJpZnlfQmVhdXR5/LUJpYmxlLUF3YXJk/cy0yMDIwXzFzdC5w/bmc',
  },
  {
    _id: '18',
    name: 'Anti-Redness Serum',
    description: 'Serum to reduce redness and irritation.',
    price: 450.00,
    skinType: 'sensitive',
    imageUrl: 'https://imgs.search.brave.com/tKuMXxf_5QADoHwGG9gH3wI1A54EpqZhxj8knyY9hUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXpza2luLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9DbGVhbnNlLUNs/YXJpZnlfQmVhdXR5/LUJpYmxlLUF3YXJk/cy0yMDIwXzFzdC5w/bmc',
  },
  {
    _id: '19',
    name: 'SPF 50 Sunscreen',
    description: 'Gentle sunscreen for sensitive skin.',
    price: 567.87,
    skinType: 'sensitive',
    imageUrl: 'https://imgs.search.brave.com/tKuMXxf_5QADoHwGG9gH3wI1A54EpqZhxj8knyY9hUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXpza2luLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9DbGVhbnNlLUNs/YXJpZnlfQmVhdXR5/LUJpYmxlLUF3YXJk/cy0yMDIwXzFzdC5w/bmc',
  },
  {
    _id: '20',
    name: 'Soothing Green Tea Mask',
    description: 'Mask to calm sensitive skin.',
    price: 150.87,
    skinType: 'sensitive',
    imageUrl: 'https://imgs.search.brave.com/tKuMXxf_5QADoHwGG9gH3wI1A54EpqZhxj8knyY9hUU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bXpza2luLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/OC9DbGVhbnNlLUNs/YXJpZnlfQmVhdXR5/LUJpYmxlLUF3YXJk/cy0yMDIwXzFzdC5w/bmc',
  },
];


function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleSearch = (query) => setSearchQuery(query);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/products"
            element={<ProductList products={filteredProducts} />}
          />
          <Route
            path="/products/:skinType"
            element={<ProductSkin products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
}


const SkinTypeProducts = ({ products }) => {
  const { skinType } = useParams();
  const filteredBySkinType = products.filter(
    (product) => product.skinType.toLowerCase() === skinType.toLowerCase()
  );

  return (
    <div>
      <h1>Products for {skinType.charAt(0).toUpperCase() + skinType.slice(1)} Skin</h1>
      <ProductList products={filteredBySkinType} />
    </div>
  );
};




export default App;
