import './App.css'

import { LocationContext, defaultLocation } from './contexts/LocationContext'
import DailyForecast from './components/DailyForecast'

function App() {
  return (
    <>
      <LocationContext.Provider value={defaultLocation}>
        <DailyForecast>
        </DailyForecast>
      </LocationContext.Provider>
    </>
  )
}

export default App
