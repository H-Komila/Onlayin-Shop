import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ru: {
    translation: {
      // Nav & Umumiy
      select_model: 'Выбрать модель телефона',
      favorites: 'Избранное',
      cart: 'Корзина',
      contacts: 'Контакты',
      terms: 'Условия сервиса',
      to_main: 'На главную',
      go_catalog: 'В каталог товаров',
      
      // Seksiyalar sarlavhalari
      cases_title: 'Чехлы',
      headphones_title: 'Наушники',
      wireless_title: 'Беспроводные наушники',
      
      // Banner
      banner_acc_for: 'Аксессуары для',
      banner_cases_for: 'Чехлы и защита для',
      banner_premium_for: 'Премиум дизайн для',
      
      // Modal & Mahsulot tafsilotlari
      case_type: 'Чехол',
      desc_and_specs: 'Описание и характеристики',
      reviews: 'Отзывы',
      buy_now: 'Купить сейчас!',
      in_cart_btn: 'В корзину',
      
      // Savatcha sahifasi
      cart_title: 'Корзина',
      cart_empty: 'Корзина пуста',
      cart_empty_sub: 'Но это никогда не поздно исправить :)',
      total: 'ИТОГО',
      checkout_btn: 'Перейти к оформлению',
      
      // Buyurtmani rasmiylashtirish (Checkout)
      checkout_title: 'Оформление заказа',
      delivery_address: 'Адрес доставки',
      city: 'Город',
      street: 'Улица / Район',
      house: 'Дом / Квартира',
      phone: 'Номер телефона',
      payment_method: 'Способ оплаты',
      pay_card: 'Банковской картой',
      pay_cash: 'Наличными при получении',
      your_order: 'Ваш заказ',
      items: 'Товары',
      delivery: 'Доставка',
      to_pay: 'К оплате:',
      finish_order: 'Закончить оформление',
      
      // Buyurtma yakunlangani
      order_success_title: 'Заказ оформлен!',
      order_number_text: 'Номер вашего заказа:',
      order_success_desc: 'Спасибо за ваш заказ! Мы уже начали его сборку. В ближайшее время с вами свяжется наш менеджер для уточнения деталей доставки.',
      order_ok_btn: 'Отлично',
      
      // Xarita & Ofis
      our_office: 'Наш офис',
      office_address: 'Аксай-3а, 62ф, Алматы, Казахстан',
    },
  },
  kz: {
    translation: {
      // Nav & Umumiy
      select_model: 'Телефон моделін таңдау',
      favorites: 'Таңдаулылар',
      cart: 'Себет',
      contacts: 'Байланыстар',
      terms: 'Қызмет көрсету шарттары',
      to_main: 'Басты бетке',
      go_catalog: 'Тауарлар каталогына',
      
      // Seksiyalar sarlavhalari
      cases_title: 'Қаптар',
      headphones_title: 'Құлаққаптар',
      wireless_title: 'Сымсыз құлаққаптар',
      
      // Banner
      banner_acc_for: 'Аксессуарлар',
      banner_cases_for: 'Қаптар мен қорғаныс',
      banner_premium_for: 'Премиум дизайн',
      
      // Modal & Mahsulot tafsilotlari
      case_type: 'Қап',
      desc_and_specs: 'Сипаттамасы мен сипаттамалары',
      reviews: 'Пікірлер',
      buy_now: 'Қазір сатып алу!',
      in_cart_btn: 'Себетке салу',
      
      // Savatcha sahifasi
      cart_title: 'Себет',
      cart_empty: 'Себет бос',
      cart_empty_sub: 'Бірақ оны түзетуге ешқашан кеш емес :)',
      total: 'БАРЛЫҒЫ',
      checkout_btn: 'Тапсырысты рәсімдеу',
      
      // Buyurtmani rasmiylashtirish (Checkout)
      checkout_title: 'Тапсырысты рәсімдеу',
      delivery_address: 'Жеткізу мекенжайы',
      city: 'Қала',
      street: 'Көше / Ауданы',
      house: 'Үй / Пәтер',
      phone: 'Телефон нөмірі',
      payment_method: 'Төлем әдісі',
      pay_card: 'Банк картасымен',
      pay_cash: 'Қолма-қол ақшамен',
      your_order: 'Сіздің тапсырысыңыз',
      items: 'Тауарлар',
      delivery: 'Жеткізу',
      to_pay: 'Төлеуге:',
      finish_order: 'Тапсырысты аяқтау',
      
      // Buyurtma yakunlangani
      order_success_title: 'Тапсырыс қабылданды!',
      order_number_text: 'Тапсырысыңыздың нөмірі:',
      order_success_desc: 'Тапсырысыңызға рақмет! Біз оны жинақтауды бастадық. Жуық арада менеджеріміз хабарласады.',
      order_ok_btn: 'Жақсы',
      
      // Xarita & Ofis
      our_office: 'Біздің кеңсе',
      office_address: 'Ақсай-3а, 62ф, Алматы, Қазақстан',
    },
  },
  en: {
    translation: {
      // Nav & Umumiy
      select_model: 'Select phone model',
      favorites: 'Favorites',
      cart: 'Cart',
      contacts: 'Contacts',
      terms: 'Terms of service',
      to_main: 'Back to home',
      go_catalog: 'To product catalog',
      
      // Seksiyalar sarlavhalari
      cases_title: 'Phone Cases',
      headphones_title: 'Headphones',
      wireless_title: 'Wireless Headphones',
      
      // Banner
      banner_acc_for: 'Accessories for',
      banner_cases_for: 'Cases and protection for',
      banner_premium_for: 'Premium design for',
      
      // Modal & Mahsulot tafsilotlari
      case_type: 'Case',
      desc_and_specs: 'Description and specifications',
      reviews: 'Reviews',
      buy_now: 'Buy now!',
      in_cart_btn: 'Add to cart',
      
      // Savatcha sahifasi
      cart_title: 'Cart',
      cart_empty: 'Cart is empty',
      cart_empty_sub: 'But it is never too late to fix this :)',
      total: 'TOTAL',
      checkout_btn: 'Proceed to checkout',
      
      // Buyurtmani rasmiylashtirish (Checkout)
      checkout_title: 'Checkout',
      delivery_address: 'Delivery address',
      city: 'City',
      street: 'Street / District',
      house: 'House / Apt',
      phone: 'Phone number',
      payment_method: 'Payment method',
      pay_card: 'Credit / Debit Card',
      pay_cash: 'Cash on delivery',
      your_order: 'Your order',
      items: 'Items',
      delivery: 'Delivery',
      to_pay: 'Total to pay:',
      finish_order: 'Complete order',
      
      // Buyurtma yakunlangani
      order_success_title: 'Order placed!',
      order_number_text: 'Your order number:',
      order_success_desc: 'Thank you for your order! We have already started processing it. Our manager will contact you soon.',
      order_ok_btn: 'Great',
      
      // Xarita & Ofis
      our_office: 'Our office',
      office_address: 'Aksay-3a, 62f, Almaty, Kazakhstan',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;