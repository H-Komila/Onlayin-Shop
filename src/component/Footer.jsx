import React, { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const Footer = ({ onGoHome, onOpenCart, onOpenFavorites, onOpenTerms, onOpenContacts }) => {
  const [selectedLang, setSelectedLang] = useState('Рус');
  const languages = ['Каз', 'Рус', 'Eng'];

  return (
    <footer className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full pb-8">
      <div className="bg-white rounded-[30px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] px-8 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Logotip */}
        <div 
          onClick={onGoHome}
          className="text-2xl font-extrabold tracking-wider text-black cursor-pointer select-none"
        >
          QPICK
        </div>

        {/* Sahifalar */}
        <div className="flex flex-col gap-2.5 text-center md:text-left text-sm font-medium text-gray-800">
          <button
            type="button"
            onClick={onOpenFavorites}
            className="hover:text-[#FFA542] transition-colors text-left cursor-pointer"
          >
            Избранное
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="hover:text-[#FFA542] transition-colors text-left cursor-pointer"
          >
            Корзина
          </button>
          <button
            type="button"
            onClick={onOpenContacts}
            className="hover:text-[#FFA542] transition-colors text-left cursor-pointer"
          >
            Контакты
          </button>
        </div>

        {/* Shartlar va Til */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <button 
            type="button" 
            onClick={onOpenTerms}
            className="text-sm font-medium text-gray-800 hover:text-[#FFA542] transition-colors text-left cursor-pointer"
          >
            Условия сервиса
          </button>

          <div className="flex items-center gap-3">
            <FiGlobe className="text-gray-500 text-base"/>
            <div className="flex items-center gap-2 text-sm font-semibold">
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setSelectedLang(lang)}
                  className={`transition-colors cursor-pointer ${
                    selectedLang === lang
                      ? 'text-[#FFA542]'
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex items-center gap-4 text-2xl text-black">
          <a href="https://vk.com" target="_blank" rel="noreferrer" className="hover:text-[#FFA542] transition-colors">
            <FaVk/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FFA542] transition-colors">
            <FaInstagram/>
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-[#FFA542] transition-colors">
            <FaTelegramPlane/>
          </a>
          <a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:text-[#FFA542] transition-colors">
            <FaWhatsapp/>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;