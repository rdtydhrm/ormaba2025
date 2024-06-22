import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { amber } from '@mui/material/colors';
import Tasks from './Pages/Tasks';
import Attendance from './Pages/Attendance';
import Login from './Pages/Login';
import axios from "axios";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: amber
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
    path: '/attendance',
    element: <Attendance />
  }
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
