import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from "./pages/home/Home";
import Details from "./pages/Moviedetails/Details";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <ToastContainer position="bottom-right" />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/details/:id" element={<Details/>} />
        <Route path="*"  />
    </Routes>

</BrowserRouter>

  );
}

export default App;
