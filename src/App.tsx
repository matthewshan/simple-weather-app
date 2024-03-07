import { LocationContext, defaultLocation } from './contexts/LocationContext'
import DailyForecast from './components/DailyForecast'

function App() {
  return (
    <>
      <div>
        <header>
          <div className="bg-gray-700">
            <div className=" text-3xl max-w-screen-lg pl-4 py-6 m-auto text-white">
              Weather
            </div>
          </div>
        </header>
        <body className="max-w-screen-lg mx-auto my-0 text-center">
          <LocationContext.Provider value={defaultLocation}>
            <DailyForecast>
            </DailyForecast>
          </LocationContext.Provider>
        </body>
        {/* <footer className="bg-black mt-4">
          <div className="text-sm pl-4 py-3 m-auto text-black">
              Weather
            </div>
        </footer> */}
      </div>
    </>
  )
}

export default App
