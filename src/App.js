import './App.css';
import { Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogDetail from './Pages/BlogDetail';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
