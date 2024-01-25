import React from "react";

function TimetableLinesWithTime() {
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

export default TimetableLinesWithTime;
