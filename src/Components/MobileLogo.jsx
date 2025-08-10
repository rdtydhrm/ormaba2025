import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileLogo() {
    return (
        <>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Link to='/' style={{height: '2em'}}>
              <Box component='img' src="/ormaba25/Merak Ormaba.png" sx={{mr: 1, ml: 2, height: '2em'}} />
            </Link>
            <Link to='/' style={{textDecoration: 'none'}}>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'primary.main',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                ORMABA
              </Typography>
            </Link>
            </Box>
        </>
    )
}