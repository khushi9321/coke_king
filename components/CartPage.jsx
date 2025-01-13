import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]); // State to hold the products from API
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data); // Update the products state with data from API
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart and set it as selected
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductInCart = cart.some((item) => item._id === product._id);

    if (isProductInCart) {
      alert(`"${product.name}" is already in the cart!`);
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setSelectedProduct(product);
      alert(`"${product.name}" added to the cart!`);
    }
  };

  // Handle loading and error states
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Add the logic to add the product to the cart
  };

  const handleViewProduct = (product) => {
    console.log('Viewing product:', product);
    // Add the logic to navigate to the product details page
  };
  return (
    <div>
      <h1>Skin Care Products</h1>

      {/* Display product list */}
      <div className="product-list" style={{ display: "flex", gap: "10px" }}>
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100px", height: "100px" }}
            />
           <h2>{product.name}</h2>
    <p>Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : 'N/A'}</p>
    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    <button onClick={() => handleViewProduct(product)}>View Product</button>
          </div>
        ))}
      </div>

      <hr />

      {/* Hi Skin button */}
      <h2>
        <button
          onClick={() =>
            alert(
              selectedProduct
                ? `Selected Product: ${selectedProduct.name} - ₹${selectedProduct.price.toFixed(
                    2
                  )}`
                : "No product selected yet!"
            )
          }
        >
          Hi Skin
        </button>
      </h2>

      {/* Display selected product details */}
      {selectedProduct && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Product Details</h3>
          <p>
            <strong>Name:</strong> {selectedProduct.name}
          </p>
          <p>
            <strong>Price:</strong> ₹{selectedProduct.price.toFixed(2)}
          </p>
          <p>
            <strong>Description:</strong> {selectedProduct.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
