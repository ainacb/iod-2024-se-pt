import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <Link href="/">
            <span className="text-2xl hover:text-blue-500">Return Home</span>
          </Link>

          <h1 className="text-7xl text-red-500 font-bold">About Page</h1>
        </div>
      </div>
    </>
  );
}
