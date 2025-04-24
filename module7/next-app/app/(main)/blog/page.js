import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <Link href="/">
            <span className="text-2xl hover:text-blue-500">Return Home</span>
          </Link>

          <h1 className="text-7xl text-red-500 font-bold">Blog Page</h1>

          <div>
            <ul>
              <li>
                <Link href="/blog/1">Blog Post 1</Link>
              </li>
              <li>
                <Link href="/blog/2">Blog Post 2</Link>
              </li>
              <li>
                <Link href="/blog/3">Blog Post 3</Link>
              </li>
              <li>
                <Link href="/blog/100">Blog Post 100</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
