import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Accordion from "./Accordion/Accordion";
import Container from "../../Container/Container";

const Layout = () => {
  return (
    <Container>
      <div className="animate__animated animate__backInDown">
        <Header />
        <Services />
        <Accordion />
        <Footer />
      </div>
    </Container>
  );
};

export default Layout;
