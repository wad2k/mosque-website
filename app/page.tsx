"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [timings, setTimings] = useState<any>(null);
  const [nextPrayer, setNextPrayer] = useState<string>("");
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    async function fetchTimes() {
      const res = await fetch(
        "https://api.aladhan.com/v1/timingsByCity?city=Woking&country=United%20Kingdom&method=2"
      );
      const data = await res.json();
      const times = data.data.timings;
      setTimings(times);
      calculateNextPrayer(times);
    }
    fetchTimes();
  }, []);

  const calculateNextPrayer = (times: any) => {
    const now = new Date();
    const order = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

    for (let prayer of order) {
      const time = times[prayer].split(" ")[0];
      const [hour, minute] = time.split(":").map(Number);

      const prayerTime = new Date();
      prayerTime.setHours(hour);
      prayerTime.setMinutes(minute);
      prayerTime.setSeconds(0);

      if (prayerTime > now) {
        setNextPrayer(prayer);
        updateCountdown(prayerTime);
        return;
      }
    }

    setNextPrayer("Fajr");

// Prepare tomorrow's fajr time correctly
const [hour, minute] = times["Fajr"].split(" ")[0].split(":").map(Number);
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(hour);
tomorrow.setMinutes(minute);
tomorrow.setSeconds(0);

updateCountdown(tomorrow);
  };

  const updateCountdown = (target: Date) => {
    const update = () => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) return;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      setCountdown(`${hours}h ${minutes}m`);
    };

    update();
    setInterval(update, 60000);
  };


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
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Prayer Times
        </h2>

        {/* Jumu'ah Times */}
<div className="mt-6 bg-yellow-100 border-l-4 border-yellow-600 p-4 rounded-md shadow-md max-w-xl mx-auto">
  <h3 className="text-xl font-bold text-green-900">Jumu’ah (Friday)</h3>
  <p className="text-green-800 font-semibold">
    Khutbah: 12:30 PM
  </p>
  <p className="text-green-700 text-sm opacity-80">
    (Timings subject to adjustment — check announcements)
  </p>
</div>

        {nextPrayer && (
          <p className="text-lg font-semibold text-green-700 mb-4">
            Next prayer: {nextPrayer} – {countdown}
          </p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-800">
          {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => (
            <div key={prayer} className="p-4 bg-green-50 rounded-lg text-center shadow">
              {prayer}
              <br />
              <span className="font-semibold text-lg">
                {timings ? timings[prayer].split(" ")[0] : "Loading..."}
              </span>
            </div>
          ))}
        </div>

        
      </section>

    </main>
  );
}
