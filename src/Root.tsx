import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './modules/HomePage';
import { Contact } from './modules/Contact';
import { Services } from './modules/Service';

export const Root = () => (
  <Router >
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </Router>
);