import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/success";
import Protected from "./pages/protected";
import Error from "./pages/error"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/sucess" element = {<Protected  element={<Success/>} /> }/>
        <Route path = "/*" element = {<Error/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
