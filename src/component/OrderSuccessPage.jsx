import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccessPage = ({ orderNumber, onGoHome }) => {
  return (
    <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-16 flex-1 flex items-center justify-center">
      <div className="bg-white rounded-[32px] p-8 sm:p-12 max-w-[500px] w-full text-center shadow-sm">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          <FiCheckCircle/>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
          Заказ оформлен!
        </h1>

        <p className="text-gray-500 text-sm mb-2">
          Номер вашего заказа: <span className="font-bold text-gray-900">№{orderNumber}</span>
        </p>

        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Спасибо за ваш заказ! Мы уже начали его сборку. В ближайшее время с вами свяжется наш менеджер для уточнения деталей доставки.
        </p>

        <button
          type="button"
          onClick={onGoHome}
          className="w-full py-4 bg-[#101010] text-white text-base font-semibold rounded-2xl hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
        >
          Вернуться на главную
        </button>
      </div>
    </main>
  );
};

export default OrderSuccessPage;