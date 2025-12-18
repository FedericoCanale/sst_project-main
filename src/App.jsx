import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"
import viaggi from "./data/data"

function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage viaggi={viaggi} />} />
            <Route path="/details/:id" element={<TravelPage viaggi={viaggi} />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
