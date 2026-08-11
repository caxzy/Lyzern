import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
    output: "export",

})
 
// Export the final Next.js config with Nextra included
export default withNextra({
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