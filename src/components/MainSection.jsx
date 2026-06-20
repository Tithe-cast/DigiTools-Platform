import React, { useState } from 'react';
import { toast } from 'react-toastify';
import products from '../data/products';
import ProductCard from './ProductCard';
import CartItem from './CartItem';

const MainSection = ({ cart, setCart }) => {
  const [tab, setTab] = useState('products');

  const isInCart = (id) => cart.some(i => i.id === id);

  const addToCart = (product) => {
    if (isInCart(product.id)) return;
    setCart(prev => [...prev, product]);
    toast.success(`🛒 ${product.name} added to cart!`, { autoClose: 2500 });
  };

  const removeFromCart = (id) => {
    const item = cart.find(i => i.id === id);
    setCart(prev => prev.filter(i => i.id !== id));
    toast.error(`🗑️ ${item?.name} removed from cart`, { autoClose: 2000 });
  };

  const checkout = () => {
    if (cart.length === 0) { toast.warn('Your cart is empty!', { autoClose: 2000 }); return; }
    setCart([]);
    toast.success('🎉 Checkout successful! Thank you!', { position: 'top-center', autoClose: 3500 });
  };

  const total = cart.reduce((s, i) => s + i.price, 0);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[36px] font-extrabold text-[#0f172a] mb-3 tracking-tight">Premium Digital Tools</h2>
          <p className="text-[#627382] text-[14px] leading-[1.7] max-w-[420px] mx-auto">
            Choose from our curated collection of premium digital products designed<br className="hidden sm:block"/>
            to boost your productivity and creativity.
          </p>
        </div>

        {/* Toggle — Products | Cart */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 bg-[#f3f4f6] rounded-full p-1">
            <button onClick={() => setTab('products')}
              className={`px-7 py-2 rounded-full text-[14px] font-semibold transition-all duration-200
                ${tab === 'products' ? 'bg-[#4F39F6] text-white shadow' : 'text-[#374151] hover:text-[#4F39F6]'}`}>
              Products
            </button>
            <button onClick={() => setTab('cart')}
              className={`px-7 py-2 rounded-full text-[14px] font-semibold transition-all duration-200
                ${tab === 'cart' ? 'bg-[#4F39F6] text-white shadow' : 'text-[#374151] hover:text-[#4F39F6]'}`}>
              Cart {cart.length > 0 ? `(${cart.length})` : ''}
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {tab === 'products' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <div key={p.id} className="fade-up" style={{ animationDelay: `${i * 0.06}s`, opacity: 0 }}>
                <ProductCard product={p} onAddToCart={addToCart} isInCart={isInCart(p.id)} />
              </div>
            ))}
          </div>
        )}

        {/* Cart View */}
        {tab === 'cart' && (
          <div className="max-w-[680px] mx-auto">
            {cart.length === 0 ? (
              /* Empty cart */
              <div className="border border-[#e5e7eb] rounded-2xl p-16 text-center">
                <div className="text-5xl mb-4">🛒</div>
                <h3 className="text-[20px] font-bold text-[#0f172a] mb-2">Your cart is empty</h3>
                <p className="text-[#627382] text-[14px] mb-6">Browse our tools and add something amazing!</p>
                <button onClick={() => setTab('products')}
                  className="bg-[#4F39F6] hover:bg-[#3d2ad4] text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-colors">
                  Browse Products
                </button>
              </div>
            ) : (
              /* Cart with items — matches cart.png exactly */
              <div className="border border-[#e5e7eb] rounded-2xl overflow-hidden">
                <div className="px-6 pt-6 pb-2">
                  <h3 className="text-[18px] font-bold text-[#0f172a]">Your Cart</h3>
                </div>
                <div className="px-6">
                  {cart.map(item => (
                    <CartItem key={item.id} item={item} onRemove={removeFromCart} />
                  ))}
                </div>
                {/* Total + Checkout */}
                <div className="px-6 pt-4 pb-6 mt-2 border-t border-[#f3f4f6]">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[14px] text-[#627382] font-medium">Total:</span>
                    <span className="text-[26px] font-extrabold text-[#0f172a]">${total}</span>
                  </div>
                  <button onClick={checkout}
                    className="w-full bg-[#4F39F6] hover:bg-[#3d2ad4] text-white font-bold text-[15px] py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-purple-200">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MainSection;
