import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import Footer from './components/Footer'

function App() {
  const [products] = useState([
    { 
      id: 1, 
      itemname: "Wireless Headphones", 
      price: 99.99, 
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    { 
      id: 2, 
      itemname: "Smart Watch", 
      price: 249.99, 
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    { 
      id: 3, 
      itemname: "Bluetooth Speaker", 
      price: 79.99, 
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    { 
      id: 4, 
      itemname: "Laptop Stand", 
      price: 49.99, 
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    { 
      id: 5, 
      itemname: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      itemname: "Mechanical Keyboard", 
      price: 159.99, 
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ]);

  // Initialize cart and functions to add/remove items from it
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemToAdd = { ...product, cartItemId: Date.now() + Math.random() };
    setCart((prevCart) => [...prevCart, itemToAdd]);
  }

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <header>
          <Header storeName="Component Corner" products="Products" contact="Contact" about="About" cartCount={cart.length}/>
      </header>

      <main>

        <div className='hero-section'>
          <Hero title="Welcome to Component Corner!" subtitle="Your one stop shop for all your phone needs" heroImage="https://placehold.co/1200x400/8b00b8/ffffff?text=Phone+Shop" callToAction="Shop Now"></Hero>
        </div>

        <div className='product-grid'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
        
        <section className="cart-section">
          <h2>Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is currently empty.</p>
          ) : (
            <div className="cart-container-list">
              {cart.map((item) => (
                <CartItem 
                  key={item.cartItemId} 
                  item={item} 
                  onRemove={removeFromCart} 
                />
              ))}
              <div className="cart-summary">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
              </div>
            </div>
          )}
        </section>

      </main>

      <footer>
        <Footer storeName="Component Corner" description="Providing top-quality tech accessories and hardware components for your mobile setup." contactEmail="support@componentcorner.com" contactPhone="(555) 019-2834" copyright="Component Corner Inc"/>
      </footer>    
    </>
  );
}

export default App
