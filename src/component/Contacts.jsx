import React from 'react';
import { FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaTelegramPlane, FaVk } from 'react-icons/fa';

const Contacts = ({ onGoHome }) => {
  return (
    <main className="max-w-[760px] mx-auto px-4 sm:px-8 w-full py-8 flex-1">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center sm:text-left">
        Контакты
      </h1>

      <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] flex flex-col gap-8">
        
        {/* ================= 1. TEPADAGI BLOK: XARITA VA MANZIL ================= */}
        <div className="w-full bg-[#F7F7F7] rounded-[24px] p-5 sm:p-6 flex flex-col">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">
            Наш офис
          </h2>

          {/* Xarita */}
          <div className="w-full h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-sm bg-gray-200">
            <iframe
              title="Office Map"
              src="https://maps.google.com/maps?q=Almaty%20Aksay-3a&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Xarita ostidagi Manzil va Telefon */}
          <div className="mt-5 pt-4 border-t border-gray-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-gray-800 text-sm font-medium">
              <FiMapPin className="text-xl text-[#FFA542] shrink-0" />
              <span>Аксай-3а, 62ф, Алматы, Казахстан</span>
            </div>

            <a
              href="tel:+77777777777"
              className="flex items-center gap-2 text-base font-bold text-gray-900 hover:text-[#FFA542] transition-colors w-fit"
            >
              <FiPhone className="text-lg text-[#FFA542]" />
              <span>+7 777 777 77 77</span>
            </a>
          </div>
        </div>

        {/* ================= 2. PASTKI BLOK: ALOQA TUGMALARI (USTMA-UST) ================= */}
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/77777777777"
              target="_blank"
              rel="noreferrer"
              className="h-[105px] bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-[#25D366]/40 rounded-2xl shadow-none hover:shadow-md flex flex-col items-center justify-center transition-all group active:scale-95 cursor-pointer"
            >
              <FaWhatsapp className="text-3xl text-[#25D366] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-gray-700 mt-2">WhatsApp</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="h-[105px] bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-[#E1306C]/40 rounded-2xl shadow-none hover:shadow-md flex flex-col items-center justify-center transition-all group active:scale-95 cursor-pointer"
            >
              <FaInstagram className="text-3xl text-[#E1306C] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-gray-700 mt-2">Instagram</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="h-[105px] bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-[#0088cc]/40 rounded-2xl shadow-none hover:shadow-md flex flex-col items-center justify-center transition-all group active:scale-95 cursor-pointer"
            >
              <FaTelegramPlane className="text-3xl text-[#0088cc] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-gray-700 mt-2">Telegram</span>
            </a>

            {/* VKontakte */}
            <a
              href="https://vk.com"
              target="_blank"
              rel="noreferrer"
              className="h-[105px] bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-[#4c75a3]/40 rounded-2xl shadow-none hover:shadow-md flex flex-col items-center justify-center transition-all group active:scale-95 cursor-pointer"
            >
              <FaVk className="text-3xl text-[#4c75a3] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold text-gray-700 mt-2">VKontakte</span>
            </a>
          </div>

          {/* Bosh sahifaga qaytish tugmasi */}
          <button
            type="button"
            onClick={onGoHome}
            className="w-full py-4 mt-2 bg-[#101010] text-white text-sm font-semibold rounded-2xl shadow-md hover:bg-black active:scale-95 transition-all cursor-pointer"
          >
            На главную
          </button>
        </div>

      </div>
    </main>
  );
};

export default Contacts;