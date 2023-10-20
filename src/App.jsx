import React from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home'
import { About } from './pages/About'
import { AcademicCourses } from './pages/AcademicCourses'
import { Contact } from './pages/Contact'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/nosotros",
          element: <About />,
        },
        {
          path: "/oferta-academica",
          element: <AcademicCourses />,
        },
        {
          path: "/contacto",
          element: <Contact />,
        },
        // {
        //      element: <DegreesPage />
        // }path: "/oferta-academica/:carreraId",
        //    
      ]
    },
  ]);

  return (
    <div>
      <Link to={ '/nosotros' }>nosotros</Link>
      <RouterProvider router={router} />
    </div>
  )
}

export default App