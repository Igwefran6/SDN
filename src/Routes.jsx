import About from "./components/About.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Err404 from "./components/Err404.jsx";
import Quiz from "./components/Quiz.jsx";
import ContactPage from "./components/ContactPage.jsx";
import LearningPath from "./components/LearningPath.jsx";
import CourseContent from "./components/CourseContent.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Err404 />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Err404 />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    errorElement: <Err404 />,
  },
  {
    path: "/feedback",
    element: <ContactPage />,
    errorElement: <Err404 />,
  },
  {
    path: "/learning-path",
    element: <LearningPath />,
    errorElement: <Err404 />,
  },
  {
    path: "/course-content",
    element: <CourseContent />,
    errorElement: <Err404 />,
  },
]);

export default Routes;
