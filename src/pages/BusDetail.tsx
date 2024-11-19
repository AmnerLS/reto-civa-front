import {Box, Button, TextField} from "@mui/material";
import {useState} from "react";
import {BusCard} from "../components/BusCard.tsx";
import {useFetchBus} from "../hooks/UseFetchBus.ts";

export const BusDetail = (): JSX.Element => {
    const [value, setValue] = useState<string>("");
    const {bus, loading, error, fetchBus} = useFetchBus();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        const id = parseInt(value, 10);
        if (!isNaN(id)) {
            fetchBus(id);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start" height="100vh">
            <TextField
                required
                id="outlined-required"
                label="ID"
                helperText="Please enter ID"
                value={value}
                onChange={handleChange}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" onClick={handleClick} sx={{ marginBottom: 2 }}>Consultar</Button>
            {loading && <div>Loading...</div>}
            {!loading && error && <div>Error: {error}</div>}
            {!loading && !error && bus && <BusCard {...bus} />}
        </Box>
    );
};