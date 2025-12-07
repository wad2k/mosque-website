export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Contact Us</h1>

      <p className="text-lg text-green-900 font-semibold mb-2">
        Sheerwater Muslim Education & Welfare Trust
      </p>

      <p className="text-green-700 mb-6">
        Scouts Building, 65 Lambourne Crescent, Sheerwater, Woking GU21 5RJ
      </p>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg border-2 border-green-700 mb-8">
        <iframe
          title="Mosque Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.731550217072!2d-0.5709426!3d51.3188127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487677ae1c03d0f3%3A0x242f404addc911da!2s65%20Lambourne%20Crescent%2C%20Sheerwater%2C%20Woking%20GU21%205RJ!5e0!3m2!1sen!2suk!4v0000000000000!5m2!1sen!2suk"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>

      <h2 className="text-xl font-bold text-green-800 mb-2">Email</h2>
      <p className="text-green-700 mb-6">info@sheerwatermosque.org</p>

      <h2 className="text-xl font-bold text-green-800 mb-2">Opening Hours</h2>
      <p className="text-green-700">Open daily for all prayers</p>
    </section>
  );
}
