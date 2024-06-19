import { ThemeProvider, createTheme } from '@mui/material/styles';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { amber } from '@mui/material/colors';

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
              <Route path='/' element={<Landing/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </HashRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  )
}

export default App
