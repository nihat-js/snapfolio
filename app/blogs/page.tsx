import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Can we control time",
    excerpt:
      "Master jQuery with these essential tips and tricks for developers...",
    image: "/blogs/blog-1.jpg",
  },
  {
    id: 2,
    title: "React Performance Optimization",
    excerpt:
      "Improve the performance of your React apps with these simple techniques...",
    image: "/images/react-performance.jpg",
  },
  {
    id: 3,
    title: "CSS Grid Layouts",
    excerpt:
      "A complete guide to mastering CSS Grid and building modern layouts...",
    image: "/images/css-grid.jpg",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <Link
                className="text-blue-600 hover:text-blue-800 mt-4 inline-block"
                href={`/blogs/${blog.id}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
