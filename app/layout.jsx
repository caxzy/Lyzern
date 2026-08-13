import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: 'VexyraHub - Your Guide for optimization.',
  description: 'A guide for PC optimization tools, programs, and guides for Windows 10/11. All in one place and 100% open source.',
}
 
const banner = <Banner storageKey="some-key">❗Developer Beta.</Banner>
const navbar = (
  <Navbar
    logo={<b>VexyraHub</b>}
    projectLink='https://github.com/caxzy/VexyraHub'
    chatLink='https://discord.com/invite/JVEWR9CGk5'
  />
)
const footer = (
<Footer>MIT {new Date().getFullYear()} © VexyraHub - Made With ❤️.</Footer>
);

const search = <Search placeholder="Search docs.."></Search>;
 
export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
<Head
// Favourite Color.
  color={{
    hue: 300,
    saturation: 100,
    lightness: {
      light: 0,
      dark: 50
    }
  }}
/>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/caxzy/VexyraHub"
          footer={footer}
          feedback={{ content: null }}
          search={search}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}