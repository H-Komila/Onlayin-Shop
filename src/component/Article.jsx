import React, { useState } from 'react';
import { 
  FiHeart, 
  FiShoppingCart, 
  FiChevronUp, 
  FiChevronDown, 
  FiX, 
  FiStar 
} from 'react-icons/fi';
import { FaWhatsapp, FaApple } from 'react-icons/fa';

// O'zingiz import qilgan simsiz naushnik rasmlari:
import c from './images/c.png';
import e from './images/e.png';
import f from './images/f.png';

const Article = ({ onAddToCart, onToggleFavorite, favorites = [] }) => {
  // Figma skrinshotidagi 3 ta simsiz naushnik ma'lumotlari
  const wirelessData = [
    {
      id: 'w1',
      title: 'Apple AirPods',
      price: 9527,
      currency: '₸',
      rate: 4.7,
      image: c,
      isApple: true,
      specs: [
        { label: 'Тип подключения', value: 'Беспроводное (Bluetooth 5.0)' },
        { label: 'Процессор', value: 'Apple H1' },
        { label: 'Время работы', value: 'До 5 часов (до 24 ч с кейсом)' },
        { label: 'Быстрая зарядка', value: '15 минут в кейсе дают 3 часа работы' },
        { label: 'Активация Siri', value: 'Голосом («Привет, Siri»)' },
        { label: 'Датчики', value: 'Двойные оптические датчики, акселерометр' },
        { label: 'Микрофон', value: 'Сдвоенные направленные микрофоны' },
        { label: 'Вес наушника', value: '4 г' },
      ],
    },
    {
      id: 'w2',
      title: 'GERLAX GH-04',
      price: 6527,
      currency: 'KZT',
      rate: 4.7,
      image: e,
      isApple: false,
      specs: [
        { label: 'Версия Bluetooth', value: '5.1' },
        { label: 'Шумоподавление', value: 'Активное шумоподавление (ANC)' },
        { label: 'Время работы', value: 'До 4.5 часов' },
        { label: 'Емкость аккумулятора кейса', value: '350 мАч' },
        { label: 'Дальность передачи', value: 'До 10 м' },
        { label: 'Управление', value: 'Сенсорные датчики нажатия' },
        { label: 'Влагозащита', value: 'IPX4' },
      ],
    },
    {
      id: 'w3',
      title: 'BOROFONE BO4',
      price: 7527,
      currency: 'KZT',
      rate: 4.7,
      image: f,
      isApple: false,
      specs: [
        { label: 'Тип наушников', value: 'Полноразмерные накладные' },
        { label: 'Диаметр динамиков', value: '40 мм' },
        { label: 'Время работы от батареи', value: 'До 8 часов' },
        { label: 'Время ожидания', value: '200 часов' },
        { label: 'Поддержка карт памяти', value: 'MicroSD (TF-карта)' },
        { label: 'Проводное подключение', value: 'Кабель AUX 3.5 мм в комплекте' },
        { label: 'Материал амбушюр', value: 'Мягкая экокожа с эффектом памяти' },
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isSpecsOpen, setIsSpecsOpen] = useState(true);

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  return (
    <section className="max-w-[1240px] mx-auto px-4 sm:px-8 py-6">
      {/* Figma sarlavhasi */}
      <h2 className="text-[#838383] text-xl font-semibold mb-6">
        Беспроводные наушники
      </h2>

      {/* ================= 3 TA KARTA GRID KO'RINISHIDA ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wirelessData.map((item) => {
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
                className={`absolute top-5 left-5 p-2 rounded-full transition-transform active:scale-90 z-10 cursor-pointer ${
                  fav ? 'text-red-500 bg-red-50' : 'text-gray-400 hover:text-black bg-gray-50'
                }`}
                title={fav ? "Удалить из избранного" : "В избранное"}
              >
                <FiHeart className={`text-xl ${fav ? 'fill-current' : ''}`} />
              </button>

              {/* Apple logotipi (faqat AirPods uchun) */}
              {item.isApple && (
                <span className="absolute top-6 right-6 text-xl text-black">
                  <FaApple />
                </span>
              )}

              {/* Rasm */}
              <div className="w-full h-52 flex items-center justify-center my-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              </div>

              {/* Nomi va Narxi */}
              <div className="pt-2">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-base line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="font-bold text-base text-[#FFA542] whitespace-nowrap">
                    {item.price.toLocaleString()} {item.currency}
                  </span>
                </div>

                {/* Reyting */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600 mt-2">
                  <FiStar className="text-[#FFA542] fill-[#FFA542] text-base" />
                  <span>{item.rate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= MODAL TAFSILOT OYNASI ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          />

          <div className="relative w-full max-w-[440px] bg-white rounded-[32px] shadow-2xl p-6 z-10 max-h-[92vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal sarlavhasi */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-medium">Беспроводные наушники</span>
              <div className="flex items-center gap-2">
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

            {/* Rasm konteyneri */}
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

            {/* Nomi va Narxi */}
            <div className="flex items-center justify-between mt-4 mb-4">
              <h3 className="font-semibold text-gray-900 text-lg">
                {selectedProduct.title}
              </h3>
              <div className="text-lg font-bold text-gray-900">
                {selectedProduct.price.toLocaleString()} {selectedProduct.currency}
              </div>
            </div>

            {/* Akkordeon: Xarakteristikalar */}
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

            {/* Sharhlar */}
            <div className="border-t border-b border-gray-100 py-3 flex items-center justify-between text-sm text-gray-800 font-semibold mb-6">
              <div className="flex items-center gap-3">
                <span>Отзывы</span>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-semibold">
                  <FiStar className="text-[#FFA542] fill-[#FFA542]" />
                  <span>{selectedProduct.rate}</span>
                </div>
              </div>
              <FiChevronDown className="text-lg text-gray-400" />
            </div>

            {/* Harakat tugmalari */}
            <div className="flex items-center gap-2">
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

export default Article;