import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SingleEvent from "./pages/SingleEvent";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=":cat" element={<CategoryPage />} />
        <Route path=":cat/:eventId" element={<SingleEvent />} />
      </Route>
    </Routes>
  );
}

export default App;
