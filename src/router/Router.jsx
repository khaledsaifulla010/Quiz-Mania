import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Quiz from "../pages/Quiz/Quiz";
import Result from "../pages/Result/Result";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

export default router;
