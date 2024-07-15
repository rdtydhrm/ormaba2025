import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { amber } from '@mui/material/colors';
import Tasks from './Pages/Tasks';
import Login from './Pages/Login';
import axios from "axios";
import Profile from './Pages/Profile';
import Announcements from './Pages/Announcements';
import { CookiesProvider } from 'react-cookie';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import Students from './Pages/Students';
import StudentsTable from './Pages/StudentsTable';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // light: '#757ce8',
      main: '#efbb07',
      // dark: '#002884',
      // contrastText: '#fff',
    },
    secondary: {
      light: '#e2145f',
      main: '#481852',
      dark: '#8d0c55',
      // contrastText: '#000',
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/tasks',
    element: <Tasks />
  },
  {
    path: '/announcements',
    element: <Announcements />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/access',
    element: <AdminLogin />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />
  },
  {
    path: '/admin/students',
    element: <Students />
  },
  {
    path: '/admin/students/:query',
    element: <StudentsTable />
  },
  {
    path: '/admin/tasks',
    element: <AdminDashboard />
  },
])

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router} />
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
