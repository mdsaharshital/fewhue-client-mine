import "./App.css";
import Page from "./pages/Page";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const containerRef = useRef(null);
  const [showShop, setShowShop] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleShopClose = () => setShowShop(false);
  const handleShopShow = () => setShowShop(true);
  const handleContactShow = () => setShowContact(true);
  const handleContactClose = () => setShowContact(false);
  const handleShowProductDetails = () => setShowProductDetails(true);
  const handleProductDetailsClose = () => setShowProductDetails(false);

  return (
    <div className="App">
      <Header />
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
