// App.jsx
import Hero from './components/Hero'
import RegisterForm from './components/RegisterForm'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Hero />,
        },
        {
          path: '/registerform',
          element: <RegisterForm />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
