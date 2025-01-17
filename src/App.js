import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import PaymentBuffer from "./pages/PaymentBuffer";
import "./styles/custom.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter basename="/payment">
        <Routes>
          <Route path="/" element={<PaymentBuffer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/success" element={<PaymentSuccess />}></Route>
          <Route path="/error" element={<PaymentFailed />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
