import React from "react";
import "./App.css";

function Gen(day_1, day_2, day_3, months, states) {
  let tableStyle;
  let svgStyle;
  if (states === 0) {
    tableStyle = { margin: "0 5em 0 0" };
  } else if (states === 1) {
    tableStyle = { margin: "0 0 0 5em" };
    svgStyle = { marginLeft: "5em" };
  }
  function dayComponent(day) {
    return (
      <div className="days">
        <ul className="dayLanguage">
          <li>{day[1]}</li>
          <li>{day[2]}</li>
        </ul>
        <div className="dayNumber">{day[0]}</div>
      </div>
    );
  }
  function monthsComponent(months) {
    return (
      <div className="months">
        <div>
          <span>{months[0]}</span>
          <img
            src="https://www.svgrepo.com/show/35641/dot.svg"
            alt=""
            width="14"
            className="dotsvg"
          />
          <span>{months[1]}</span>
        </div>
      </div>
    );
  }

  function lines() {
    const items = [];
    for (let i = 8; i <= 20; i++) {
      items.push(i);
    }

    return (
      <>
        {items.map((item) => (
          <React.Fragment key={item}>
            <ul className="lines">
              <li className="hours">
                <div>{item}</div>
              </li>
              <li className="line" />
            </ul>
            {item < 20 && (
              <ul className="lines">
                <li className="hours">
                  <div>30</div>
                </li>
                <li className="line" />
              </ul>
            )}
          </React.Fragment>
        ))}
      </>
    );
  }

  return (
    <div className="container">
      <div className="subContainer">
        {monthsComponent(months)}
        <table style={tableStyle}>
          <thead>
            <tr className="dayContainer">
              <td>{dayComponent(day_1)}</td>
              <td>{dayComponent(day_2)}</td>
              <td>{dayComponent(day_3)}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="linesContainer">{lines()}</td>
              <td className="linesContainer">{lines()}</td>
              <td className="linesContainer">{lines()}</td>
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
