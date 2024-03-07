import axios, { AxiosInstance, AxiosResponse } from "axios";

import ForecastModel from "./models/ForecastModel";

export default class WeatherService {
    api: AxiosInstance;

    constructor() {
        console.log("Initializing Weather Service...")
        this.api = axios.create({
            baseURL: 'https://api.weather.gov/',
        })

    }

    async GetForecast(lat: number, long: number) : Promise<ForecastModel[]>  {
        //TODO: Make this function safer, add proper error handling, and maybe exponential backoff
        const pointsResponse: AxiosResponse = await this.api.get(`points/${lat},${long}`);
        const officeId: string = pointsResponse.data?.properties?.cwa;
        const gridX: string = pointsResponse.data?.properties?.gridX;
        const gridY: string = pointsResponse.data?.properties?.gridY;

        const dailyForecastResponse: AxiosResponse = await this.api.get(`gridpoints/${officeId}/${gridX},${gridY}/forecast`);

        const result = dailyForecastResponse.data.properties.periods as ForecastModel[];
        return result;
    }


}