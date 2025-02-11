import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import "./index.css";
import Root from "./Root.jsx";
import Home from "./components/Home/Home.jsx";
import App from "./App.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact.jsx/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubLoader } from "./components/Github/Github";

//Method-1

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);


//Method-2

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/> 
      <Route loader={githubLoader}
       path="github" element={<Github/>}/> 

    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
