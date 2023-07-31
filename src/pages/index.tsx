import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from './Home';
import DetailAnime from './DetailAnime';
import Collection from './Collection';
import DetailCollection from './DetailCollection';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<DetailAnime />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:id" element={<DetailCollection />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
