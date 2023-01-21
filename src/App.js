import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Landing from "./page/Landing";

import { Resume } from "./page/Resume"


function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing />} />

      <Route path='/resume' element={<Resume />} />


    </Routes>
  );
}

export default App;
