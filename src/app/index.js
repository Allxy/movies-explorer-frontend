import { BrowserRouter } from "react-router-dom";
import SessionContextProvider from "./provides/SessionContextProvider";
import Routing from "../pages";

function App() {
  return (
    <BrowserRouter>
      <SessionContextProvider>
        <Routing />
      </SessionContextProvider>
    </BrowserRouter>
  );
}

export default App;
