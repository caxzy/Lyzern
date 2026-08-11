/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Wymagane dla statycznego eksportu na GitHub Pages
  },
  // Jeśli Twoja strona jest pod adresem username.github.io/VexyraHub, odkomentuj poniższe linie:
  // basePath: '/VexyraHub',
}
// Set up Nextra with its configuration
const withNextra = nextra({

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