import React from 'react';

const Terms = () => {
  const sections = [
    {
      title: '1. Условия использования платформы',
      text: 'Используя наш сервис, вы подтверждаете свое согласие с правилами оформления заказов, политикой конфиденциальности и условиями предоставления гарантийного обслуживания.',
    },
    {
      title: '2. Оплата и безопасность транзакций',
      text: 'Все платежные операции осуществляются по защищенным протоколам. Мы принимаем оплату онлайн банковскими картами, а также наличными при получении товара курьером.',
    },
    {
      title: '3. Доставка и получение товара',
      text: 'Сроки доставки зависят от региона проживания. Доставка по городу осуществляется в течение 24 часов с момента подтверждения заказа оператором.',
    },
    {
      title: '4. Возврат и обмен',
      text: 'Возврат товара надлежащего качества возможен в течение 14 дней с момента покупки при сохранении товарного вида, пломб и фабричной упаковки.',
    },
  ];

  return (
    <main className="max-w-[1240px] mx-auto px-4 sm:px-8 w-full py-8 flex-1">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Условия сервиса
      </h1>

      <div className="bg-white rounded-[30px] p-8 shadow-sm space-y-6">
        {sections.map((item, index) => (
          <div key={index} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Terms;