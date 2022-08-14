import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ModalProvider from "./Context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </ModalProvider>
  );
}

export default App;
