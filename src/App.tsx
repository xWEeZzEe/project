import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import Events from './EventsPage';
import RegisterEvent from './RegisterEvent';
import ScrollToTop from './ScrollToTop'; // 
import SoloEventDashboard from "./SoloEventDashboard";

function App() {
  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register/:eventName" element={<RegisterEvent />} />
        <Route path="/shikharshreyshivanraj/solo-events" element={<SoloEventDashboard />} />
      </Routes>
    </>
  );
}

export default App;
