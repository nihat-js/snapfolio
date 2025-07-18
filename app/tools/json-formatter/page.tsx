"use client";

import { useState } from "react";
import { Check, Copy, Download, Upload, RefreshCw, AlertCircle, CheckCircle } from "lucide-react";

const JsonFormatterTool = () => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError("");
      setIsValid(true);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
      setOutput("");
      setIsValid(false);
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
      setIsValid(true);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
      setOutput("");
      setIsValid(false);
    }
  };

  const validateJson = () => {
    try {
      JSON.parse(input);
      setError("");
      setIsValid(true);
    } catch (err) {
      setError("Invalid JSON: " + (err as Error).message);
      setIsValid(false);
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
    setIsValid(null);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadJson = () => {
    const blob = new Blob([output], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadSampleJson = () => {
    const sample = `{
  "user": {
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "country": "USA"
    },
    "hobbies": ["reading", "coding", "traveling"],
    "isActive": true
  }
}`;
    setInput(sample);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <RefreshCw className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            JSON Formatter & Validator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Format, minify, validate, and prettify your JSON data with ease. Perfect for developers and data analysts.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={formatJson}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Format</span>
          </button>
          
          <button
            onClick={minifyJson}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Minify</span>
          </button>
          
          <button
            onClick={validateJson}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Validate</span>
          </button>
          
          <button
            onClick={clearAll}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Clear</span>
          </button>
          
          <button
            onClick={loadSampleJson}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
          >
            <Upload className="w-4 h-4" />
            <span>Sample</span>
          </button>
        </div>

        {/* File Upload */}
        <div className="flex justify-center mb-8">
          <label className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-400 transition-colors duration-300 cursor-pointer">
            <Upload className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600">Upload JSON File</span>
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Validation Status */}
        {isValid !== null && (
          <div className="flex justify-center mb-6">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
              isValid 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {isValid ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              <span className="font-medium">
                {isValid ? 'Valid JSON' : 'Invalid JSON'}
              </span>
            </div>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-800">Error</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
              <h2 className="text-xl font-semibold">Input JSON</h2>
            </div>
            <div className="p-6">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
                className="w-full h-96 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
              />
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Formatted JSON</h2>
              {output && (
                <div className="flex space-x-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={downloadJson}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                    title="Download JSON"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
              )}
            </div>
            <div className="p-6">
              <textarea
                value={output}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="w-full h-96 p-4 border border-gray-200 rounded-xl bg-gray-50 font-mono text-sm resize-none"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Format & Prettify</h4>
              <p className="text-gray-600 text-sm">Make your JSON readable with proper indentation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Validate</h4>
              <p className="text-gray-600 text-sm">Check if your JSON syntax is correct</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Copy className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Copy & Download</h4>
              <p className="text-gray-600 text-sm">Easily copy or download your formatted JSON</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Upload className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">File Upload</h4>
              <p className="text-gray-600 text-sm">Upload JSON files directly from your computer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatterTool;
