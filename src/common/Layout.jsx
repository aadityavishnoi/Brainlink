import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFAB from "../components/WhatsAppFAB";
import BackToTop from "../components/BackToTop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppFAB />
      <BackToTop />
    </>
  );
}
