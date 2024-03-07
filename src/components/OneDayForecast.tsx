import DailyForecast from '../services/models/ForecastModel'


interface OneDayForecastProps {
    forecast: DailyForecast;
}

export default function OneDayForecast({forecast}: OneDayForecastProps) {
  const formatTimestamp = (timestamp: string) => {
    const date: Date = new Date(timestamp);
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <div className="flex flex-row flex-wrap">
        <div className="basis-full lg:basis-1/4 m-auto text-center">
          <p className="text-xl font-semibold">{forecast.name}</p>
          <p className="">{formatTimestamp(forecast.startTime)}</p>
          <div className="">
            <p className="p-3"><img src={forecast.icon} alt="Weather icon" className="w-24 h-24 mx-auto" /></p>
          </div>
        </div>
        <div className="basis-full lg:basis-1/4 my-auto text-left">
          <p><strong>Temperature:</strong> {forecast.temperature} {forecast.temperatureUnit}</p>
          <p><strong>Wind:</strong> {forecast.windSpeed} {forecast.windDirection}</p>
          <p><strong>Forecast:</strong> {forecast.shortForecast}</p>
        </div>

        <div className="basis-full lg:basis-1/2 my-auto text-left">
          <strong>Detailed Forecast</strong>
          <p>{forecast.detailedForecast}</p>
        </div>
      </div>

    </div>
  );
}
