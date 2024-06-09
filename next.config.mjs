// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         remotePatterns:[
//             {
//                 protocol:'https',
//                 hostname:'tdzrspyxosgjctxmmdhv.supabase.co',
//                 pathname: '/storage/v1/object/public/images/**',
//             }
//         ]
//     }
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'tdzrspyxosgjctxmmdhv.supabase.co',
//                 pathname: '/storage/v1/object/public/images/**',
//             },
//         ],
//     },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
// Using the default import and then destructuring to get ProvidePlugin
// next.config.js
// next.config.mjs
// Using dynamic import for webpack to ensure it's correctly handled
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const webpack = require('webpack');

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Setup fallback for 'buffer' if needed in client-side
      config.resolve.fallback = config.resolve.fallback || {};
      config.resolve.fallback.buffer = require.resolve('buffer/');
    }

    // Adding ProvidePlugin to configure global variables
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'], // Shim 'Buffer' as a global variable
      })
    );

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      },
    ],
  },
};

export default nextConfig;
