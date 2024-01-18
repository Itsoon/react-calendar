import React from "react";
import "./App.css";
import Gen from "./Gen";
import calendar_json from "./assets/calendar_2024.json";

function App() {
  let day_1, day_2, day_3, months;
  let gen = [];
  for (let i = 0; i < calendar_json.length; i += 3) {
    if (i + 2 < calendar_json.length) {
      day_1 = calendar_json[i].day;
      day_2 = calendar_json[i + 1].day;
      day_3 = calendar_json[i + 2].day;
      months = calendar_json[i + 2].months;
      gen.push(<div key={i}>{Gen(day_1, day_2, day_3, months)}</div>);
    }
  }

  // day_1 = calendar_json[0].day;
  // day_2 = calendar_json[1].day;
  // day_3 = calendar_json[2].day;
  // months = calendar_json[1].months;
  // gen = Gen(day_1, day_2, day_3, months);
  return <>{gen};</>;
}

export default App;
