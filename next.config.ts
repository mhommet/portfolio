import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/fr',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
