 import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { AppLayout } from '../layout/app.layout';

// Import your page components
const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Bienvenido a MentesGeniales</h1>
    <p className="text-lg">Contenido de la página principal.</p>
  </div>
);

const ServicesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Nuestros Servicios</h1>
    <p className="text-lg">Información sobre nuestros servicios.</p>
  </div>
);

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Sobre Mí</h1>
    <p className="text-lg">Información sobre la profesional.</p>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Contáctame</h1>
    <p className="text-lg">Formulario de contacto.</p>
  </div>
);

// Create routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout><Outlet /></AppLayout>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/servicios",
        element: <ServicesPage />,
      },
      {
        path: "/sobre-mi",
        element: <AboutPage />,
      },
      {
        path: "/contacto",
        element: <ContactPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};