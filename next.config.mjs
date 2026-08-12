import nextra from 'nextra'

const withNextra = nextra({

})

export default withNextra({
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/introduction",
        permanent: true,
      },
    ];
  },
});