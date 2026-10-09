import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BusinessGrowthPage from './pages/BusinessGrowthPage';
import WebsitesPage from './pages/WebsitesPage';
import SoftwarePage from './pages/SoftwarePage';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business-growth" element={<BusinessGrowthPage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/software" element={<SoftwarePage />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
