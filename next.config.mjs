import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  basePath: '/VexyraGuide',
  images: {
    unoptimized: true,
  },
})