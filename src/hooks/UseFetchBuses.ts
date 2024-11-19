import {useEffect, useState} from "react";
import {Bus} from "../interfaces/Bus.ts";

export const useFetchBuses = () =>{
    const [buses, setBuses] = useState<Bus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBuses = async ()=> {
            try {
                const response = await fetch("http://localhost:8080/bus");
                if (!response.ok)
                    throw new Error("An error occurred while fetching the data");

                const data = await response.json();
                console.log(data);
                setBuses(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        }
        fetchBuses();
    }, []);

    return {buses, loading, error};
}