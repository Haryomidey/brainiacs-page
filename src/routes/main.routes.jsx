import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import ScrollToTop from "../components/ScrollToTop";
import Portfolio from "../pages/portfolio";

function MainLayout({ children }) {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

const router = createHashRouter([
  { path: "/", element: <MainLayout><Home /></MainLayout> },
  { path: "/about", element: <MainLayout><About /></MainLayout> },
  { path: "/contact", element: <MainLayout><Contact /></MainLayout> },
  { path: "/portfolio", element: <MainLayout><Portfolio /></MainLayout> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
