import React, { useState, useEffect } from 'react';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX 
} from 'react-icons/fi';
import { FaWhatsapp, FaApple } from 'react-icons/fa';

import chehol from './images/chehol.png';
import chehol1 from './images/chehol1.png';
import chehol2 from './images/chehol2.png';

const Header = ({ onAddToCart, onToggleFavorite, favorites = [] }) => {
  const casesData = [
    {
      id: 1,
      title: 'Стеклянные',
      mainImg: chehol,
      modelName: 'Глянец iPhone 12 6.1',
      price: 2927,
      variants: [
        { id: 'c1', colorName: 'Moviy', img: chehol, bg: 'bg-[#8CAAB5]' },
        { id: 'c2', colorName: 'Kumushrang', img: chehol1, bg: 'bg-[#BAC0C6]' },
        { id: 'c3', colorName: 'To‘q kulrang', img: chehol2, bg: 'bg-[#4B4C50]' },
      ],
    },
    {
      id: 2,
      title: 'Силиконовые',
      mainImg: chehol1,
      modelName: 'Силикон iPhone 12 6.1',
      price: 2450,
      variants: [
        { id: 's1', colorName: 'Och yashil', img: chehol1, bg: 'bg-[#DDF4A7]' },
        { id: 's2', colorName: 'Kumushrang', img: chehol, bg: 'bg-[#BAC0C6]' },
        { id: 's3', colorName: 'Qora', img: chehol2, bg: 'bg-[#303030]' },
      ],
    },
    {
      id: 3,
      title: 'Кожаные',
      mainImg: chehol2,
      modelName: 'Кожа iPhone 12 6.1',
      price: 3200,
      variants: [
        { id: 'k1', colorName: 'Qora', img: chehol2, bg: 'bg-[#2A2B2D]' },
        { id: 'k2', colorName: 'Moviy', img: chehol, bg: 'bg-[#8CAAB5]' },
        { id: 'k3', colorName: 'Jigarrang', img: chehol1, bg: 'bg-[#996545]' },
      ],
    },
  ];

  const [mobileIndex, setMobileIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  useEffect(() => {
    if (selectedProduct) return;
    const timer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % casesData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [selectedProduct, casesData.length]);

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    setActiveVariantIndex(0);
  };

  const getCurrentVariant = () => {
    if (!selectedProduct) return null;
    const variant = selectedProduct.variants[activeVariantIndex];
    return {
      id: `${selectedProduct.id}-${variant.id}`,
      productId: selectedProduct.id,
      title: `${selectedProduct.modelName} (${variant.colorName})`,
      price: selectedProduct.price,
      image: variant.img,
      rate: 4.7,
    };
  };

  // Проверка: находится ли товар в избранном
  const isItemFavorite = (id) => favorites.some((item) => item.id === id || item.productId === id);

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-8 py-8">
      <h2 className="text-[#838383] text-xl font-semibold mb-6">Чехлы</h2>

      {/* ================= 1. ДЕСКТОП ВЕРСИЯ (3 карточки) ================= */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {casesData.map((item) => {
          const isFav = isItemFavorite(item.id);
          return (
            <div
              key={item.id}
              className="bg-white rounded-[30px] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between cursor-pointer group hover:-translate-y-1.5 relative"
            >
              {/* Сердечко на карточке каталога */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // чтобы не открывалась модалка при клике на сердечко
                  if (onToggleFavorite) {
                    onToggleFavorite({
                      id: item.id,
                      productId: item.id,
                      title: item.modelName,
                      price: item.price,
                      image: item.mainImg,
                      rate: 4.7,
                    });
                  }
                }}
                className={`absolute top-6 right-6 p-2 rounded-full transition-transform active:scale-90 z-10 ${
                  isFav ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-black bg-gray-50'
                }`}
                title="В избранное"
              >
                <FiHeart className={`text-xl ${isFav ? 'fill-current' : ''}`} />
              </button>

              <div 
                onClick={() => handleOpenModal(item)} 
                className="w-full h-[320px] flex items-center justify-center p-4"
              >
                <img
                  src={item.mainImg}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                />
              </div>

              <h3 
                onClick={() => handleOpenModal(item)} 
                className="text-gray-800 text-lg font-semibold mt-4"
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* ================= 2. МОБИЛЬНАЯ ВЕРСИЯ (Слайдер) ================= */}
      <div className="md:hidden relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
        >
          {casesData.map((item) => {
            const isFav = isItemFavorite(item.id);
            return (
              <div
                key={item.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="bg-white rounded-[30px] p-6 shadow-md flex flex-col items-center justify-between relative">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleFavorite) {
                        onToggleFavorite({
                          id: item.id,
                          productId: item.id,
                          title: item.modelName,
                          price: item.price,
                          image: item.mainImg,
                          rate: 4.7,
                        });
                      }
                    }}
                    className={`absolute top-5 right-5 p-2 rounded-full active:scale-90 z-10 ${
                      isFav ? 'text-red-500 bg-red-50' : 'text-gray-400 bg-gray-50'
                    }`}
                  >
                    <FiHeart className={`text-xl ${isFav ? 'fill-current' : ''}`} />
                  </button>

                  <div 
                    onClick={() => handleOpenModal(item)} 
                    className="w-full h-[280px] flex items-center justify-center cursor-pointer"
                  >
                    <img
                      src={item.mainImg}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain drop-shadow-md"
                    />
                  </div>

                  <h3 
                    onClick={() => handleOpenModal(item)} 
                    className="text-gray-800 text-lg font-semibold mt-3 cursor-pointer"
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Индикаторы слайдера */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {casesData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setMobileIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                mobileIndex === idx ? 'w-6 bg-[#FFA542]' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= 3. МОДАЛЬНОЕ ОКНО ТОВАРА ================= */}
      {selectedProduct && (() => {
        const currentVariant = getCurrentVariant();
        const isModalFav = currentVariant ? isItemFavorite(currentVariant.id) : false;

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />

            <div className="relative w-full max-w-[420px] bg-white rounded-[32px] shadow-2xl p-6 z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
              {/* Шапка модалки с сердечком и крестиком */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-sm">Чехол</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (onToggleFavorite && currentVariant) {
                        onToggleFavorite(currentVariant);
                      }
                    }}
                    className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                      isModalFav ? 'text-red-500' : 'text-gray-400 hover:text-black'
                    }`}
                    title="В избранное"
                  >
                    <FiHeart className={`text-2xl ${isModalFav ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="p-1 text-gray-400 hover:text-black cursor-pointer"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>
              </div>

              {/* Блок изображения */}
              <div className="relative bg-[#F7F7F7] rounded-[24px] p-6 flex items-center justify-center h-[260px] overflow-hidden">
                <span className="absolute top-4 left-4 text-black text-2xl z-10">
                  <FaApple />
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveVariantIndex((prev) =>
                      prev === 0 ? selectedProduct.variants.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow text-gray-800 flex items-center justify-center cursor-pointer"
                >
                  <FiChevronLeft className="text-xl" />
                </button>

                <img
                  src={selectedProduct.variants[activeVariantIndex].img}
                  alt="Phone Case"
                  className="max-h-[210px] w-auto object-contain drop-shadow-xl transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setActiveVariantIndex((prev) =>
                      prev === selectedProduct.variants.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow text-gray-800 flex items-center justify-center cursor-pointer"
                >
                  <FiChevronRight className="text-xl" />
                </button>
              </div>

              {/* Название и цена */}
              <div className="flex items-center justify-between mt-4 mb-3">
                <h3 className="font-semibold text-gray-900 text-base">
                  {selectedProduct.modelName}
                </h3>
                <div className="text-base font-bold text-gray-900">
                  {selectedProduct.price.toLocaleString()} ₸
                </div>
              </div>

              {/* Выбор цвета */}
              <div className="mb-6 flex items-center gap-3 py-2">
                {selectedProduct.variants.map((variant, index) => {
                  const isSelected = activeVariantIndex === index;
                  return (
                    <div key={variant.id} className="flex flex-col items-center">
                      <button
                        type="button"
                        onClick={() => setActiveVariantIndex(index)}
                        className={`w-12 h-16 rounded-xl border-2 flex items-center justify-center p-1 cursor-pointer transition-all ${variant.bg} ${
                          isSelected ? 'border-[#FFA542] scale-105' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={variant.img}
                          alt={variant.colorName}
                          className="max-h-full max-w-full object-contain"
                        />
                      </button>
                      <span
                        className={`mt-1.5 h-1 rounded-full transition-all ${
                          isSelected ? 'w-8 bg-[#FFA542]' : 'w-0 bg-transparent'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Кнопки действия */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (currentVariant && onAddToCart) {
                      onAddToCart(currentVariant, false);
                      setSelectedProduct(null);
                    }
                  }}
                  className="w-12 h-12 rounded-2xl bg-[#101010] text-white flex items-center justify-center hover:bg-black active:scale-95 cursor-pointer"
                  title="В корзину"
                >
                  <FiShoppingCart className="text-lg" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (currentVariant && onAddToCart) {
                      onAddToCart(currentVariant, true);
                      setSelectedProduct(null);
                    }
                  }}
                  className="flex-1 h-12 rounded-2xl bg-[#101010] text-white text-sm font-semibold hover:bg-black active:scale-95 cursor-pointer"
                >
                  Купить сейчас!
                </button>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl bg-[#101010] text-[#25D366] flex items-center justify-center hover:bg-black"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};

export default Header;