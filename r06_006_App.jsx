import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Content } from './components/Content';
import { ContentIndex } from './components/ContentIndex';
import { Article } from './components/Article';
import { Notice } from './components/Notice';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} > {/* 1 */}
            <Route index element={<ContentIndex />} /> {/* 2 */}
            <Route path="article" element={<Article />} />
            <Route path="notice" element={<Notice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}