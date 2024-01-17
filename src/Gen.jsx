import React from "react";
import "./App.css";

function Gen(day_1, day_2, day_3, months) {
  function dayComponent(day_1, day_2, day_3) {
    return (
      <div className="dayContainer">
        <div className="days">
          <ul className="dayLanguage">
            <li>{day_1[1]}</li>
            <li>{day_1[2]}</li>
          </ul>
          <div className="dayNumber">{day_1[0]}</div>
        </div>
        <div className="days">
          <ul className="dayLanguage">
            <li>{day_2[1]}</li>
            <li>{day_2[2]}</li>
          </ul>
          <div className="dayNumber">{day_2[0]}</div>
        </div>
        <div className="days">
          <ul className="dayLanguage">
            <li>{day_3[1]}</li>
            <li>{day_3[2]}</li>
          </ul>
          <div className="dayNumber">{day_3[0]}</div>
        </div>
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
      <div className="linesContainer">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index}>
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
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="subContainer">
        {monthsComponent(months)}
        {dayComponent(day_1, day_2, day_3)}
        {lines()}
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Gen;
