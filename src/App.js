import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import Home from "./pages/homepage/Home";
  import List from "./pages/list/List";
  import Hotel from "./pages/hotel/Hotel";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          {/* Add "/hotels" prefix to the path */}
          <Route path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  