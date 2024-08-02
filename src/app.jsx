import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/app/home/Home";
import Layout from "./pages/app/layout/Layout";
import About_Us from "./pages/app/about_us/About_Us";
import Academics from "./pages/app/academics/Academics";
import Admissions from "./pages/app/admission/Admissions";
import Contact_Us from "./pages/app/contact_us/Contact_Us";
import Faculty from "./pages/app/faculty/Faculty";
import Gallery from "./pages/app/gallery/Gallery";
import Students from "./pages/app/students/Students";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "preact/hooks";
import Page404 from "./pages/misc/Page_404";

export function App() {
  const containerRef = useRef(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about-us",
          element: <About_Us />,
        },
        {
          path: "academics",
          element: <Academics />,
        },
        {
          path: "admission",
          element: <Admissions />,
        },
        {
          path: "contact-us",
          element: <Contact_Us />,
        },
        {
          path: "faculty",
          element: <Faculty />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "students",
          element: <Students />,
        },
      ],
    },
  ]);
  return (
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   containerRef={containerRef}
    // >
    //   <div data-scroll-container ref={containerRef}>

    //   </div>
    // </LocomotiveScrollProvider>
    // <>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
    // </>
  );
}
