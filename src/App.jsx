import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element="" />
          <Route path="detail" element="" />
          <Route path="blog" element="" />
          <Route path="*" element="" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
