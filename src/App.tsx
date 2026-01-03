
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { OptInPage } from './pages/OptInPage';
import { ThankYouPage } from './pages/ThankYouPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/youtube-hacks" replace />} />
        <Route path="/youtube-hacks" element={<OptInPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        {/* Helper route if they just navigate to the base without redirect handling on server */}
        <Route path="/youtube-hacks/thank-you" element={<Navigate to="/thank-you" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
