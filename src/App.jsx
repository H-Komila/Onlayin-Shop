import React, { useState } from 'react';
import './App.css';
import Nav from './component/Nav';
import Header from './component/Header';
import EmptyCart from './component/EmptyCart';
import Favorites from './component/Favorites';
import { FiTrash2, FiPlus, FiMinus, FiCheckCircle } from 'react-icons/fi';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Buyurtma qabul qilinganligi (muvaffaqiyat) modali holati
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  // Savatga qo'shish funksiyasi
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

  // Savatdan mahsulotni o'chirish
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Mahsulot jo'natilganda (Buyurtma berilganda) ishlaydigan funksiya
  const handleCheckout = () => {
    // Tasodifiy buyurtma raqami
    const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNum);
    setOrderSuccess(true);
    setCart([]); // Savat tozalanadi
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#EAEAEA] flex flex-col justify-between relative">
      {/* Navbar */}
      <Nav
        onGoHome={() => setCurrentPage('home')}
        onOpenCart={() => setCurrentPage('cart')}
        onOpenFavorites={() => setCurrentPage('favorites')}
        cartCount={totalCartCount}
        favoritesCount={favorites.length}
        showBanner={currentPage === 'home'}
      />

      {/* 1. BOSH SAHIFA (Header / Katalog) */}
      {currentPage === 'home' && (
        <Header onAddToCart={handleAddToCart} />
      )}

      {/* 2. SAVATCHA SAHIFASI */}
      {currentPage === 'cart' && (
        cart.length === 0 ? (
          <EmptyCart onGoToCatalog={() => setCurrentPage('home')} />
        ) : (
          <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-8 flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Корзина
            </h1>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Mahsulotlar ro'yxati */}
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

              {/* Jami hisob kartasi */}
              <div className="w-full lg:w-[350px] bg-white rounded-[30px] p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium">ИТОГО</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {totalPrice.toLocaleString()} ₸
                  </span>
                </div>
                {/* Buyurtmani rasmiylashtirish tugmasi */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="w-full py-4 bg-[#101010] text-white text-base font-medium rounded-[20px] shadow-lg hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
                >
                  Перейти к оформлению
                </button>
              </div>
            </div>
          </main>
        )
      )}

      {/* 3. SEVIMLILAR SAHIFASI */}
      {currentPage === 'favorites' && (
        <Favorites
          favorites={favorites}
          onRemoveFavorite={(id) => setFavorites((prev) => prev.filter((f) => f.id !== id))}
          onAddToCart={handleAddToCart}
          onGoToCatalog={() => setCurrentPage('home')}
        />
      )}

      {/* ================= RUSCHA QABUL QILINDI XABARI (MODAL) ================= */}
      {orderSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setOrderSuccess(false);
              setCurrentPage('home');
            }}
          />
          <div className="relative bg-white rounded-[32px] p-8 max-w-[420px] w-full text-center shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl">
              <FiCheckCircle />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Заказ принят!
            </h3>
            
            <p className="text-gray-600 text-sm mb-2">
              Номер вашего заказа: <span className="font-bold text-gray-900">№{orderNumber}</span>
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Ваш заказ успешно принят и передан в службу доставки. Скоро мы свяжемся с вами!
            </p>

            <button
              type="button"
              onClick={() => {
                setOrderSuccess(false);
                setCurrentPage('home'); // Bosh sahifaga qaytadi
              }}
              className="w-full py-3.5 bg-[#101010] text-white font-medium rounded-2xl hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
            >
              Отлично
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;