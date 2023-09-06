import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import "./App.css";

const routes = [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/articles/:title',
    element: <Article />
  },
  {
    path: '/categories',
    element: <Categories />,
    children: [
      {
        path: '/categories/:name',
        element: <Category />
      }
    ]

  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: '/profile/edit',
        element: <EditProfileForm />
      }
    ]
  },
  {
    path: '/authors/:name',
    element: < Author />
  }
]

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {
        routes.map(
          route => (
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            >
              {route?.children?.map(
                childRoute => (
                  <Route path={childRoute.path} element={childRoute.element} key={childRoute.path} />
                )
              )}
            </Route>
          )
        )
      }
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
