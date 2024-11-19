import {JSX} from 'react'
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import './App.css'
import {BusList} from "./pages/BusList.tsx";
import {Link, Route, Routes} from "react-router-dom";
import {BusDetail} from "./pages/BusDetail.tsx";


export const App = (): JSX.Element => {

    return (
        <div  style={{ height: "100vh" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CIVA
                    </Typography>
                    <Button color="inherit" component={Link} to="/buses">Buses</Button>
                    <Button color="inherit" component={Link} to="/bus">Bus</Button>
                </Toolbar>
            </AppBar>
            <main>
                <Box sx={{ padding: 2 }}>
                    <Routes>
                        <Route path="/" element={<BusList />} />
                        <Route path="/buses" element={<BusList />} />
                        <Route path="/bus" element={<BusDetail />} />
                    </Routes>
                </Box>


            </main>
        </div>
    );

};

