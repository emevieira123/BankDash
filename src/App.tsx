import { BrowserRouter } from "react-router-dom";
import { Router } from "./infra/routes"

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App
