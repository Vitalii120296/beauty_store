import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './modules/HomePage';
import { Contact } from './modules/Contact';
import { Services } from './modules/Service';
import { ScrollToTop } from './modules/shared/ScrollToTop/ScrollToTop';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { About } from './modules/About';

const YOUR_CLIENT_ID = "AddGSCMR_ytAJvfpYX41iPK3BgD3tQx2KK8hYEhErGm696ROpVZa_vfxQ8I6N_P2sYgtpufTIiQYQxRf";
const paypalOptions = {
  clientId: YOUR_CLIENT_ID,
  currency: "USD",
  locale: "en_US"
};

export const Root = () => (
  <PayPalScriptProvider options={paypalOptions}>
    <Router >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="contact/:serviceId?" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </Router>
  </PayPalScriptProvider>

);