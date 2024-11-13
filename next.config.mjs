/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*', //'your-domain.com' | we use * for multiple domain
                port: '',
                pathname: '/**', //  '/your-account/**'
            },
        ],
    },
};

export default nextConfig;
