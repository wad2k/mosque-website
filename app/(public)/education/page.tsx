export default function Education() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Education</h1>

      {[
        ["Boys Quran Classes", "Monday & Tuesday: 5:00pm to 6:30pm"],
        ["Girls Quran Classes", "Monday to Thursday: 5:00pm to 6:30pm"],
        ["Private Quran & Tajweed Classes", "Available upon request"]
      ].map(([title, time]) => (
        <div key={title} className="p-4 bg-green-50 rounded-lg shadow mb-4">
          <h2 className="text-xl font-semibold text-green-900">{title}</h2>
          <p className="text-green-800">{time}</p>
        </div>
      ))}
    </section>
  );
}
