"use client";

import { useState, useRef } from "react";
import { QrCode, Download, Copy, RefreshCw, Share2, Smartphone, Globe, Wifi, MessageSquare } from "lucide-react";
import QRCodeLib from "qrcode";

const QRCodeGeneratorTool = () => {
  const [input, setInput] = useState<string>("");
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [qrSize, setQrSize] = useState<number>(256);
  const [errorLevel, setErrorLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQRCode = async () => {
    if (!input.trim()) {
      setError("Please enter text or URL to generate QR code");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const dataURL = await QRCodeLib.toDataURL(input, {
        width: qrSize,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        },
        errorCorrectionLevel: errorLevel
      });
      
      setQrCodeDataURL(dataURL);
    } catch (err) {
      setError("Failed to generate QR code: " + (err as Error).message);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeDataURL) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = qrCodeDataURL;
      link.click();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const clearAll = () => {
    setInput("");
    setQrCodeDataURL("");
    setError("");
    setCopied(false);
  };

  const loadSample = (type: string) => {
    switch (type) {
      case 'url':
        setInput('https://github.com/your-username');
        break;
      case 'wifi':
        setInput('WIFI:T:WPA;S:YourNetworkName;P:YourPassword;;');
        break;
      case 'email':
        setInput('mailto:your-email@example.com?subject=Hello&body=Hi there!');
        break;
      case 'phone':
        setInput('tel:+1234567890');
        break;
      case 'sms':
        setInput('sms:+1234567890?body=Hello from QR Code!');
        break;
      default:
        setInput('Hello, World! This is a sample QR code.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl mb-6 shadow-lg">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
            QR Code Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate high-quality QR codes for URLs, text, WiFi, contacts, and more. Perfect for sharing information quickly and easily.
          </p>
        </div>

        {/* Quick Templates */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Quick Templates</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => loadSample('url')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Website URL</span>
            </button>
            <button
              onClick={() => loadSample('wifi')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <Wifi className="w-4 h-4 text-green-600" />
              <span className="text-sm">WiFi Network</span>
            </button>
            <button
              onClick={() => loadSample('email')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-purple-600" />
              <span className="text-sm">Email</span>
            </button>
            <button
              onClick={() => loadSample('phone')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <Smartphone className="w-4 h-4 text-orange-600" />
              <span className="text-sm">Phone Number</span>
            </button>
            <button
              onClick={() => loadSample('sms')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-pink-600" />
              <span className="text-sm">SMS Message</span>
            </button>
            <button
              onClick={() => loadSample('text')}
              className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
            >
              <QrCode className="w-4 h-4 text-slate-600" />
              <span className="text-sm">Plain Text</span>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={generateQRCode}
            disabled={isGenerating}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-slate-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <QrCode className="w-4 h-4" />
            <span>{isGenerating ? 'Generating...' : 'Generate QR Code'}</span>
          </button>
          
          <button
            onClick={clearAll}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-gray-500/25 hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>

        {/* Settings */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Settings</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  QR Code Size
                </label>
                <select
                  value={qrSize}
                  onChange={(e) => setQrSize(Number(e.target.value))}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value={128}>128x128 (Small)</option>
                  <option value={256}>256x256 (Medium)</option>
                  <option value={512}>512x512 (Large)</option>
                  <option value={1024}>1024x1024 (Extra Large)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Error Correction
                </label>
                <select
                  value={errorLevel}
                  onChange={(e) => setErrorLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                >
                  <option value="L">Low (7%)</option>
                  <option value="M">Medium (15%)</option>
                  <option value="Q">Quartile (25%)</option>
                  <option value="H">High (30%)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-start space-x-2">
              <QrCode className="w-5 h-5 text-red-500 mt-0.5" />
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
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4">
              <h2 className="text-xl font-semibold">Input Data</h2>
            </div>
            <div className="p-6">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter text, URL, email, phone number, or any data you want to encode..."
                className="w-full h-64 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
              />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Characters: {input.length}
                </span>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200"
                  title="Copy text"
                >
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Generated QR Code</h2>
              {qrCodeDataURL && (
                <button
                  onClick={downloadQRCode}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="Download QR Code"
                >
                  <Download className="w-4 h-4" />
                  <span className="text-sm">Download</span>
                </button>
              )}
            </div>
            <div className="p-6 flex flex-col items-center justify-center min-h-64">
              {qrCodeDataURL ? (
                <div className="text-center">
                  <img
                    src={qrCodeDataURL}
                    alt="Generated QR Code"
                    className="mx-auto rounded-xl shadow-lg border border-gray-200 mb-4"
                    style={{ maxWidth: '300px', height: 'auto' }}
                  />
                  <p className="text-sm text-gray-600">
                    QR Code generated successfully! Click download to save.
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <QrCode className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter data and click "Generate QR Code" to create your QR code</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Multiple Formats</h4>
              <p className="text-gray-600 text-sm">Support for URLs, text, WiFi, email, phone, and SMS</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">High Quality</h4>
              <p className="text-gray-600 text-sm">Generate high-resolution QR codes up to 1024x1024</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Easy Sharing</h4>
              <p className="text-gray-600 text-sm">Download and share QR codes instantly</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Error Correction</h4>
              <p className="text-gray-600 text-sm">Adjustable error correction levels for reliability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGeneratorTool;
