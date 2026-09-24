import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Rides from './Components/Rides/Rides';
import Tracking from './Components/Tracking/Tracking';
import Safety from './Components/Safety/Safety';
import Business from './Components/Business/Business';
import Driver from './Components/Driver/Driver';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Help from './Components/Help/Help';
import Download from './Components/Download/Download';
import Footer from './Components/Footer/Footer';
import Modal from './Components/Modal/Modal';
import Login from './Pages/Login/Login';

function MainPage() {
  const [modal, setModal] = useState(null);
  const [booking, setBooking] = useState({
    pickup: '',
    destination: '',
    type: 'now',
    ride: 'TEZGO Go',
  });
  const [notice, setNotice] = useState('');
  const open = (type, extra = {}) => setModal({ type, ...extra });
  const close = () => setModal(null);
  const showNotice = (message) => {
    setNotice(message);
    close();
  };

  return (
    <>
      <Navbar onAction={open} />
      <main>
        <Home
          booking={booking}
          setBooking={setBooking}
          onBook={(data) => open('booking', { data })}
          onSignup={() => open('signup')}
        />
        <Rides
          onChooseRide={(ride) =>
            open('booking', { data: { ...booking, ride } })
          }
        />
        <Tracking />
        <Safety />
        <Business onBusiness={() => open('business')} />
        <Driver onDriver={() => open('driver')} />
        <HowItWorks />
        <Help />
        <Download
          onDownload={() => showNotice('The TEZGO app is coming soon.')}
        />
      </main>
      <Footer />
      {modal && <Modal modal={modal} close={close} showNotice={showNotice} />}
      {notice && (
        <div className="toast" onClick={() => setNotice('')}>
          {notice}
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<MainPage />} />
    </Routes>
  );
}
