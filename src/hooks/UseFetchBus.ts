import {useState} from "react";
import {Bus} from "../interfaces/Bus.ts";

export const useFetchBus = () => {
    const [bus, setBus] = useState<Bus | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchBus = async (id: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:8080/bus/${id}`);
            if (!response.ok) throw new Error("An error occurred while fetching the data");

            const data = await response.json();
            setBus(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return {bus, loading, error, fetchBus};
};