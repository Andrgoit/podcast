import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element="" />
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
