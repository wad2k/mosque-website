import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h2 className="font-bold text-xl">Mosque</h2>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/timetable">Timetable</Link>
          <Link href="/events">Events</Link>
          <Link href="/education">Education</Link>
          <Link href="/donation">Donation</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
