export default interface ForecastModel {
    // See :https://www.weather.gov/documentation/services-web-api#/default/gridpoint_forecast
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    windSpeed: string;
    windDirection: string;
    /** Represents the Icon URI from the NWS */
    icon: string;
    /** Represents the short description of the forecast */
    shortForecast: string;
    /** Represents the long description of the forecast */
    detailedForecast: string;
}

/**
    {
        "number": 1,
        "name": "Today",
        "startTime": "2024-03-07T09:00:00-05:00",
        "endTime": "2024-03-07T18:00:00-05:00",
        "isDaytime": true,
        "temperature": 52,
        "temperatureUnit": "F",
        "temperatureTrend": null,
        "probabilityOfPrecipitation": {
            "unitCode": "wmoUnit:percent",
            "value": null
        },
        "dewpoint": {
            "unitCode": "wmoUnit:degC",
            "value": 3.888888888888889
        },
        "relativeHumidity": {
            "unitCode": "wmoUnit:percent",
            "value": 76
        },
        "windSpeed": "9 mph",
        "windDirection": "ESE",
        "icon": "https://api.weather.gov/icons/land/day/bkn?size=medium",
        "shortForecast": "Mostly Cloudy",
        "detailedForecast": "Mostly cloudy, with a high near 52. East southeast wind around 9 mph."
    }
*/