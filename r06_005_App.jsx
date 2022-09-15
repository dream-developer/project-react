import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { Article } from './components/Article';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} >{/* 1 */}
            <Route path="article" element={<Article />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}