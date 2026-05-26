export default function KFCSaaSWebsite() {
  const featuredMeals = [
    {
      title: 'Hot & Crispy Bucket',
      price: '$24.99',
      image:
        'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Zinger Burger Combo',
      price: '$12.99',
      image:
        'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Family Feast',
      price: '$39.99',
      image:
        'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  const merchItems = [
    {
      title: 'KFC Hoodie',
      image:
        'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'KFC Cap',
      image:
        'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      title: 'Collector Mug',
      image:
        'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="text-3xl font-extrabold tracking-widest text-red-600">
              KFC
            </div>

            <div className="hidden md:flex items-center gap-8 text-lg font-medium">
              <a href="#delivery" className="hover:text-red-500 transition">
                🛵 Delivery
              </a>

              <a href="#pickup" className="hover:text-red-500 transition">
                📦 Pickup
              </a>

              <a href="#merch" className="hover:text-red-500 transition">
                👕 Merch
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png"
              alt="KFC Logo"
              className="w-12 h-12 object-contain bg-white rounded-full p-1"
            />

            <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl font-bold text-white shadow-lg shadow-red-600/30">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=2000"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Hero"
        />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            Crispy.
            <span className="text-red-600"> Spicy.</span>
            Legendary.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            Premium fast-food experience with lightning-fast delivery,
            luxurious pickup service, and exclusive KFC merchandise.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-red-600/40">
              Order Now
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl text-lg font-bold">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section
        id="delivery"
        className="py-28 px-6 bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-5 text-red-600">
              🛵 Fast Delivery
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Hot food delivered directly to your doorstep in premium style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredMeals.map((meal, index) => (
              <div
                key={index}
                className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition shadow-2xl"
              >
                <img
                  src={meal.image}
                  alt={meal.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{meal.title}</h3>
                  <p className="text-red-500 text-xl font-bold mb-5">
                    {meal.price}
                  </p>

                  <button className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-xl font-bold text-lg">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Section */}
      <section
        id="pickup"
        className="py-28 px-6 bg-black border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-red-600 mb-8">
              📦 Premium Pickup
            </h2>

            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Skip the waiting lines with ultra-fast pickup counters designed
              for convenience and speed.
            </p>

            <div className="space-y-5">
              <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                <h3 className="text-2xl font-bold mb-2">Instant Ready Orders</h3>
                <p className="text-gray-400">
                  Get notified when your order is ready.
                </p>
              </div>

              <div className="bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
                <h3 className="text-2xl font-bold mb-2">Drive-Thru Support</h3>
                <p className="text-gray-400">
                  Pick your meal without leaving your car.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="Pickup"
              className="rounded-3xl shadow-2xl border border-red-600"
            />
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section
        id="merch"
        className="py-28 px-6 bg-gradient-to-b from-zinc-950 to-black border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-red-600 mb-5">
              👕 Official Merch
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exclusive streetwear and collectibles inspired by the KFC brand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {merchItems.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-red-600 transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-xl font-semibold">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="py-28 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto bg-zinc-950 border border-red-600 rounded-[40px] p-10 md:p-16 text-center shadow-2xl shadow-red-600/10">
          <h2 className="text-5xl font-black mb-6">
            Download The <span className="text-red-600">KFC App</span>
          </h2>

          <p className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto">
            Order food, track deliveries, earn rewards, and access exclusive
            offers directly from your phone.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-2xl text-lg font-bold">
              App Store
            </button>

            <button className="bg-white text-black hover:bg-gray-200 transition px-8 py-4 rounded-2xl text-lg font-bold">
              Google Play
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-red-600 mb-2">KFC</h2>
            <p className="text-gray-400">
              Premium fast-food SaaS-style restaurant experience.
            </p>
          </div>

          <div className="flex gap-6 text-lg text-gray-300">
            <a href="#delivery" className="hover:text-red-500 transition">
              Delivery
            </a>
            <a href="#pickup" className="hover:text-red-500 transition">
              Pickup
            </a>
            <a href="#merch" className="hover:text-red-500 transition">
              Merch
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
