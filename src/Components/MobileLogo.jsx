import { Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileLogo() {
    return (
        <>
            <Link to='/' >
              <Avatar src="/logosmall.png" sx={{mr: 1, ml: 2}} />
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
        </>
    )
}