import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLayout from "layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
