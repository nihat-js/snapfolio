import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	webpack(config, { isServer }) {
		if (!isServer) {
			config.optimization.minimize = true;
		}
		return config;
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.licdn.com', // <= BU SAHƏ ŞƏRTDİR!
				port: '',                    // string boş olsa belə bu formada qalmalıdır
				pathname: '/dms/image/**',
			},
		],
	}
};

export default nextConfig;
