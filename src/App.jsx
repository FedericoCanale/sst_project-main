import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import viaggiData from "./data/data";

function App() {
  const [viaggi, setViaggi] = useState(viaggiData);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage viaggi={viaggi} setViaggi={setViaggi} />} />
          <Route path="/details/:id" element={<TravelPage viaggi={viaggi} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;