export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative w-full bg-green-800 text-white py-28 px-6">
  {/* Gold accent bar */}
  <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>

  <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
    <h1 className="text-5xl font-extrabold leading-tight">
      Sheerwater Muslim Education & Welfare Trust
    </h1>
    <p className="text-xl opacity-90 max-w-2xl">
      A home for worship, learning, and unity.
    </p>

    <a
      href="/contact"
      className="bg-yellow-500 text-green-900 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 transition"
    >
      Visit Us
    </a>
  </div>
</section>


      {/* Prayer Times */}
<section className="max-w-4xl w-full py-16 px-6">
  <h2 className="text-3xl font-bold text-green-800 mb-4">Prayer Times</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
    <div className="p-4 bg-green-50 rounded-lg text-center shadow">
      Fajr<br /><span className="font-semibold text-lg">Soon</span>
    </div>
    <div className="p-4 bg-green-50 rounded-lg text-center shadow">
      Dhuhr<br /><span className="font-semibold text-lg">Soon</span>
    </div>
    <div className="p-4 bg-green-50 rounded-lg text-center shadow">
      Asr<br /><span className="font-semibold text-lg">Soon</span>
    </div>
    <div className="p-4 bg-green-50 rounded-lg text-center shadow">
      Maghrib<br /><span className="font-semibold text-lg">Soon</span>
    </div>
    <div className="p-4 bg-green-50 rounded-lg text-center shadow">
      Isha<br /><span className="font-semibold text-lg">Soon</span>
    </div>
  </div>
</section>

    </main>
  );
}
