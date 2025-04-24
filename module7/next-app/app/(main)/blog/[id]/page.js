"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id;

  console.log(params);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div>
          <Link href="/blog">
            <span className="text-2xl hover:text-blue-500">
              Return to Blog Archieve
            </span>
          </Link>

          <h1 className="text-7xl text-red-500 font-bold">Blog Post Page</h1>
          <span className="text-lg">You are viewing blog post {postId}</span>
        </div>
      </div>
    </>
  );
}
