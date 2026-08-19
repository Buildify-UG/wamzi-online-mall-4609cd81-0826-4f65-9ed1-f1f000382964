import { Heart, ShoppingCart, Truck, Star, MessageCircle } from 'lucide-react';

const Index = () => {
  const weeklySchedule = [
    {
      day: 'Jumatatu',
      emoji: '💄',
      title: 'BEAUTY DAY',
      subtitle: 'WAMZI COSMETICS MBEYA',
      icon: '✨',
      items: ['Vipodozi', 'Skincare', 'Haircare', 'Perfumes'],
      color: 'from-pink-400 to-rose-400'
    },
    {
      day: 'Jumanne',
      emoji: '👗',
      title: 'FASHION DAY',
      subtitle: 'THE BLESSED CHOICE BRAND',
      icon: '🔥',
      items: ['Nguo', 'Viatu', 'Bags', 'Accessories'],
      color: 'from-purple-400 to-indigo-400'
    },
    {
      day: 'Jumatano',
      emoji: '🛍️',
      title: 'WAMZI MARKET DAY',
      subtitle: 'Categories mbalimbali',
      icon: '🌟',
      items: ['Beauty', 'Fashion', 'Electronics', 'Home', 'More'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      day: 'Alhamisi',
      emoji: '💇',
      title: 'SALON & BUSINESS DAY',
      subtitle: 'Salon & Barber Supplies',
      icon: '⚡',
      items: ['Vifaa vya Salon', 'Vifaa vya Barber', 'Business Tools', 'Beauty Equipment'],
      color: 'from-orange-400 to-amber-400'
    },
    {
      day: 'Ijumaa',
      emoji: '🌾',
      title: 'FARM & SNACKS DAY',
      subtitle: 'Natural Products & Snacks',
      icon: '🥜',
      items: ['Korosho', 'Asali', 'Karanga', 'Kahawa', 'Snacks'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      day: 'Jumamosi',
      emoji: '🔥',
      title: 'WAMZI DEALS',
      subtitle: 'Offers & Discounts',
      icon: '💰',
      items: ['Offers', 'Discounts', 'Combo Deals', 'Nunua zaidi, Pata zaidi!'],
      color: 'from-red-400 to-pink-400'
    },
    {
      day: 'Jumapili',
      emoji: '❤️',
      title: 'CUSTOMER APPRECIATION',
      subtitle: 'Reviews & Testimonials',
      icon: '🤝',
      items: ['Reviews', 'Testimonials', 'Shukrani', 'Tunasikiliza mahitaji yako'],
      color: 'from-red-500 to-rose-500'
    }
  ];

  const features = [
    { icon: <Truck className="w-6 h-6" />, title: 'Free Delivery', desc: 'Tunafikisha bidhaa popote ulipo' },
    { icon: <Star className="w-6 h-6" />, title: 'Original Products', desc: 'Guaranteed authentic items' },
    { icon: <Heart className="w-6 h-6" />, title: 'Trusted Service', desc: 'Your satisfaction is our priority' },
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Customer Support', desc: 'Available on WhatsApp daily' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">🛍️ WAMZI ONLINE MALL</h1>
          <p className="text-lg md:text-xl opacity-90">Original Products, Trusted Service</p>
          <p className="text-sm mt-4 opacity-80">Kila siku: Product • Elimu • Offer • Customer Review</p>
        </div>
      </header>

      {/* Features Banner */}
      <section className="bg-white py-8 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-orange-500 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">📅 Ratiba ya Wiki ya Mitandao ya Kijamii</h2>
            <p className="text-muted-foreground">Kila siku na tema mpya, bidhaa mpya, na offers za kipekee</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weeklySchedule.map((schedule, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${schedule.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm font-semibold opacity-90">{schedule.day}</p>
                    <h3 className="text-2xl font-bold">{schedule.title}</h3>
                  </div>
                  <span className="text-3xl">{schedule.emoji}</span>
                </div>
                
                <p className="text-sm opacity-90 mb-4 font-medium">{schedule.subtitle}</p>
                
                <div className="space-y-2">
                  {schedule.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-75"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white border-opacity-30 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-sm font-semibold">Shop Now</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp & Communication */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">📲 Stay Connected</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow our WhatsApp Status & Group for daily updates, educational content, special offers, and customer reviews
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            📱 Join WhatsApp Community
          </button>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">💬 Customer Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amina', text: 'Bidhaa za kweli, huduma nzuri sana!' },
              { name: 'Mohamed', text: 'Mabilis na salama. Nakipenda sana!' },
              { name: 'Fatima', text: 'Wamzi ni mahali pa kuaminika. Asante!' }
            ].map((review, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.text}"</p>
                <p className="font-semibold text-foreground">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-lg opacity-90 mb-8">Discover original products with trusted service. Shop with confidence!</p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Start Shopping Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-bold mb-2">WAMZI ONLINE MALL</p>
          <p className="text-slate-400 mb-4">Original Products, Trusted Service</p>
          <div className="flex justify-center gap-4 text-sm text-slate-400 mb-6">
            <span>#WamziOnlineMall</span>
            <span>#OriginalProducts</span>
            <span>#TrustedService</span>
            <span>#ShopWithConfidence</span>
          </div>
          <p className="text-xs text-slate-500">© 2024 WAMZI Online Mall. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
