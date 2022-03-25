import { Addusers } from "./components/Addusers";
import { Allusers } from "./components/Allusers";
import { Codesforinterview } from "./components/Codesforinterview";
import { Navigation } from "./components/Navigation";
import {Routes, Route, BrowserRouter} from "react-router-dom"; 
import { Notfound } from "./components/Notfound";
import { Edituser } from "./components/Edituser";

function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Navigation />
     <Routes>
        <Route path="/" element={<Codesforinterview />} />
        <Route path="/add" element={<Addusers />} />
        <Route path="/all" element={<Allusers />} />
        <Route path="/edit/:id" element={<Edituser />} />
        <Route components={<Notfound />} />
        
      </Routes>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
