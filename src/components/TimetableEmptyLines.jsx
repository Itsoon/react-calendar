import React from "react";

function TimetableEmptyLines() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="spepe">
        <div className="verticalLine"></div>
        <div className="in">
          {items.map((item) => (
            <React.Fragment key={item}>
              <ul className="lines">
                <li className="line" />
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
export default TimetableEmptyLines;
