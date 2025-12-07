"use client";

import { useState, useEffect } from "react";

interface PrayerDay {
  date: {
    gregorian: { day: string; month: { number: number }; year: string };
    hijri: { day: string; month: { en: string } };
  };
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
}

export default function TimetablePage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  const [calendar, setCalendar] = useState<PrayerDay[]>([]);

  useEffect(() => {
    async function fetchTimetable() {
      const res = await fetch(
        `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Woking&country=United%20Kingdom&method=2`
      );
      const data = await res.json();
      setCalendar(data.data);
    }

    fetchTimetable();
  }, [month, year]);

  const goNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };

  const goPrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };

  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() + 1 &&
    year === today.getFullYear();

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">
        Prayer Timetable
      </h1>

      <div className="flex justify-between mb-4">
        <button
          onClick={goPrevMonth}
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          ⟵ Previous
        </button>

        <h2 className="text-xl font-semibold">
          {new Date(year, month - 1).toLocaleString("default", {
            month: "long",
          })}{" "}
          {year}
        </h2>

        <button
          onClick={goNextMonth}
          className="bg-green-700 text-white px-4 py-2 rounded"
        >
          Next ⟶
        </button>
      </div>

      <table className="w-full border-collapse shadow-md">
        <thead className="bg-green-800 text-white">
          <tr>
            <th className="p-2">Day</th>
            <th className="p-2">Fajr</th>
            <th className="p-2">Sunrise</th>
            <th className="p-2">Dhuhr</th>
            <th className="p-2">Asr</th>
            <th className="p-2">Maghrib</th>
            <th className="p-2">Isha</th>
          </tr>
        </thead>

        <tbody>
  {calendar.map((day, index) => {
    const d = day.date.gregorian.day;
    const isTodayRow = isToday(parseInt(d));

    return (
      <tr
        key={index}
        className={`text-center border-b 
        ${isTodayRow ? "bg-yellow-200 font-bold" 
                     : index % 2 === 0 ? "bg-green-50" : "bg-white"} 
        hover:bg-green-100 transition`}
      >
        <td className="p-2 text-green-900">{d}</td>
        <td className="p-2 text-green-900">{day.timings.Fajr}</td>
        <td className="p-2 text-green-900">{day.timings.Sunrise}</td>
        <td className="p-2 text-green-900">{day.timings.Dhuhr}</td>
        <td className="p-2 text-green-900">{day.timings.Asr}</td>
        <td className="p-2 text-green-900">{day.timings.Maghrib}</td>
        <td className="p-2 text-green-900">{day.timings.Isha}</td>
      </tr>
    );
  })}
</tbody>

      </table>
    </section>
  );
}
