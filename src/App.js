import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./layout/pages/ProductDetails";
import Page from "./layout/pages/Page";

function App() {
  const containerRef = useRef(null);
  const [showShop, setShowShop] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleShopClose = () => setShowShop(false);
  const handleShopShow = () => setShowShop(true);
  const handleContactShow = () => setShowContact(true);
  const handleContactClose = () => setShowContact(false);
  const handleShowProductDetails = () => setShowProductDetails(true);
  const handleProductDetailsClose = () => setShowProductDetails(false);
  const handleShowCheckout = () => setShowCheckout(true);
  const handleShowCheckoutClose = () => setShowCheckout(false);

  return (
    <div className="App">
      <Toaster />
      <Header
        showCheckout={showCheckout}
        handleShowCheckout={handleShowCheckout}
        handleShowCheckoutClose={handleShowCheckoutClose}
      />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          direction: "horizontal",
        }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Page
            showShop={showShop}
            showContact={showContact}
            handleShopClose={handleShopClose}
            handleShopShow={handleShopShow}
            handleContactClose={handleContactClose}
            showProductDetails={showProductDetails}
            handleShowProductDetails={handleShowProductDetails}
            handleProductDetailsClose={handleProductDetailsClose}
          />
        </main>
      </LocomotiveScrollProvider>
      <Navigation
        showShop={showShop}
        handleShopClose={handleShopClose}
        handleShopShow={handleShopShow}
        handleContactShow={handleContactShow}
      />

      <ProductDetails
        showProductDetails={showProductDetails}
        handleProductDetailsClose={handleProductDetailsClose}
      />
    </div>
  );
}

export default App;
