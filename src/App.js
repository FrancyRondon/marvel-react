import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

function App() {
const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=25f95f7e97c707909a9095d872e04112&hash=bfea79ccd80f11a18880e3edefcc8d3b');

console.log(exampleApi);
  return (
    <div>
     <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/comics" element={<Comics />} />
        <Route element={<Error404 />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
