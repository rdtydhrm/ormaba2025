import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import CenteredLoader from "../Components/CenteredLoader";
import axios from "axios";
import apiURL from "../APIURL";
import { useState } from "react";

export default function StudentsTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const params = useParams()
    const navigate = useNavigate()

    const getStudents = async () => {
        const response = await axios.get(`${apiURL}/api/admin/students/${params.query}`)
        return response.data
    }

    const {data: students, isLoading, error} = useQuery({
        queryKey: ["students"],
        queryFn: getStudents,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        console.log(error)
    }

    const columns = [
        { id: 'name', label: 'Nama', minWidth: 260},
        { id: 'nim', label: 'NIM'},
        { id: 'email', label: 'Email'},
        { id: 'faculty', label: 'Fakultas'},
        { id: 'studyProgram', label: 'Program Studi'},
        { id: 'origin', label: 'Asal Daerah'},
        { id: 'pdob', label: 'Tempat, Tanggal Lahir', minWidth: 210},
        { id: 'lineID', label: 'ID Line'},
        { id: 'instagram', label: 'Instagram'},
        { id: 'phoneNumber', label: 'Nomor Telepon'},
        { id: 'hobby', label: 'Hobi'},
        { id: 'foodAlergies', label: 'Alergi Makanan'},
        { id: 'sickness', label: 'Riwayat Penyakit'},
        { id: 'motto', label: 'Motto Hidup'},
    ];

    function createData(name, nim, email, faculty, studyProgram, lineID, instagram, phoneNumber, foodAlergies, sickness, origin, hobby, pdob, motto) {
        return { name, nim, email, faculty, studyProgram, lineID, instagram, phoneNumber, foodAlergies, sickness, origin, hobby, pdob, motto };
    }

    const rows = [];
    students?.map(({FullName, NIM, Email, Faculty, StudyProgram, LineID, Instagram, PhoneNumber, FoodAlergies, Sickness, Origin, Hobby, PDOB, Motto}) => 
        (rows.push(createData(FullName, NIM, Email, Faculty, StudyProgram, LineID, Instagram, PhoneNumber, FoodAlergies, Sickness, Origin, Hobby, PDOB, Motto))))

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Box>
            <Box  sx={{ m: 4, position: 'absolute', display: { xs: 'none', md: 'inline' } }}>
                <Button variant="contained" size="medium"
                        onClick={() => navigate("/admin/students")}>Back</Button>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
                <Box>
                    <TableContainer sx={{ maxHeight: '90vh', maxWidth: { xs: '100vw', md: '80vw' } }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Box>
        </Box>
    )
}