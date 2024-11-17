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
    redirects: async () => {
        return [
            {
                // Basic redirect
                source: '/about',
                destination: '/',
                permanent: true,
            }
        ]
    }

};

export default nextConfig;
