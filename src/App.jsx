// import React from "react";
// import { useEffect } from "react";
import "./App.css";
import Gen from "./Gen";
import calendar_json from "./assets/calendar_2024.json";
// import html2canvas from "html2canvas";

function App() {
  // let day_1, day_2, day_3, months;
  let gen = [];
  let state = 0;
  // for (let i = 0; i < calendar_json.length; i += 3) {
  //   if (i + 2 < calendar_json.length) {
  //     day_1 = calendar_json[i].day;
  //     day_2 = calendar_json[i + 1].day;
  //     day_3 = calendar_json[i + 2].day;
  //     months = calendar_json[i + 2].months;
  //     gen.push(<div key={i}>{Gen(day_1, day_2, day_3, months, state)}</div>);
  //     if (state === 1) {
  //       state = 0;
  //     } else if (state === 0) {
  //       state = 1;
  //     }
  //   }
  // }

  const day_1 = calendar_json[0].day;
  const day_1_ = calendar_json[3].day;
  const day_2 = calendar_json[1].day;
  const day_2_ = calendar_json[2].day;
  const day_3 = calendar_json[2].day;
  const day_3_ = calendar_json[3].day;
  const months = calendar_json[1].months;
  const months_ = calendar_json[2].months;
  const gen_ = Gen(day_1, day_2, day_3, months, state);
  const gen__ = Gen(day_1_, day_2_, day_3_, months_, state);
  gen.push(gen_);
  gen.push(gen_);
  gen.push(gen__);

  return <>{gen};</>;
}

export default App;
