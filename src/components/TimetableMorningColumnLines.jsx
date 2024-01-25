import React from "react";

function TimetableMorningColumnLines() {
  const items = [];
  for (let i = 8; i <= 13; i++) {
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
          {item < 13 && (
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

export default TimetableMorningColumnLines;
