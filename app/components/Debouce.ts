import { useEffect, useState } from "react";

export const useDebouce = <T>(value: T, delay = 500) => {
    const [deBouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return deBouncedValue;
};