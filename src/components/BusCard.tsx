import {Bus} from "../interfaces/Bus.ts";
import {Button, Card, CardContent, CardHeader} from "@mui/material";

interface BusCardProps {
    bus: Bus;
    onEdit: (bus: Bus) => void;
}

export const BusCard = ({ bus, onEdit }: BusCardProps) =>(
    <Card variant="outlined" sx={{ marginBottom: 2, maxWidth: 400, margin: '0 auto' }}>
            <CardHeader title={bus.plate} subheader={bus.isActive? "Activo": "Inactivo"}/>
            <CardContent>
                    <p>Id: {bus.id}</p>
                    <p>Numero: {bus.number}</p>
                    <p>Creación: {bus.createdAt}</p>
                    <p>Caracteristicas: {bus.characteristics}</p>
                    <p>Marca: {bus.brandName}</p>
                <Button variant="contained" onClick={() => onEdit(bus)}>Editar</Button>

            </CardContent>

    </Card>
);