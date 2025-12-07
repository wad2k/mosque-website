export default function Events() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Events</h1>

      {[
        ["Taleem", "Monday to Saturday: After Isha prayers"],
        ["Seerah", "Sunday and Monday: After Isha prayers"],
        ["Adult Tarbiyah", "Friday: After Isha prayers"]
      ].map(([title, time]) => (
        <div key={title} className="p-4 bg-green-50 rounded-lg shadow mb-4">
          <h2 className="text-xl font-semibold text-green-900">{title}</h2>
          <p className="text-green-800">{time}</p>
        </div>
      ))}
    </section>
  );
}
