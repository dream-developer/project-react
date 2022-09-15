import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1
import { Home } from './components/Home'; // 2
import { Content } from './components/Content';
import { About } from './components/About';

export const App = () => {
  return (
    <>
      <BrowserRouter> {/* 3 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}