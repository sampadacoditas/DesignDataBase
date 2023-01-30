import React from "react";
import { Exercise } from "../Pages/Exercise/Exercise";
import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/UserPage/Home/Home";
import { ProjectPage } from "../Pages/UserPage/ProjectPage/ProjectPage";


export const RoutesData = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];
