import React from 'react';
import { FiHeart, FiStar } from 'react-icons/fi';

const Favorites = ({ favorites = [], onRemoveFavorite, onAddToCart, onGoToCatalog }) => {
  return (
    <div className="w-full flex flex-col justify-between pt-4">
      <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Избранное
        </h1>

        {favorites.length === 0 ? (
          /* ================= BO'SH SEVIMLILAR SAHIFASI ================= */
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-gray-300">
              <FiHeart className="text-5xl stroke-[1.5]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
              В избранном пока ничего нет
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-normal mb-8">
              Вы можете добавить понравившиеся товары из каталога
            </p>
            <button
              type="button"
              onClick={onGoToCatalog}
              className="w-full sm:w-[320px] py-4 bg-[#101010] text-white text-base font-medium rounded-[20px] shadow-lg hover:bg-black/90 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              В каталог товаров
            </button>
          </div>
        ) : (
          /* ================= SEVIMLI MAHSULOTLAR RO'YXATI ================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[30px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Sevimlilardan o'chirish tugmasi */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <h3 className="font-semibold text-base text-gray-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onRemoveFavorite(item.id)}
                    title="Удалить из избранного"
                    className="p-2 text-red-500 hover:text-red-600 bg-red-50 rounded-full transition-transform active:scale-90 shrink-0 cursor-pointer"
                  >
                    <FiHeart className="text-xl fill-current" />
                  </button>
                </div>

                {/* Mahsulot ma'lumotlari: Narx, reyting va xarid */}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg text-[#FFA542]">
                      {item.price.toLocaleString()} ₽
                    </span>

                    {/* Reyting */}
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-gray-600">
                      <FiStar className="text-[#FFA542] fill-[#FFA542] text-base" />
                      <span>{item.rate}</span>
                    </div>
                  </div>

                  {/* Savatga qo'shish */}
                  <button
                    type="button"
                    onClick={() => onAddToCart(item)}
                    className="w-full py-2.5 bg-[#101010] text-white text-sm font-medium rounded-xl hover:bg-[#FFA542] active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    Купить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Favorites;