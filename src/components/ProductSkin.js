import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import { fetchProductsBySkinType } from '../api/productApi';

const ProductSkin = () => {
  const { skinType } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSkinTypeProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await fetchProductsBySkinType(skinType);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching skin type products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkinTypeProducts();
  }, [skinType]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Products for {skinType} Skin</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductSkin;
