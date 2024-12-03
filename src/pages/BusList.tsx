import {BusCard} from "../components/BusCard.tsx";
import {Box, Grid, Pagination} from "@mui/material";
import {useState} from "react";
import {useFetchBuses} from "../hooks/UseFetchBuses.ts";
import {BusDialog} from "../components/BusDialog.tsx";
import {Bus} from "../interfaces/Bus.ts";

export const BusList = (): JSX.Element => {
    const { buses, loading, error } = useFetchBuses();
    const [page, setPage] = useState(1);
    const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const itemsPerPage = 6;
    const pageCount = Math.ceil(buses.length / itemsPerPage);

    const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handleEdit = (bus: Bus) => {
        setSelectedBus(bus);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setSelectedBus(null);
    };

    const handleSave = (bus: Bus) => {

        setDialogOpen(false);
        setSelectedBus(null);
    };

    const displayedBuses = buses.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (buses.length === 0)
        return (
            <div className="text-light text-center">
                <h2>There are no buses yet</h2>
            </div>
        );

    return (
        <Box>
            <Grid container spacing={2}>
                {displayedBuses.map(bus => (
                    <Grid item xs={12} sm={6} md={4} key={bus.id}>
                        <BusCard bus={bus} onEdit={handleEdit} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
            />
            <BusDialog
                bus={selectedBus}
                open={dialogOpen}
                onClose={handleDialogClose}
                onSave={handleSave}
            />
        </Box>
    );
};