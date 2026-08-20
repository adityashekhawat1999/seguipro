import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import InstagramPage from './pages/InstagramPage';
import WebsitesPage from './pages/WebsitesPage';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instagram" element={<InstagramPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
