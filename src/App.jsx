import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <BrowserRouter basename="/">
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
