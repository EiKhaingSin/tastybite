import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/homepage.jsx';
import About from "../pages/about.jsx";
import Layout from '../layouts/footer.jsx'; 
import Contact from "../pages/contact.jsx";
import Menu from "../pages/menu.jsx"
import BlogPage from '../pages/blog.jsx';

const router = createBrowserRouter([
  {
    path: '/tastybite',
    element: <Layout />,
    children: [
      {
        index: true, // 
        element: <Homepage />,
      },
      {
        path: '/tastybite', 
        element: <About />,
      },

      {
        path: '/tastybite',
        element: <Contact />,
      },
      {
        path: '/tastybite',
        element: <Menu />,
      },
      {
        path: '/tastybite',
        element: <BlogPage />,
      },
    ],
  },
]);

export default router;