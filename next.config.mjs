/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    /*
     * Splitting chunks
     * chunks: 'all' 모든 부분에 대해 청크 분할 적용
     * minSize: 20000 20KB 미만은 분할 미적용
     * cacheGroups : 적용한 분할 그룹
     */
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    };
    return config;
  },
};

export default nextConfig;
