"use client";
import { blogs } from "../../config/blogs";
import Image from "next/image";



export default function BlogPost() {
  const blog = blogs[0]
  // if (!blog) {
  //   return <p className="text-center text-xl text-red-600">Blog not found</p>;
  // }

  // Example of more complex content
  const { title, text, author, date, categories, tags, imageUrl } = blog;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Post Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-500 my-2">
          <span className="font-semibold">By {author}</span> - Published on{" "}
          {date}
        </p>
        <div className="flex justify-center gap-2">
          {categories?.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-200 rounded-full text-sm font-semibold text-blue-800"
            >
              {category}
            </span>
          ))}
        </div>
      </header>

      {/* Blog Post Image */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="object-center"
        />
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none">
        <p>{text}</p>
      </article>

      {/* Tags Section */}
      <div className="mt-8 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Tags:</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold hover:bg-green-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Related Posts:
        </h2>
        <div className="flex gap-8">
          {blogs
            .filter((relatedBlog) => relatedBlog.id !== blog.id)
            .slice(0, 3)
            .map((relatedBlog) => (
              <div key={relatedBlog.id} className="w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {/* {relatedBlog.text.slice(0, 100)}... */}
                  </p>
                  <a
                    href={`/blogs/${relatedBlog.id}`}
                    className="text-blue-600 mt-4 block text-sm"
                  >
                    Read more &rarr;
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments:</h2>
        <div className="space-y-6">
          {/* Add a simple static comment box */}
          <div className="border p-4 rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800">
              Leave a Comment
            </h3>
            <textarea
              className="w-full p-3 mt-2 border rounded-lg resize-none"
              rows={4}
              placeholder="Write your comment here..."
            />
            <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Submit Comment
            </button>
          </div>

          {/* Example of a static comment */}
          <div className="border-t pt-4">
            <p className="text-gray-600 font-medium">John Doe</p>
            <p className="text-gray-700">
              This was a very insightful article, thank you for sharing!
            </p>
          </div>
        </div>
      </div>

      {/* Share Buttons Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Share This Post:
        </h2>
        <div className="flex gap-4">
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M23 3a10.5 10.5 0 01-3.04.83A4.55 4.55 0 0022.35 1a9.8 9.8 0 01-3.17 1.22A4.48 4.48 0 0016.68 0c-2.58 0-4.72 2.2-4.72 4.93 0 .39.06.77.17 1.14a12.7 12.7 0 01-9.42-4.79A4.96 4.96 0 001 5.22C1 6.8 2.6 8 4.38 8.45a4.37 4.37 0 01-2.13-.59v.06a4.48 4.48 0 004.16 3.09 4.53 4.53 0 01-2.1.08A4.48 4.48 0 007.58 12a9.91 9.91 0 01-6.11 2.12c-.4 0-.79-.02-1.18-.07A13.89 13.89 0 005.53 14a13.94 13.94 0 0013.94-13.94c0-.21-.01-.41-.02-.62A9.89 9.89 0 0023 3z"
              />
            </svg>
            Twitter
          </a>
          <a
            href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
}
