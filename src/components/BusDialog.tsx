import {Bus} from "../interfaces/Bus.ts";
import {Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from "@mui/material";
import {useState, useEffect} from "react";

interface BusDialogProps {
    bus: Bus | null;
    open: boolean;
    onClose: () => void;
    onSave: (bus: Bus) => void;
}

export const BusDialog = ({ bus, open, onClose, onSave }: BusDialogProps) => {
    const [formData, setFormData] = useState<Bus | null>(null);

    useEffect(() => {
        if (bus) {
            setFormData(bus);
        }
    }, [bus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formData) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSave = () => {
        if (formData) {
            onSave(formData);
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Editar Bus</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Numero"
                    name="number"
                    value={formData?.number || ''}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Caracteristicas"
                    name="characteristics"
                    value={formData?.characteristics || ''}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Marca"
                    name="brandName"
                    value={formData?.brandName || ''}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={handleSave} variant="contained">Guardar</Button>
            </DialogActions>
        </Dialog>
    );
};