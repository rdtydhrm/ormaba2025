import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Link to='/'>
                <Button>Home</Button>
            </Link>
        </>
    )
}

export default Navbar