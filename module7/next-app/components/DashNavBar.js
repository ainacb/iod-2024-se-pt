import Link from "next/link";

export function DashNavBar() {
  return (
    <>
      <div className="h-24 bg-gray-800 flex justify-between items-center px-12">
        <Link href="/">
          <span className="text-green-500 uppercase text-2xl font-bold hover:text-white">
            Aina's App
          </span>
        </Link>
        <ul className="flex gap-3">
          <li className="text-xl hover:text-green-500">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="text-xl hover:text-green-500">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
