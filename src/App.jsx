import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './layout/DefaultLayout'
import HomePage from "./pages/HomePage"
import TravelPage from "./pages/TravelPage"

function App() {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<TravelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
