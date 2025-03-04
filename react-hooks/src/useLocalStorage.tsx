import { useEffect, useState } from "react";

const getSavedValue = (key: any, initialValue: any) => {
    const savedValue = JSON.stringify(localStorage.getItem(key))

    if (savedValue) return savedValue




}


export const useLocalStorage = (key: string, initialValue: any) => {
    console.log(key, initialValue)
    // Get the saved value from localStorage, or fall back to initialValue if not found
    const [value, setValue] = useState(() => {
        const savedValue = localStorage.getItem(key);
        if (savedValue) {
            try {
                return JSON.parse(savedValue); // Parsing and type casting
            } catch (error) {
                console.error('Error reading localStorage value', error);
                return initialValue; // Return initialValue in case of error
            }
        }
        return initialValue; // Use initialValue if no value is found
    });

    // Update localStorage whenever the value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]); // Update localStorage whenever 'key' or 'value' changes

    return [value, setValue] as const;
};
