import "./App.css";
import Home from "./components/Timetable/Home";
import Calendar from "./components/Timetable/Calendar";
import React from "react";
const App = () => {
  return (
    <div className="App">
      <Home />
      <Calendar />
    </div>
  );
};

export default App;
