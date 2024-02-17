import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/PostCard';
import ShoppingCart from './components/ShoppingCart';

const productsData = [
  {
        id: 1,
        name: 'Modern Dream Catchers',
        image: 'https://images.meesho.com/images/products/24640056/20569_512.webp',
        price: 4.9,
        rating: 4.2,
      },
      {
        id: 2,
        name: 'Showpieces & Collectibles',
        image: 'https://images.meesho.com/images/products/122392253/oxexo_512.webp',
        price: 5.2,
        rating: 4.1,
      },
      {
        id: 3,
        name: 'Natural & Original Gomti Chakra Tree',
        image: 'https://images.meesho.com/images/products/261393852/osd34_512.webp',
        price: 3.9,
        rating: 4.0,
      },
      {
        id: 4,
        name: 'Metal Multicolour Musician Table Décor Showpiece Set Of Two',
        image: 'https://images.meesho.com/images/products/254543953/re7ey_512.webp',
        price: 4.7,
        rating: 4.4,
      },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleQuantityChange = (productId, action) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: action === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 0)
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const getQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };
  

  return (
    <div className="App">
      <Header />
      <main>
     { <section className="filters">
     <h2>Categories:</h2>
     </section>}
        <section className="products">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleQuantityChange={handleQuantityChange}
              getQuantity={getQuantity}
            />
          ))}
        </section>
      </main>
      <ShoppingCart cart={cart} />
    </div>
  );
};

export default App;