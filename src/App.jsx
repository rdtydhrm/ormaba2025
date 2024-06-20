import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { amber } from '@mui/material/colors';
import Tasks from './Pages/Tasks';
import Attendance from './Pages/Attendance';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: amber
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <HashRouter>
            <Routes>
              <Route path='/landing' element={<Landing/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/tasks' element={<Tasks/>}/>
              <Route path='/attendance' element={<Attendance/>}/>
            </Routes>
          </HashRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
