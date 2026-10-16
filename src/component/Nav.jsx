import React, { useState, useEffect } from 'react';
import {
    FiSmartphone,
    FiChevronDown,
    FiChevronUp,
    FiHeart,
    FiShoppingCart,
    FiMenu,
    FiX
} from 'react-icons/fi';

import logo from './images/logo.png';
import tel from './images/tel.png';
import tel1 from './images/tel1.png';
import tel2 from './images/tel2.png';

const brandData = [
    {
        name: 'Apple',
        models: [
            'iPhone 12',
            'iPhone 12 Max',
            'iPhone 13',
            'iPhone 13 Max',
            'iPhone 13 Pro Max',
            'iPhone 14',
        ],
    },
    { name: 'INOI', models: ['INOI A62', 'INOI 2021'] },
    { name: 'Nokia', models: ['Nokia G21', 'Nokia C30'] },
    { name: 'Oppo', models: ['Oppo Reno 8', 'Oppo A78'] },
    { name: 'Xiaomi', models: ['Redmi Note 12', 'Xiaomi 13 Pro'] },
    { name: 'Realme', models: ['Realme 10', 'Realme GT Neo 5'] },
    { name: 'Samsung', models: ['Galaxy S23', 'Galaxy A54'] },
    { name: 'Sony', models: ['Xperia 1 V', 'Xperia 5 IV'] },
    { name: 'Vivo', models: ['Vivo V27', 'Vivo Y35'] },
];

const Nav = ({
    onOpenCart,
    onOpenFavorites,
    onGoHome,
    cartCount = 0,
    favoritesCount = 0,
    showBanner = true
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expandedBrand, setExpandedBrand] = useState('Apple');
    const [selectedPhone, setSelectedPhone] = useState('iPhone 13 Pro Max');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const slides = [
        {
            id: 1,
            title: 'Аксессуары для',
            model: 'Iphone 13 Pro Max',
            image: tel,
        },
        {
            id: 2,
            title: 'Чехлы и защита для',
            model: 'Iphone 14 Pro',
            image: tel1 || tel,
        },
        {
            id: 3,
            title: 'Премиум дизайн для',
            model: 'Iphone 15 Pro Max',
            image: tel2 || tel,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!showBanner) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length, showBanner]);

    return (
        <header className="w-full bg-[#EAEAEA] relative">
            {/* ===================== NAVBAR ===================== */}
            <nav className="max-w-[1240px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between relative z-30">

                {/* Chap tomon: Logo va Model tanlash */}
                <div className="flex items-center gap-8 md:gap-14">
                    <button onClick={onGoHome} className="flex items-center cursor-pointer">
                        {logo ? (
                            <img src={logo} alt="QPICK" className="h-7 w-auto object-contain" />
                        ) : (
                            <span className="text-2xl font-black tracking-wider text-black">QPICK</span>
                        )}
                    </button>

                    {/* Model tanlash tugmasi (Desktop) */}
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-black font-medium transition-colors cursor-pointer group py-1"
                    >
                        <FiSmartphone className="text-lg text-gray-500 group-hover:text-black transition-colors" />
                        <span>Выбрать модель телефона</span>
                        <FiChevronDown
                            className={`text-base text-gray-600 transition-transform duration-300 ${isModalOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                </div>

                {/* O'ng tomon: Sevimlilar va Savat */}
                <div className="flex items-center gap-6">
                    <button
                        type="button"
                        onClick={onOpenFavorites}
                        className="relative p-1 text-gray-700 hover:text-black transition-transform duration-200 hover:scale-110 cursor-pointer"
                        aria-label="Избранное"
                    >
                        <FiHeart className="text-2xl stroke-[1.8]" />
                        <span className="absolute -top-1 -right-2 bg-[#FFA542] text-white text-[11px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-sm">
                            {favoritesCount}
                        </span>
                    </button>

                    {/* Savat ikonka tugmasi */}
                    <button
                        type="button"
                        onClick={onOpenCart}
                        className="relative p-1 text-gray-700 hover:text-black transition-transform duration-200 hover:scale-110 cursor-pointer"
                        aria-label="Корзина"
                    >
                        <FiShoppingCart className="text-2xl stroke-[1.8]" />
                        <span className="absolute -top-1 -right-2 bg-[#FFA542] text-white text-[11px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center shadow-sm">
                            {cartCount}
                        </span>
                    </button>

                    {/* Mobil menyu tugmasi */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-800 hover:text-black p-1 text-2xl"
                    >
                        {mobileMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobil menyu dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white mx-4 mb-4 p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-3 z-30 relative">
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-between text-sm font-semibold text-gray-800 p-2 bg-gray-50 rounded-xl"
                    >
                        <div className="flex items-center gap-2">
                            <FiSmartphone className="text-[#FFA542]" />
                            <span>{selectedPhone || 'Выбрать модель телефона'}</span>
                        </div>
                        <FiChevronDown />
                    </button>
                </div>
            )}

            {/* ===================== MODAL: MODELNI TANLASH ===================== */}
            {isModalOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-transparent z-40"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <div className="absolute top-[65px] left-4 md:left-[180px] z-50 w-[290px] sm:w-[320px] bg-white rounded-[30px] shadow-[0_20px_45px_rgba(0,0,0,0.12)] p-6 max-h-[480px] overflow-y-auto select-none transition-all">
                        <span className="text-xs text-gray-400 block mb-2 font-medium">Выбрать модель телефона</span>
                        <div className="space-y-1">
                            {brandData.map((brand) => {
                                const isExpanded = expandedBrand === brand.name;
                                return (
                                    <div key={brand.name} className="border-b border-gray-100 last:border-0 pb-1">
                                        <button
                                            type="button"
                                            onClick={() => setExpandedBrand(isExpanded ? null : brand.name)}
                                            className="w-full flex items-center justify-between py-2 text-left text-[17px] font-medium text-gray-900 hover:text-black transition-colors"
                                        >
                                            <span>{brand.name}</span>
                                            {isExpanded ? (
                                                <FiChevronUp className="text-gray-600 text-lg" />
                                            ) : (
                                                <FiChevronDown className="text-gray-600 text-lg" />
                                            )}
                                        </button>

                                        {isExpanded && brand.models && (
                                            <div className="pl-4 pb-2 pt-1 flex flex-col gap-2">
                                                {brand.models.map((model) => {
                                                    const isSelected = selectedPhone === model;
                                                    return (
                                                        <button
                                                            key={model}
                                                            onClick={() => {
                                                                setSelectedPhone(model);
                                                                setIsModalOpen(false);
                                                            }}
                                                            className={`text-left text-[15px] transition-colors ${isSelected
                                                                    ? 'text-[#FFA542] font-semibold'
                                                                    : 'text-gray-700 hover:text-black'
                                                                }`}
                                                        >
                                                            {model}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}

            {/* ===================== SLAYDER BANNER ===================== */}
            {showBanner && (
                <section className="max-w-[1240px] mx-auto px-4 sm:px-8 pt-2 pb-10">
                    <div className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] bg-[#101010] rounded-[30px] shadow-2xl overflow-hidden flex items-center">
                        {slides.map((slide, index) => {
                            const isActive = index === currentSlide;
                            return (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 w-full h-full flex items-center justify-between px-6 sm:px-12 md:px-16 transition-all duration-700 ease-in-out ${isActive
                                            ? 'opacity-100 translate-x-0 pointer-events-auto'
                                            : 'opacity-0 translate-x-10 pointer-events-none'
                                        }`}
                                >
                                    <div className="z-10 max-w-[55%]">
                                        <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                                            {slide.title} <br />
                                            <span className="font-bold text-white">{slide.model}</span>
                                        </h2>
                                    </div>

                                    <div className="relative flex-1 flex justify-end items-center h-full">
                                        <img
                                            src={slide.image}
                                            alt={slide.model}
                                            className={`h-[90%] sm:h-[105%] md:h-[115%] w-auto object-contain drop-shadow-[0_25px_30px_rgba(0,0,0,0.7)] transition-all duration-700 delay-100 ${isActive ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
                                                }`}
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentSlide(idx)}
                                    aria-label={`Слайд ${idx + 1}`}
                                    className={`transition-all duration-300 rounded-full ${currentSlide === idx
                                            ? 'w-7 h-2 bg-white'
                                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </header>
    );
};

export default Nav;