import './App.css';
import demoImg from './pages/img/demo1/10.jpg'
import Page from './pages/Page'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

function App() {
  const containerRef = useRef(null)
  const [show, setShow] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleContactShow = () => setShowContact(true);
  const handleContactClose = () => setShowContact(false);

  const demoData = [
    {
      id: '1',
      name: 'snapbag',
      price: '350',
      img: demoImg
    },
    {
      id: '2',
      name: 'snapbag',
      price: '350',
      img: demoImg
    },
    {
      id: '3',
      name: 'snapbag',
      price: '350',
      img: demoImg
    },
    {
      id: '4',
      name: 'snapbag',
      price: '350',
      img: demoImg
    },
  ]

  return (
    <div className="App">
      <Header />
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
            direction: 'horizontal'
          }
        }
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Page
            show={show}
            showContact={showContact}
            handleClose={handleClose}
            handleShow={handleShow}
            handleContactClose={handleContactClose}
          />
        </main>
      </LocomotiveScrollProvider>
      <Navigation
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleContactShow={handleContactShow}
      />
    </div>
  );
}

export default App;