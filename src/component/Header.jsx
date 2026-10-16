import React, { useState, useRef, useEffect } from 'react';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX, 
  FiStar 
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
      oldPrice: 3527,
      discount: '-32%',
      rate: 4.7,
      variants: [
        { id: 'c1', colorName: 'Moviy', img: chehol, bg: 'bg-[#8CAAB5]' },
        { id: 'c2', colorName: 'Kumushrang', img: chehol1, bg: 'bg-[#BAC0C6]' },
        { id: 'c3', colorName: 'To‘q kulrang', img: chehol2, bg: 'bg-[#4B4C50]' },
        { id: 'c4', colorName: 'Sariq', img: chehol1, bg: 'bg-[#E5A93C]' },
      ],
    },
    {
      id: 2,
      title: 'Силиконовые',
      mainImg: chehol1,
      modelName: 'Силикон iPhone 12 6.1',
      price: 2450,
      oldPrice: 2990,
      discount: '-20%',
      rate: 4.8,
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
      oldPrice: 4100,
      discount: '-15%',
      rate: 4.9,
      variants: [
        { id: 'k1', colorName: 'Qora', img: chehol2, bg: 'bg-[#2A2B2D]' },
        { id: 'k2', colorName: 'Moviy', img: chehol, bg: 'bg-[#8CAAB5]' },
        { id: 'k3', colorName: 'Jigarrang', img: chehol1, bg: 'bg-[#996545]' },
      ],
    },
  ];

  const sliderRef = useRef(null);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  // Modal holatlari
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  // FAQAT MOBILDA AVTOMATIK SILJISH (768px dan kichik ekranda)
  useEffect(() => {
    // Agar modal ochiq bo'lsa yoki katta ekran bo'lsa avto-slayd ishlamaydi
    if (selectedProduct) return;

    const interval = setInterval(() => {
      // Faqat mobil o'lchamda bo'lsa aylantiramiz
      if (window.innerWidth < 768 && sliderRef.current) {
        setCurrentMobileSlide((prev) => {
          const nextIndex = (prev + 1) % casesData.length;
          const cardWidth = sliderRef.current.offsetWidth * 0.85; // karta kengligi
          sliderRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth',
          });
          return nextIndex;
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [selectedProduct, casesData.length]);

  const handleScroll = () => {
    if (sliderRef.current && window.innerWidth < 768) {
      const scrollPos = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.offsetWidth * 0.85;
      const index = Math.round(scrollPos / cardWidth);
      setCurrentMobileSlide(Math.min(index, casesData.length - 1));
    }
  };

  const handleOpenModal = (item) => {
    setSelectedProduct(item);
    setActiveVariantIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const getCurrentVariant = () => {
    if (!selectedProduct) return null;
    const variant = selectedProduct.variants[activeVariantIndex];
    return {
      id: `${selectedProduct.id}-${variant.id}`,
      title: `${selectedProduct.modelName} (${variant.colorName})`,
      price: selectedProduct.price,
      image: variant.img,
      rate: selectedProduct.rate,
    };
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-8 py-8 relative">
      <h2 className="text-[#838383] text-xl font-semibold mb-6">Чехлы</h2>

      {/* 
        DESKTOP: md:grid md:grid-cols-3 (Oddiy 3 talik qator)
        MOBIL: flex overflow-x-auto (Silliq suriladigan slayder)
      */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {casesData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpenModal(item)}
            className="w-[85vw] sm:w-[340px] md:w-auto flex-shrink-0 md:flex-shrink snap-center bg-white rounded-[30px] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between cursor-pointer group hover:-translate-y-1.5"
          >
            <div className="w-full h-[280px] sm:h-[320px] flex items-center justify-center p-4 overflow-hidden">
              <img
                src={item.mainImg}
                alt={item.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
            </div>
            <h3 className="text-gray-800 text-lg font-semibold mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* FAQAT MOBILDA KO'RINADIGAN NUQTALAR (md:hidden) */}
      <div className="flex md:hidden justify-center items-center gap-2 mt-4">
        {casesData.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              if (sliderRef.current) {
                const cardWidth = sliderRef.current.offsetWidth * 0.85;
                sliderRef.current.scrollTo({
                  left: idx * cardWidth,
                  behavior: 'smooth',
                });
                setCurrentMobileSlide(idx);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentMobileSlide === idx ? 'w-6 bg-[#FFA542]' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* ================= MODAL OYNA ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          />

          <div className="relative w-full max-w-[420px] bg-white rounded-[32px] shadow-2xl p-6 z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm">Чехол</span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1 text-gray-400 hover:text-black transition-colors cursor-pointer"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Modal rasm slayderi */}
            <div className="relative bg-[#F7F7F7] rounded-[24px] p-6 flex items-center justify-center h-[280px] overflow-hidden group">
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
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md z-10 cursor-pointer"
              >
                <FiChevronLeft className="text-xl" />
              </button>

              <div className="w-full h-full flex items-center justify-center relative">
                {selectedProduct.variants.map((v, idx) => (
                  <img
                    key={v.id}
                    src={v.img}
                    alt={v.colorName}
                    className={`absolute max-h-[230px] w-auto object-contain drop-shadow-2xl transition-all duration-500 ease-in-out ${
                      idx === activeVariantIndex
                        ? 'opacity-100 scale-100 translate-x-0'
                        : 'opacity-0 scale-95 pointer-events-none ' +
                          (idx > activeVariantIndex ? 'translate-x-12' : '-translate-x-12')
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveVariantIndex((prev) =>
                    prev === selectedProduct.variants.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-md z-10 cursor-pointer"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>

            {/* Modal nuqtalari */}
            <div className="flex justify-center items-center gap-2 my-3">
              {selectedProduct.variants.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveVariantIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeVariantIndex === idx ? 'w-6 bg-[#FFA542]' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Nomi va Narxi */}
            <div className="flex items-center justify-between mt-2 mb-4">
              <h3 className="font-semibold text-gray-900 text-base">
                {selectedProduct.modelName}
              </h3>
              <div className="text-right">
                <div className="text-base font-bold text-gray-900">
                  {selectedProduct.price.toLocaleString()} ₸
                </div>
              </div>
            </div>

            {/* Ranglar */}
            <div className="mb-6 flex items-center gap-3 py-2">
              {selectedProduct.variants.map((variant, index) => {
                const isSelected = activeVariantIndex === index;
                return (
                  <div key={variant.id} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setActiveVariantIndex(index)}
                      className={`w-12 h-16 rounded-xl border-2 flex items-center justify-center p-1 transition-all duration-200 cursor-pointer ${variant.bg} ${
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
                      className={`mt-1.5 h-1 rounded-full transition-all duration-200 ${
                        isSelected ? 'w-8 bg-[#FFA542]' : 'w-0 bg-transparent'
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Pastki tugmalar */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const item = getCurrentVariant();
                  if (item && onAddToCart) {
                    onAddToCart(item, false);
                    handleCloseModal();
                  }
                }}
                className="w-12 h-12 rounded-2xl bg-[#101010] text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all cursor-pointer"
                title="В корзину"
              >
                <FiShoppingCart className="text-lg" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const item = getCurrentVariant();
                  if (item && onAddToCart) {
                    onAddToCart(item, true);
                    handleCloseModal();
                  }
                }}
                className="flex-1 h-12 rounded-2xl bg-[#101010] text-white text-sm font-semibold hover:bg-black active:scale-95 transition-all cursor-pointer"
              >
                Купить сейчас!
              </button>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl bg-[#101010] text-[#25D366] flex items-center justify-center hover:bg-black transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;