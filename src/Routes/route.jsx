import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import AllSkills from "../components/AllSkills";
import Login from "../components/Login";
import Auth from "../layout/Auth";
import Register from "../components/Register";

export const AllRoute = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        Component: AllSkills,
      },
    ],
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/auth",
    Component: Auth,
    children:[{
      index:true,
      Component: Login
    },{
      path:"register",
      Component: Register
    }]
  },
]);
