
const blogContent = {
  1: {
    title: "JQUERY TIPS",
    content: `
      <h2 class="text-2xl font-semibold text-gray-800">Essential jQuery Tips</h2>
      <p class="mt-4 text-gray-700">Here are some essential jQuery tips and tricks to enhance your development experience:</p>
      <ul class="list-disc pl-6 mt-4 text-gray-700">
        <li><strong>Use chaining for efficiency:</strong> Chaining methods allows for cleaner code and improved performance.</li>
        <li><strong>Leverage event delegation:</strong> Bind event handlers to parent elements to improve performance, especially in dynamic content.</li>
        <li><strong>Minimize DOM manipulation:</strong> Reduce the number of DOM manipulations to improve performance.</li>
        <li><strong>Use the .on() method:</strong> For better event handling across elements, use the .on() method.</li>
      </ul>
      <p class="mt-4 text-gray-700">By following these tips, you can improve the efficiency and maintainability of your jQuery code.</p>
    `,
  },
};

export default function BlogPost({id}) {
  const blog = blogContent[id];

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
}
