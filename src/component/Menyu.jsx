import React, { useState } from 'react';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiChevronUp, 
  FiChevronDown, 
  FiX, 
  FiStar 
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import a from './images/a.png';
import b from './images/b.png';
import d from './images/d.png';

const Menyu = ({ onAddToCart, onToggleFavorite, favorites = [] }) => {
  const headphonesData = [
    {
      id: 'h1',
      title: 'Apple BYZ S852I',
      price: 2927,
      oldPrice: 3527,
      discount: '-20%',
      rate: 4.7,
      image: a,
      specs: [
        { label: 'Bluetooth', value: '5.0' },
        { label: 'Влагозащита', value: 'Да (IPX4)' },
        { label: 'Время работы', value: '5 ч' },
        { label: 'Емкость кейса', value: '450 мАч' },
        { label: 'Разъем наушников', value: 'Lightning' },
      ],
    },
    {
      id: 'h2',
      title: 'Apple EarPods (Lightning)',
      price: 2327,
      oldPrice: null,
      discount: null,
      rate: 4.5,
      image: b,
      specs: [
        { label: 'Тип подключения', value: 'Проводное' },
        { label: 'Разъем подключения', value: 'Apple Lightning' },
        { label: 'Микрофон', value: 'Встроенный в провод' },
      ],
    },
    {
      id: 'h3',
      title: 'Apple EarPods Box (3.5 mm)',
      price: 2327,
      oldPrice: null,
      discount: null,
      rate: 4.5,
      image: d,
      specs: [
        { label: 'Разъем', value: '3.5 мм (mini-jack)' },
        { label: 'Кейс', value: 'Фирменный пластиковый бокс' },
        { label: 'Микрофон', value: 'Есть' },
      ],
    },
    {
      id: 'h4',
      title: 'Apple BYZ S852I Pro',
      price: 2927,
      oldPrice: 3527,
      discount: '-20%',
      rate: 4.7,
      image: a,
      specs: [
        { label: 'Bluetooth', value: '5.2' },
        { label: 'Автономность', value: 'До 6 часов' },
        { label: 'Кейс', value: '500 мАч' },
      ],
    },
    {
      id: 'h5',
      title: 'Apple EarPods Stereo',
      price: 2327,
      oldPrice: null,
      discount: null,
      rate: 4.5,
      image: b,
      specs: [
        { label: 'Разъем', value: 'Apple Lightning' },
        { label: 'Качество звука', value: 'Hi-Fi Stereo' },
      ],
    },
    {
      id: 'h6',
      title: 'Apple EarPods Storage Box',
      price: 2327,
      oldPrice: null,
      discount: null,
      rate: 4.5,
      image: d,
      specs: [
        { label: 'Штекер', value: '3.5 мм прямой' },
        { label: 'Кейс', value: 'Защитный футляр' },
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-8 py-6">
      <h2 className="text-[#838383] text-xl font-semibold mb-6">Наушники</h2>

      {/* Naushniklar ro'yxati */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {headphonesData.map((item) => {
          const fav = isFavorite(item.id);
          return (
            <div
              key={item.id}
              onClick={() => {
                setSelectedProduct(item);
                setIsSpecsOpen(true);
              }}
              className="bg-white rounded-[30px] p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 relative select-none"
            >
              {/* Sevimlilar (Yurakcha) tugmasi */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onToggleFavorite) onToggleFavorite(item);
                }}
                className={`absolute top-5 right-5 p-2 rounded-full transition-transform active:scale-90 z-10 cursor-pointer ${
                  fav ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-black bg-gray-50'
                }`}
                title={fav ? "Удалить из избранного" : "В избранное"}
              >
                <FiHeart className={`text-xl ${fav ? 'fill-current' : ''}`} />
              </button>

              <div className="w-full h-48 flex items-center justify-center my-2 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>

              <div className="pt-2">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-base line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="text-right">
                    <span className="font-bold text-base text-[#FFA542] whitespace-nowrap">
                      {item.price.toLocaleString()} ₸
                    </span>
                    {item.oldPrice && (
                      <div className="text-[11px] text-gray-400 line-through">
                        {item.oldPrice.toLocaleString()} ₸
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                    <FiStar className="text-[#FFA542] fill-[#FFA542] text-base" />
                    <span>{item.rate}</span>
                  </div>

                  {item.discount && (
                    <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Oyna */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl p-6 z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-medium">Наушники</span>
              <div className="flex items-center gap-2">
                {/* Modal ichidagi yurakcha */}
                <button
                  type="button"
                  onClick={() => onToggleFavorite && onToggleFavorite(selectedProduct)}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    isFavorite(selectedProduct.id) ? 'text-red-500' : 'text-gray-400 hover:text-black'
                  }`}
                  title={isFavorite(selectedProduct.id) ? "Удалить из избранного" : "В избранное"}
                >
                  <FiHeart className={`text-2xl ${isFavorite(selectedProduct.id) ? 'fill-current' : ''}`} />
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

            <div className="relative bg-[#F7F7F7] rounded-[24px] p-6 flex items-center justify-center h-[260px] overflow-hidden">
              <span className="absolute top-4 left-4 text-xs font-bold text-white bg-[#FFA542] px-2.5 py-1 rounded-lg">
                LOOK
              </span>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="max-h-[200px] w-auto object-contain drop-shadow-md"
              />
            </div>

            <div className="flex items-center justify-between mt-4 mb-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                {selectedProduct.title}
              </h3>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900">
                  {selectedProduct.price.toLocaleString()} ₸
                </div>
              </div>
            </div>

            {/* Xarakteristika */}
            <div className="border-t border-gray-100 py-3">
              <button
                type="button"
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900 cursor-pointer"
              >
                <span>Описание и характеристики</span>
                {isSpecsOpen ? <FiChevronUp className="text-lg" /> : <FiChevronDown className="text-lg" />}
              </button>

              {isSpecsOpen && (
                <div className="mt-3 text-xs text-gray-600 space-y-2 leading-relaxed bg-[#FAFAFA] p-3.5 rounded-2xl border border-gray-100">
                  {selectedProduct.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-start border-b border-gray-100 pb-1.5 last:border-0">
                      <span className="text-gray-400 font-medium shrink-0">{spec.label}:</span>
                      <span className="text-gray-800 text-right font-medium ml-3">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pastki tugmalar: Savatga qo'shish & Buyurtma berish */}
            <div className="flex items-center gap-2 mt-4">
              {/* Savatga qo'shish */}
              <button
                type="button"
                onClick={() => {
                  if (onAddToCart) {
                    onAddToCart(selectedProduct, false);
                    setSelectedProduct(null);
                  }
                }}
                className="w-12 h-12 rounded-2xl bg-[#101010] text-white flex items-center justify-center hover:bg-black active:scale-95 transition-all cursor-pointer"
                title="В корзину"
              >
                <FiShoppingCart className="text-lg" />
              </button>

              {/* Savatga qo'shadi va savat sahifasini ochadi */}
              <button
                type="button"
                onClick={() => {
                  if (onAddToCart) {
                    onAddToCart(selectedProduct, true);
                    setSelectedProduct(null);
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
                title="WhatsApp"
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

export default Menyu;