import DailyForecast from '../services/models/ForecastModel'


interface OneDayForecastProps {
    forecast: DailyForecast;
}

export default function OneDayForecast({forecast}: OneDayForecastProps) {
  return (
    <>
      <div>
        {JSON.stringify(forecast)}
      </div>
      <hr></hr>
    </>
  )
}

