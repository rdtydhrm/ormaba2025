import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, ScrollRestoration, createBrowserRouter } from 'react-router-dom';
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
import Submissions from './Pages/Submissions';
import SubmissionsGroup from './Pages/SubmissionsGroup';
import SubmissionsTable from './Pages/SubmissionTable';
import AnnouncementDetail from './Pages/AnnouncementsDetail';
import SubmissionDetail from './Pages/SubmissionDetail';
import MentorLogin from './Pages/MentorLogin';
import NotFound from './Pages/NotFound';
import ErrorBoundary from './Pages/ErrorBoundary';

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
    element: <Home />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/landing',
    element: <Landing />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/tasks',
    element: <Tasks />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/submissions/:id',
    element: <SubmissionDetail />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/announcements',
    element: <Announcements />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/announcements/:id',
    element: <AnnouncementDetail />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/profile/:isSaved',
    element: <Profile />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/access',
    element: <AdminLogin />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/students',
    element: <Students />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/students/:group',
    element: <StudentsTable />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/submissions',
    element: <Submissions />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/submissions/:taskID',
    element: <SubmissionsGroup />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/admin/submissions/:taskID/:group',
    element: <SubmissionsTable />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/mentor',
    element: <MentorLogin />,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/*',
    element: <NotFound />
  },
])

axios.defaults.withCredentials = true;

const queryClient = new QueryClient({})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <RouterProvider router={router}/>
        </CssBaseline>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
