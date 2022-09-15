import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 1

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> {/* 2 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Home = () => <div>Home</div>
const Content = () => <div>Content</div>
const About = () => <div>About</div>
const NotFound = () => <div>404 Not Found</div>