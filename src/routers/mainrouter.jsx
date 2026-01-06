import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/homepage.jsx';
import About from "../pages/about.jsx";
import Layout from '../layouts/footer.jsx'; 
import Contact from "../pages/contact.jsx";
import Menu from "../pages/menu.jsx"
import BlogPage from '../pages/blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // 
        element: <Homepage />,
      },
      {
        path: 'about', 
        element: <About />,
      },

      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
    ],
  },
]);

export default router;