import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { HomePage } from './modules/HomePage';
import { Contact } from './modules/Contact';
import { Services } from './modules/Service';
import { ScrollToTop } from './modules/shared/ScrollToTop/ScrollToTop';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { About } from './modules/About';
import { ServicePilling } from './modules/Service/components/ServicePilling';
import { ServiceAcne } from './modules/Service/components/ServiceAcne/ServiceAcne';

const YOUR_CLIENT_ID = "AbsfS_9hFFe-J5doymqqISO2MlAFiVOv9kBquU-l2Fa0G47ZJsFK2w0vSG7xMxvKhnYVBmiES1OcZy4R";
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
          <Route path="pillings" element={<ServicePilling />} />
          <Route path="pro-acne" element={<ServiceAcne />} />
        </Route>
      </Routes>
    </Router>
  </PayPalScriptProvider>

);  