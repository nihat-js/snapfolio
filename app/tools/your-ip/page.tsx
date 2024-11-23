"use client";

import { useEffect, useState } from "react";

const YourIPTool = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [ipInfo, setIpInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getUserIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      setIp(data.ip);
      await getIPInfo(data.ip); 
    } catch (error) {
      setError("Failed to fetch IP address.");
      setLoading(false);
    }
  };

  const getIPInfo = async (ip: string) => {
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await response.json();
      setIpInfo(data);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch IP information.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserIP();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-indigo-600 mb-6">
          Your IP Information
        </h1>

        {loading
          ? (
            <div className="text-xl font-semibold text-gray-600">
              Loading...
            </div>
          )
          : error
          ? <div className="text-xl font-semibold text-red-600">{error}</div>
          : (
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-xl text-white">
              <div className="mb-4">
                <p className="text-2xl font-bold">Your IP Address:</p>
                <p className="text-xl">{ip}</p>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-bold">Location:</p>
                <p className="text-xl">
                  {ipInfo?.city}, {ipInfo?.regionName}, {ipInfo?.country}
                </p>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-bold">ISP Provider:</p>
                <p className="text-xl">{ipInfo?.isp}</p>
              </div>
              <div className="mb-4">
                <p className="text-2xl font-bold">Organization:</p>
                <p className="text-xl">{ipInfo?.org}</p>
              </div>
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps/search/?q=${ipInfo?.lat},${ipInfo?.lon}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-2 bg-white text-blue-500 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  View on Map
                </a>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default YourIPTool;
