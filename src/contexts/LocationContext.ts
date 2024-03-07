import { createContext } from "react";

export interface LocationInfo {
    lat: number;
    long: number;
}
export const defaultLocation: LocationInfo = {lat: 42.963795, long: -85.670006};
export const LocationContext = createContext(defaultLocation);