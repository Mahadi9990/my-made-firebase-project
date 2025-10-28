import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import AllSkills from "../components/AllSkills";

export const AllRoute = createBrowserRouter([
  {
    path:'/',
    Component:Main,
    children:[
      {
        index:true,
        Component:AllSkills
      }
    ]
  },{
    path:'/About',
    Component: About
  }
])