import { createBrowserRouter } from 'react-router-dom';
import { loaderAcademicCourse } from '../pages/AcademicCourses'
import { LayoutPublic } from '../layout/LayoutPublic';
import { loaderCourse } from '../pages/Course';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const AcademicCourses = lazy(() => import('../pages/AcademicCourses'));
const Contact = lazy(() => import('../pages/Contact'));
const Course = lazy(() => import('../pages/Course'));


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading... </div>}>
            <Home />
          </Suspense>  
        ),
      },
      {
        path: "/nosotros",
        element:  (
          <Suspense fallback={<div>Loading... </div>}>
            <About />
          </Suspense>  
        ),
      },
      {
        path: "/oferta-academica",
        element:  (
          <Suspense fallback={<div>Loading... </div>}>
            <AcademicCourses />
          </Suspense>  
        ),
        loader: loaderAcademicCourse,
      },
      {
        path: "/oferta-academica/:carreraId",
        element: (
          <Suspense fallback={<div>Loading... </div>}>
            <Course />
          </Suspense>  
        ),
        loader: loaderCourse,
      },
      {
        path: "/contacto",
        element:  (
          <Suspense fallback={<div>Loading... </div>}>
            <Contact />
          </Suspense>  
        ),
      }
    ]
  },
]);