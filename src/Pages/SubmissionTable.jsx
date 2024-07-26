import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import CenteredLoader from "../Components/CenteredLoader";
import axios from "axios";
import apiURL from "../APIURL";
import { useState } from "react";

export default function SubmissionsTable() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const params = useParams()
    const navigate = useNavigate()

    const sanitizeURL = (url) => {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url
        } else {
            return `http://${url}`
        }
    }

    const getSubmissions = async () => {
        const response = await axios.get(`${apiURL}/api/admin/submissions`)
        return response.data
    }

    const {data: submissions, isLoading, error} = useQuery({
        queryKey: ["submissions"],
        queryFn: getSubmissions,
    })

    if (isLoading) {
        return <CenteredLoader/>
    }

    if (error) {
        console.log(error)
    }

    const columns = [
        { id: 'name', label: 'Nama', minWidth: 260},
        { id: 'url', label: 'URL'},
        { id: 'status', label: 'Status'},
    ];

    function createData(name, url, status) {
        return { name, url, status };
    }

    const rows = [];
    submissions?.filter((submission) => submission.taskID === params.taskID && submission.user.Group === params.group)
        .map(({user, url, status}) => 
        (rows.push(createData(user.FullName, url, status))))

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
                        onClick={() => navigate(`/admin/submissions/${params.taskID}`)}>Back</Button>
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
                                        // if url then make it a link
                                        <TableCell key={column.id}>
                                        {column.id === 'url'
                                        ? <a href={sanitizeURL(value)} target="_blank" rel="noreferrer">{value}</a>
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