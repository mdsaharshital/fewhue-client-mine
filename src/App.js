import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./layout/pages/ProductDetails";
import Page from "./layout/pages/Page";
import { useLocation } from "react-router-dom";

function App() {
  const containerRef = useRef(null);
  const location = useLocation();
  const [showShop, setShowShop] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(
    window.innerWidth <= 768 ? "vertical" : "horizontal"
  );

  const handleCloseModal = (modalName) => {
    switch (modalName) {
      case "shop":
        setShowShop(false);
        break;
      case "contact":
        setShowContact(false);
        break;
      case "productDetails":
        setShowProductDetails(false);
        break;
      default:
        break;
    }
  };

  const handleShowModal = (modalName) => {
    switch (modalName) {
      case "shop":
        setShowShop(true);
        break;
      case "contact":
        setShowContact(true);
        break;
      case "productDetails":
        setShowProductDetails(true);
        break;
      default:
        break;
    }
  };

  const scrollOptions = {
    smooth: true,
    direction: scrollDirection,
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollDirection(window.innerWidth <= 768 ? "vertical" : "horizontal");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Toaster />
      <Header
        showCheckout={showCheckout}
        handleShowCheckout={() => setShowCheckout(true)}
        handleShowCheckoutClose={() => setShowCheckout(false)}
        showShop={showShop}
        handleShopClose={() => handleCloseModal("shop")}
        handleShopShow={() => handleShowModal("shop")}
      />
      <LocomotiveScrollProvider
        options={scrollOptions}
        containerRef={containerRef}
        watch={[location]}
      >
        <main data-scroll-container ref={containerRef}>
          <Page
            showShop={showShop}
            handleShopClose={() => handleCloseModal("shop")}
            handleShopShow={() => handleShowModal("shop")}
            showContact={showContact}
            handleContactClose={() => handleCloseModal("contact")}
            handleContactShow={() => handleShowModal("contact")}
            showProductDetails={showProductDetails}
            handleShowProductDetails={() => handleShowModal("productDetails")}
            handleProductDetailsClose={() => handleCloseModal("productDetails")}
          />
        </main>
      </LocomotiveScrollProvider>
      <Navigation
        showShop={showShop}
        handleShopClose={() => handleCloseModal("shop")}
        handleShopShow={() => handleShowModal("shop")}
        showContact={showContact}
        handleContactClose={() => handleCloseModal("contact")}
        handleContactShow={() => handleShowModal("contact")}
      />
      <ProductDetails
        showProductDetails={showProductDetails}
        handleProductDetailsClose={() => handleCloseModal("productDetails")}
      />
    </div>
  );
}

export default App;
