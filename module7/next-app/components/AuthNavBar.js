import Link from "next/link";

export function AuthNavBar() {
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
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
