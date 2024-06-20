import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Link to='/'>
                <Button>Tentang</Button>
            </Link>
            <Link to='/tasks'>
                <Button>Tugas</Button>
            </Link>
            <Link to='/attendance'>
                <Button>Presensi</Button>
            </Link>
        </>
    )
}

export default Navbar