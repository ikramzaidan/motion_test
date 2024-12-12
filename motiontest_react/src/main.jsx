import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Counter from './pages/Counter.jsx';
import Time from './pages/Time.jsx';
import Crawler from './pages/Crawler.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "/counter", element: <Counter />},
      {path: "/time", element: <Time />},
      {path: "/crawler", element: <Crawler />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
