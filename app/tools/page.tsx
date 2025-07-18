import Link from "next/link";

const tools = [

  {
    id: 1,
    name: "JSON Formatter",
    href: "json-formatter",
    description: "Format, validate, and prettify JSON data",
  },
  {
    id: 2,
    name: "QR Code Generator",
    href: "qr-generator",
    description: "Generate QR codes for URLs, text, WiFi, and more",
  },
  {
    id: 3,
    name: "Your IP",
    href: "your-ip",
    description: "Find out your public IP address and location.",
  },
  // { id: 4, name: "Math Solver", description: "Instant solutions for complex math problems." },
  // { id: 5, name: "Game Maker", description: "Create your own games with this awesome tool!" },
  // { id: 6, name: "Image Editor", description: "Edit your images with ease and precision." },
  // { id: 7, name: "Code Formatter", description: "Beautify and format your code for readability." },
];

const ToolsSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
        Standart Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link href={`/tools/${tool.href}`} key={tool.id}>
            <div
              key={tool.id}
              className="relative flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 rounded-lg bg-gradient-to-br from-black via-transparent to-transparent">
              </div>
              <h3 className="z-10 text-2xl font-semibold text-white mb-2">
                {tool.name}
              </h3>
              <p className="z-10 text-white text-center">{tool.description}</p>

              <Link href={`/tools/${tool.href}`}>
                <button className="z-10 mt-4 px-8 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Try It!
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
