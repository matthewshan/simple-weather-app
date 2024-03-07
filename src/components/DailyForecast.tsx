import { useContext, useEffect, useRef, useState } from "react"
import { LocationContext, LocationInfo } from "../contexts/LocationContext"
import WeatherService from "../services/WeatherService";
import ForecastModel from "../services/models/ForecastModel";
import OneDayForecast from "./OneDayForecast";


export default function DailyForecast() {
  const locationInfo: LocationInfo = useContext(LocationContext);
  const [forecastList, setForecastList] = useState<ForecastModel[] | null>(null);
  const errorRef = useRef(null);

  useEffect(() => {
    const weatherService: WeatherService = new WeatherService();
    weatherService.GetForecast(locationInfo.lat, locationInfo.long)
      .then(val => {
        setForecastList(val)
      })
      .catch(err => {
        console.log(`An error occurred when attempting to call the Weather Service: ${err}`);
        errorRef.current = err;
      });
  }, [locationInfo.lat, locationInfo.long]);


  if (forecastList != null) {
    return (
      <>
        <div>Daily Forecast</div>
        {forecastList.map(fc => {
          return(
            <OneDayForecast forecast={fc}></OneDayForecast>
          );
        })}
      </>
    );
  }
  return <>
    <div>uh oh</div>
    <div>
      There was an error retrieving weather forecast. Error Message: {JSON.stringify(errorRef.current)}
    </div>
  </>;

}

