/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/page/home",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
