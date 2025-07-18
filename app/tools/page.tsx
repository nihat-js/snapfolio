import Link from "next/link";
import { Code2, QrCode, MapPin, Wrench } from "lucide-react";

const tools = [
  {
    id: 1,
    name: "JSON Formatter",
    href: "json-formatter",
    description: "Format, validate, and prettify JSON data",
    icon: Code2,
    color: "blue",
  },
  {
    id: 2,
    name: "QR Code Generator",
    href: "qr-generator",
    description: "Generate QR codes for URLs, text, WiFi, and more",
    icon: QrCode,
    color: "slate",
  },
  {
    id: 3,
    name: "Your IP",
    href: "your-ip",
    description: "Find out your public IP address and location.",
    icon: MapPin,
    color: "emerald",
  },
  // { id: 4, name: "Math Solver", description: "Instant solutions for complex math problems." },
  // { id: 5, name: "Game Maker", description: "Create your own games with this awesome tool!" },
  // { id: 6, name: "Image Editor", description: "Edit your images with ease and precision." },
  // { id: 7, name: "Code Formatter", description: "Beautify and format your code for readability." },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        hoverBg: 'hover:bg-blue-50',
        border: 'hover:border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
      };
    case 'slate':
      return {
        iconBg: 'bg-slate-100',
        iconColor: 'text-slate-600',
        hoverBg: 'hover:bg-slate-50',
        border: 'hover:border-slate-200',
        button: 'bg-slate-600 hover:bg-slate-700',
      };
    case 'emerald':
      return {
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-600',
        hoverBg: 'hover:bg-emerald-50',
        border: 'hover:border-emerald-200',
        button: 'bg-emerald-600 hover:bg-emerald-700',
      };
    default:
      return {
        iconBg: 'bg-gray-100',
        iconColor: 'text-gray-600',
        hoverBg: 'hover:bg-gray-50',
        border: 'hover:border-gray-200',
        button: 'bg-gray-600 hover:bg-gray-700',
      };
  }
};

const ToolsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl mb-6 shadow-lg">
            <Wrench className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            Developer Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of useful tools to boost your productivity. Free, fast, and built for developers.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool) => {
            const colorClasses = getColorClasses(tool.color);
            const Icon = tool.icon;
            
            return (
              <Link href={`/tools/${tool.href}`} key={tool.id}>
                <div className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${colorClasses.hoverBg} ${colorClasses.border} hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}>
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${colorClasses.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${colorClasses.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  
                  {/* Button */}
                  <button className={`w-full py-3 px-6 ${colorClasses.button} text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105`}>
                    Try Tool
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-slate-700 mb-2">{tools.length}+</div>
              <div className="text-gray-600">Available Tools</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-slate-700 mb-2">100%</div>
              <div className="text-gray-600">Free to Use</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-slate-700 mb-2">Fast</div>
              <div className="text-gray-600">Processing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
