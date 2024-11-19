import {Bus} from "../interfaces/Bus.ts";
import {Card, CardContent, CardHeader} from "@mui/material";

export const BusCard = (bus: Bus) =>(
    <Card variant="outlined" sx={{ marginBottom: 2, maxWidth: 400, margin: '0 auto' }}>
            <CardHeader title={bus.plate} subheader={bus.isActive? "Activo": "Inactivo"}/>
            <CardContent>
                    <p>Id: {bus.id}</p>
                    <p>Numero: {bus.number}</p>
                    <p>Creación: {bus.createdAt}</p>
                    <p>Caracteristicas: {bus.characteristics}</p>
                    <p>Marca: {bus.brandName}</p>
            </CardContent>

    </Card>
);