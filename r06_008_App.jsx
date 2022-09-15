import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Content } from './components/Content';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="content" element={<Content />} />         
        </Routes>
      </BrowserRouter>
    </>
  );
}