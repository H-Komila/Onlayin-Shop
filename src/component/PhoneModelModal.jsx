import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

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

const PhoneModelModal = ({ isOpen, onClose, selectedModel, onSelectModel }) => {
  const [openBrand, setOpenBrand] = useState('Apple');

  if (!isOpen) return null;

  return (
    <>
      {/* Orqa fon (Overlay) */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal oynasi */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-64 z-50 w-[300px] sm:w-[330px] bg-white rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 overflow-hidden max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        <div className="overflow-y-auto pr-1 select-none space-y-3 custom-scrollbar">
          {brandData.map((brand) => {
            const isExpanded = openBrand === brand.name;
            return (
              <div key={brand.name} className="border-b border-gray-50 pb-1">
                {/* Brend nomi sarlavhasi */}
                <button
                  type="button"
                  onClick={() => setOpenBrand(isExpanded ? null : brand.name)}
                  className="w-full flex items-center justify-between py-2 text-left font-medium text-gray-900 hover:text-black transition-colors"
                >
                  <span className="text-[17px] tracking-wide">{brand.name}</span>
                  {isExpanded ? (
                    <FiChevronUp className="text-xl text-gray-700" />
                  ) : (
                    <FiChevronDown className="text-xl text-gray-700" />
                  )}
                </button>

                {/* Brend ichidagi modellar */}
                {isExpanded && brand.models && (
                  <div className="pl-4 py-2 flex flex-col gap-2.5 transition-all">
                    {brand.models.map((mod) => {
                      const isSelected = selectedModel === mod;
                      return (
                        <button
                          key={mod}
                          onClick={() => {
                            onSelectModel(mod);
                            onClose();
                          }}
                          className={`text-left text-[15px] font-normal transition-colors duration-150 ${
                            isSelected
                              ? 'text-[#FFA542] font-medium'
                              : 'text-gray-700 hover:text-black'
                          }`}
                        >
                          {mod}
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
  );
};

export default PhoneModelModal;