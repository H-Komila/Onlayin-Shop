import React, { useState } from 'react';
import { FiCreditCard, FiDollarSign } from 'react-icons/fi';

const Checkout = ({ cart, onOrderComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    city: 'г. Алматы',
    street: '',
    house: '',
    phone: '',
  });

  const deliveryCost = 500;
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = itemsTotal + deliveryCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderComplete();
  };

  return (
    <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-8 flex-1">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Оформление заказа
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Chap qism: Manzil va To'lov usuli */}
        <div className="flex-1 w-full space-y-6">
          {/* Manzil bloki */}
          <div className="bg-white rounded-[30px] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Адрес доставки
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Город</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#F5F5F7] rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FFA542]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Улица / Район</label>
                <input
                  type="text"
                  required
                  placeholder="ул. Абая"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full bg-[#F5F5F7] rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FFA542]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Дом / Квартира</label>
                <input
                  type="text"
                  required
                  placeholder="дом 12, кв. 4"
                  value={formData.house}
                  onChange={(e) => setFormData({ ...formData, house: e.target.value })}
                  className="w-full bg-[#F5F5F7] rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FFA542]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Номер телефона</label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F5F5F7] rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#FFA542]"
                />
              </div>
            </div>
          </div>

          {/* To'lov usuli */}
          <div className="bg-white rounded-[30px] p-6 sm:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Способ оплаты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-[#FFA542] bg-[#FFA542]/5'
                    : 'border-transparent bg-[#F5F5F7]'
                }`}
              >
                <FiCreditCard className="text-2xl text-[#FFA542]"/>
                <span className="text-sm font-semibold text-gray-800">Банковской картой</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cash')}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                  paymentMethod === 'cash'
                    ? 'border-[#FFA542] bg-[#FFA542]/5'
                    : 'border-transparent bg-[#F5F5F7]'
                }`}
              >
                <FiDollarSign className="text-2xl text-[#FFA542]"/>
                <span className="text-sm font-semibold text-gray-800">Наличными при получении</span>
              </button>
            </div>
          </div>
        </div>

        {/* O'ng qism: Chek va Tasdiqlash */}
        <div className="w-full lg:w-[350px] bg-white rounded-[30px] p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Ваш заказ</h2>
          
          <div className="space-y-3 text-sm text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Товары ({cart.length})</span>
              <span className="font-semibold text-gray-900">{itemsTotal.toLocaleString()} ₸</span>
            </div>
            <div className="flex justify-between">
              <span>Доставка</span>
              <span className="font-semibold text-gray-900">{deliveryCost.toLocaleString()} ₸</span>
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
              <span className="font-bold text-gray-900 text-base">К оплате:</span>
              <span className="font-extrabold text-gray-900 text-xl">{finalTotal.toLocaleString()} ₸</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#101010] text-white text-base font-semibold rounded-[20px] shadow-lg hover:bg-black/90 active:scale-95 transition-all cursor-pointer"
          >
            Закончить оформление
          </button>
        </div>
      </form>
    </main>
  );
};

export default Checkout;