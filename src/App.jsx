import React, { useState } from 'react';
import './App.css';
import Nav from './component/Nav';
import Header from './component/Header';
import Menyu from './component/Menyu';
import Article from './component/Article';
import EmptyCart from './component/EmptyCart';
import Favorites from './component/Favorites';
import Footer from './component/Footer';
import Terms from './component/Terms';
import Contacts from './component/Contacts';
import Checkout from './component/Checkout';
import OrderSuccessPage from './component/OrderSuccessPage';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

const App = () => {
  // Sahifalar: 'home' | 'cart' | 'favorites' | 'terms' | 'contacts' | 'checkout' | 'success'
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orderNumber, setOrderNumber] = useState(null);

  // Sevimlilarga qo'shish / o'chirish
  const handleToggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  // Savatga qo'shish
  const handleAddToCart = (product, redirectToCart = false) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    if (redirectToCart) {
      setCurrentPage('cart');
    }
  };

  // Miqdorni o'zgartirish (+ / -)
  const handleUpdateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Savatdan o'chirish
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Buyurtmani muvaffaqiyatli yakunlash
  const handleCompleteOrder = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomNum);
    setCart([]);
    setCurrentPage('success');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#EAEAEA] flex flex-col justify-between relative">
      {/* Tepadagi Navbar */}
      <Nav
        onGoHome={() => setCurrentPage('home')}
        onOpenCart={() => setCurrentPage('cart')}
        onOpenFavorites={() => setCurrentPage('favorites')}
        cartCount={totalCartCount}
        favoritesCount={favorites.length}
        showBanner={currentPage === 'home'}
      />

      <div className="flex-1 flex flex-col">
        {/* 1. BOSH SAHIFA */}
        {currentPage === 'home' && (
          <main className="pb-12">
            <Header 
              favorites={favorites} 
              onAddToCart={handleAddToCart} 
              onToggleFavorite={handleToggleFavorite}
            />
            <Menyu 
              favorites={favorites} 
              onAddToCart={handleAddToCart} 
              onToggleFavorite={handleToggleFavorite}
            />
            <Article 
              favorites={favorites} 
              onAddToCart={handleAddToCart} 
              onToggleFavorite={handleToggleFavorite}
            />
          </main>
        )}

        {/* 2. SAVATCHA */}
        {currentPage === 'cart' && (
          cart.length === 0 ? (
            <EmptyCart onGoToCatalog={() => setCurrentPage('home')} />
          ) : (
            <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-8 flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Корзина
              </h1>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 w-full space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-[30px] p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-6 w-full sm:w-auto">
                        <div className="w-24 h-24 bg-[#F7F7F7] rounded-2xl flex items-center justify-center p-2 shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base mb-1">
                            {item.title}
                          </h3>
                          <div className="text-sm font-semibold text-gray-400">
                            {item.price.toLocaleString()} ₸
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                        <div className="flex items-center gap-3 bg-[#F2F2F2] rounded-xl px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(item.id, -1)}
                            className="text-gray-600 hover:text-black cursor-pointer"
                          >
                            <FiMinus />
                          </button>
                          <span className="font-semibold text-sm w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleUpdateQty(item.id, 1)}
                            className="text-gray-600 hover:text-black cursor-pointer"
                          >
                            <FiPlus />
                          </button>
                        </div>

                        <div className="text-lg font-bold text-gray-900 min-w-[90px] text-right">
                          {(item.price * item.quantity).toLocaleString()} ₸
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-red-400 hover:text-red-600 p-2 cursor-pointer"
                        >
                          <FiTrash2 className="text-xl" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full lg:w-[350px] bg-white rounded-[30px] p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500 font-medium">ИТОГО</span>
                    <span className="text-2xl font-bold text-gray-900">
                      {totalPrice.toLocaleString()} ₸
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCurrentPage('checkout')}
                    className="w-full py-4 bg-[#101010] text-white text-base font-medium rounded-[20px] shadow-lg hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
                  >
                    Перейти к оформлению
                  </button>
                </div>
              </div>
            </main>
          )
        )}

        {/* 3. SEVIMLILAR */}
        {currentPage === 'favorites' && (
          <Favorites 
            favorites={favorites} 
            onRemoveFavorite={(id) => setFavorites((prev) => prev.filter((f) => f.id !== id))}
            onAddToCart={handleAddToCart}
            onGoToCatalog={() => setCurrentPage('home')}
          />
        )}

        {/* 4. BUYURTMA RASMIYLASHTIRISH */}
        {currentPage === 'checkout' && (
          <Checkout 
            cart={cart} 
            onOrderComplete={handleCompleteOrder} 
          />
        )}

        {/* 5. BUYURTMA MUVAFFAQIYATLI YAKUNLANDI */}
        {currentPage === 'success' && (
          <OrderSuccessPage 
            orderNumber={orderNumber} 
            onGoHome={() => setCurrentPage('home')} 
          />
        )}

        {/* 6. SHARTLAR */}
        {currentPage === 'terms' && (
          <Terms />
        )}

        {/* 7. KONTAKTLAR */}
        {currentPage === 'contacts' && (
          <Contacts />
        )}
      </div>

      {/* Pastdagi Footer */}
      <Footer 
        onGoHome={() => setCurrentPage('home')}
        onOpenCart={() => setCurrentPage('cart')}
        onOpenFavorites={() => setCurrentPage('favorites')}
        onOpenTerms={() => setCurrentPage('terms')}
        onOpenContacts={() => setCurrentPage('contacts')}
      />
    </div>
  );
};

export default App;