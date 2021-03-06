import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link 
      rel="stylesheet" 
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
      />
      </Head>
      <div className="content">
        <Navbar />
        { children }
        <Footer />
      </div>
    </>
  );
}
 
export default Layout;