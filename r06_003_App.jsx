import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Content } from './components/Content';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} /> {/* 1 */}
          <Route path="/content/:id" element={<Content />} /> {/* 2 */}
          <Route path="/content/:id/:code" element={<Content />} /> {/* 3 */}
        </Routes>
      </BrowserRouter>

    </>
  );
}