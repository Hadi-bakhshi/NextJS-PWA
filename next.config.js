const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
});
// const runtimeCaching = require('next-pwa/cache');
// import withPWA from 'next-pwa';
// import runtimeCaching from 'next-pwa/cache';

// const config = {
//   reactStrictMode: false,
// };
// const nextConfig = withPWA({

// })(config);

// export default nextConfig;
module.exports = withPWA({
  reactStrictMode: false,
});

// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
// };
