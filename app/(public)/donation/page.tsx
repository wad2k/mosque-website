export default function Donations() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 text-center">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Support the Mosque</h1>
      <p className="text-green-700 mb-6 text-lg">
        Help us maintain and grow our community mosque. Your support keeps our
        education programs, prayer services, and facilities running.
      </p>

      <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded-md shadow-md max-w-xl mx-auto mb-6">
        <p className="font-semibold text-green-900">
          Donation options coming soon.
        </p>
        <p className="text-green-800 text-sm opacity-80">
          Please visit again or contact the mosque directly.
        </p>
      </div>

      <a
        href="/contact"
        className="bg-green-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-green-600 transition"
      >
        Contact Us
      </a>
    </section>
  );
}
