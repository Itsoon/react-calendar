import "./App.css";
import Gen from "./Gen";
import calendar_json from "./assets/calendar_2024.json";

function App() {
  let day_1, day_2, day_3, sunday, months;
  let gen = [];
  let state = 0;
  for (let i = 0; i < calendar_json.length; i += 3) {
    if (i + 2 < calendar_json.length) {
      day_1 = calendar_json[i].day;
      day_2 = calendar_json[i + 1].day;
      day_3 = calendar_json[i + 2].day;
      sunday = calendar_json[i + 2].day_;
      months = calendar_json[i + 2].months;
      gen.push(
        <div key={i}>{Gen(day_1, day_2, day_3, sunday, months, state)}</div>
      );
      if (state === 1) {
        state = 0;
      } else if (state === 0) {
        state = 1;
      }
    }
  }

  return <>{gen};</>;
}

export default App;
