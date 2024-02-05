/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const MainLayout = ({ isLayoutVisible, children }) => {
  return (
    <>
      {isLayoutVisible && <Navbar />}
      {children}
      {isLayoutVisible && <Footer />}
      {isLayoutVisible && <Menu />}
    </>
  );
};

export default MainLayout;