import "./App.css";
import DayDisplay from "./components/DayDisplay";
import MonthDisplay from "./components/MonthDisplay";
import SundayDayDisplay from "./components/SundayDayDisplay";
import TimetableEmptyLines from "./components/TimetableEmptyLines";
import TimetableLinesWithTime from "./components/TimetableLinesWithTime";
import TimetableMorningColumnLines from "./components/TimetableMorningColumnLines";

function Gen(day_1, day_2, day_3, sunday, months, states) {
  let tableStyle;
  let svgStyle;
  if (states === 0) {
    tableStyle = { margin: "0 5em 0 0" };
  } else if (states === 1) {
    tableStyle = { margin: "0 0 0 5em" };
    svgStyle = { marginLeft: "5em" };
  }
  let splitColumn = false;
  if (day_3[2] === "Saturday") {
    splitColumn = true;
  }

  return (
    <div className="container">
      <div className="subContainer">
        {MonthDisplay(months)}
        <table style={tableStyle}>
          <thead>
            <tr className="dayContainer">
              <td>{DayDisplay(day_1)}</td>
              <td>{DayDisplay(day_2)}</td>
              <td>{DayDisplay(day_3)}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div>
                <td>{TimetableLinesWithTime()}</td>
                <td>{TimetableLinesWithTime()}</td>
                {splitColumn === true ? (
                  <td className="specialTD">
                    {TimetableMorningColumnLines()}
                    {SundayDayDisplay(sunday)}
                    {TimetableEmptyLines()}
                  </td>
                ) : (
                  <td>{TimetableLinesWithTime()}</td>
                )}
              </div>
            </tr>
          </tbody>
          <div className="border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1054"
              height="1692"
              viewBox="0 0 1054 1692"
              fill="none"
              style={svgStyle}
            >
              <path
                d="M1052 0V1660C1052 1676.57 1038.57 1690 1022 1690H32C15.4315 1690 2 1676.57 2 1660V1514.34"
                stroke="black"
                strokeWidth="4"
              />
            </svg>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Gen;
