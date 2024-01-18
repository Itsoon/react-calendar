import React from "react";
import "./App.css";

function Gen(day_1, day_2, day_3, months) {
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
              <li className="line"></li>
            </ul>
            {item < 20 && (
              <ul className="lines">
                <li className="hours">
                  <div>30</div>
                </li>
                <li className="line"></li>
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
        <table>
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
              height="1682"
              viewBox="0 0 1054 1682"
              fill="none"
            >
              <path
                d="M1052 0V1650C1052 1666.57 1038.57 1680 1022 1680H32C15.4315 1680 2 1666.57 2 1650V1495.44"
                stroke="black"
                stroke-width="4"
              />
            </svg>
          </div>
        </table>
      </div>
    </div>
  );
}

export default Gen;
