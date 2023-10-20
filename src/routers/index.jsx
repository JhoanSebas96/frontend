import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { AcademicCourses, loaderAcademicCourse } from '../pages/AcademicCourses'
import { Contact } from '../pages/Contact'
import { LayoutPublic } from '../layout/LayoutPublic';
import { Degrees } from '../pages/Degrees';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
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
        loader: loaderAcademicCourse,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
          path: "/oferta-academica/:carreraId", 
          element: <Degrees />
      }
    ]
  },
]);