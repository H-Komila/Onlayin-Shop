import React from 'react';

const EmptyCart = ({ onGoToCatalog }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center flex-1 py-12 px-4">
      <div className="flex flex-col items-center text-center max-w-[420px] w-full">
        {/* Sepet Çizimi (Figma İllüstrasyonu) */}
        <div className="relative mb-6">
          <svg
            className="w-56 h-40"
            viewBox="0 0 240 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="205" cy="22" r="5" fill="#FFA542" />
            <path d="M196 22H192" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M145 22L192 22L176 112H72L50 22H24"
              stroke="#101010"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line x1="90" y1="22" x2="100" y2="112" stroke="#D1D5DB" strokeWidth="1.5" />
            <line x1="126" y1="22" x2="128" y2="112" stroke="#D1D5DB" strokeWidth="1.5" />
            <line x1="162" y1="22" x2="156" y2="112" stroke="#D1D5DB" strokeWidth="1.5" />
            <line x1="56" y1="52" x2="186" y2="52" stroke="#D1D5DB" strokeWidth="1.5" />
            <line x1="64" y1="82" x2="181" y2="82" stroke="#D1D5DB" strokeWidth="1.5" />
            <line x1="72" y1="124" x2="160" y2="124" stroke="#101010" strokeWidth="2" />
            <circle cx="82" cy="132" r="7" fill="#101010" />
            <circle cx="150" cy="132" r="7" fill="#101010" />
            <path
              d="M48 116C36 122 30 134 38 140C48 142 56 132 58 124C58 124 54 116 48 116Z"
              fill="#FFA542"
            />
            <path
              d="M56 126C62 130 65 137 62 142C56 145 50 142 49 135"
              fill="#FFBF78"
            />
          </svg>
        </div>

        {/* Başlık ve Açıklama Metni */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
          Корзина пуста
        </h2>
        <p className="text-gray-500 text-sm sm:text-base font-normal mb-8">
          Но это никогда не поздно исправить :)
        </p>

        {/* Kataloğa Dönüş Butonu */}
        <button
          type="button"
          onClick={onGoToCatalog}
          className="w-full sm:w-[360px] py-4 bg-[#101010] text-white text-base font-medium rounded-[20px] shadow-lg hover:bg-black/90 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          В каталог товаров
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;