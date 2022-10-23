import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Default from "./layouts/Default"
import Home from  "./pages/Home";
import Work from  "./pages/Work";
// import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Default />}>
        <Route index element={<Home />}></Route>
        <Route path="dev" element={<Work />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
